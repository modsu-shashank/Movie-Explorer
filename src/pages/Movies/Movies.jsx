import React, { useState, useEffect } from 'react';
import { movieService } from '../../services/api';
import MovieCard from '../../components/MovieCard/MovieCard';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Button from '../../components/Button/Button';
import './Movies.css';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchMovies();
    }, [page]);

    const fetchMovies = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await movieService.getPopularMovies(page);
            setMovies(data.results || []);
            setTotalPages(data.total_pages || 1);
        } catch (err) {
            setError(err.message || 'Failed to fetch movies. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            fetchMovies();
            setIsSearching(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            setIsSearching(true);
            const data = await movieService.searchMovies(searchQuery, 1);
            setMovies(data.results || []);
            setTotalPages(data.total_pages || 1);
            setPage(1);
        } catch (err) {
            setError(err.message || 'Failed to search movies. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setIsSearching(false);
        setPage(1);
        fetchMovies();
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    if (loading && movies.length === 0) {
        return <Loader fullScreen text="Loading movies..." />;
    }

    if (error && movies.length === 0) {
        return <ErrorMessage message={error} onRetry={fetchMovies} fullScreen />;
    }

    return (
        <div className="movies-page">
            <div className="movies-header">
                <div className="container">
                    <h1 className="movies-title fade-in">
                        {isSearching ? 'Search Results' : 'Popular Movies'}
                    </h1>
                    <p className="movies-subtitle fade-in">
                        {isSearching
                            ? `Found ${movies.length} results for "${searchQuery}"`
                            : 'Discover the most popular movies right now'
                        }
                    </p>

                    {/* Search Bar */}
                    <form className="search-bar fade-in" onSubmit={handleSearch}>
                        <div className="search-input-wrapper">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search for movies..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    className="search-clear"
                                    onClick={handleClearSearch}
                                    aria-label="Clear search"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                        <Button type="submit" size="large">
                            Search
                        </Button>
                    </form>
                </div>
            </div>

            <div className="container">
                {movies.length === 0 ? (
                    <div className="no-results">
                        <div className="no-results-icon">🎬</div>
                        <h3>No movies found</h3>
                        <p>Try adjusting your search query</p>
                        <Button onClick={handleClearSearch}>
                            View Popular Movies
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="movies-grid">
                            {movies.map((movie, index) => (
                                <div
                                    key={movie.id}
                                    className="movie-grid-item fade-in"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <MovieCard movie={movie} />
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="pagination">
                                <Button
                                    variant="outline"
                                    onClick={handlePrevPage}
                                    disabled={page === 1}
                                >
                                    ← Previous
                                </Button>
                                <span className="pagination-info">
                                    Page {page} of {totalPages}
                                </span>
                                <Button
                                    variant="outline"
                                    onClick={handleNextPage}
                                    disabled={page === totalPages}
                                >
                                    Next →
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Movies;
