import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movieService } from '../../services/api';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Button from '../../components/Button/Button';
import './MovieDetail.css';

const MovieDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMovieData();
    }, [id]);

    const fetchMovieData = async () => {
        try {
            setLoading(true);
            setError(null);

            const [movieData, creditsData] = await Promise.all([
                movieService.getMovieDetails(id),
                movieService.getMovieCredits(id)
            ]);

            setMovie(movieData);
            setCredits(creditsData);
        } catch (err) {
            setError(err.message || 'Failed to fetch movie details. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Loader fullScreen text="Loading movie details..." />;
    }

    if (error) {
        return (
            <ErrorMessage
                message={error}
                onRetry={fetchMovieData}
                fullScreen
            />
        );
    }

    if (!movie) {
        return null;
    }

    const backdropUrl = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : null;

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    const getRatingColor = (rating) => {
        if (rating >= 7.5) return '#10b981';
        if (rating >= 6) return '#fbbf24';
        return '#ef4444';
    };

    const formatRuntime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="movie-detail-page">
            {/* Backdrop */}
            {backdropUrl && (
                <div className="movie-backdrop">
                    <img src={backdropUrl} alt={movie.title} />
                    <div className="backdrop-overlay"></div>
                </div>
            )}

            {/* Content */}
            <div className="movie-detail-content">
                <div className="container">
                    <Button
                        variant="ghost"
                        onClick={() => navigate(-1)}
                        className="back-button"
                        icon="←"
                    >
                        Back
                    </Button>

                    <div className="movie-detail-grid">
                        {/* Poster */}
                        <div className="movie-poster-section fade-in">
                            <img
                                src={posterUrl}
                                alt={movie.title}
                                className="movie-poster"
                            />
                        </div>

                        {/* Info */}
                        <div className="movie-info-section fade-in">
                            <h1 className="movie-detail-title">{movie.title}</h1>

                            {movie.tagline && (
                                <p className="movie-tagline">"{movie.tagline}"</p>
                            )}

                            {/* Meta Info */}
                            <div className="movie-meta">
                                <div
                                    className="movie-rating-large"
                                    style={{ color: getRatingColor(movie.vote_average) }}
                                >
                                    <span className="rating-icon">⭐</span>
                                    <span className="rating-value">{movie.vote_average?.toFixed(1)}</span>
                                    <span className="rating-count">({movie.vote_count} votes)</span>
                                </div>

                                <div className="movie-meta-items">
                                    {movie.release_date && (
                                        <div className="meta-item">
                                            <span className="meta-icon">📅</span>
                                            <span>{new Date(movie.release_date).getFullYear()}</span>
                                        </div>
                                    )}

                                    {movie.runtime && (
                                        <div className="meta-item">
                                            <span className="meta-icon">⏱️</span>
                                            <span>{formatRuntime(movie.runtime)}</span>
                                        </div>
                                    )}

                                    {movie.status && (
                                        <div className="meta-item">
                                            <span className="meta-icon">📊</span>
                                            <span>{movie.status}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Genres */}
                            {movie.genres && movie.genres.length > 0 && (
                                <div className="movie-genres">
                                    {movie.genres.map((genre) => (
                                        <span key={genre.id} className="genre-tag">
                                            {genre.name}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Overview */}
                            <div className="movie-overview">
                                <h3>Overview</h3>
                                <p>{movie.overview || 'No overview available.'}</p>
                            </div>

                            {/* Additional Info */}
                            <div className="movie-additional-info">
                                {movie.budget > 0 && (
                                    <div className="info-item">
                                        <strong>Budget:</strong>
                                        <span>{formatCurrency(movie.budget)}</span>
                                    </div>
                                )}

                                {movie.revenue > 0 && (
                                    <div className="info-item">
                                        <strong>Revenue:</strong>
                                        <span>{formatCurrency(movie.revenue)}</span>
                                    </div>
                                )}

                                {movie.production_companies && movie.production_companies.length > 0 && (
                                    <div className="info-item">
                                        <strong>Production:</strong>
                                        <span>{movie.production_companies.map(c => c.name).join(', ')}</span>
                                    </div>
                                )}

                                {movie.spoken_languages && movie.spoken_languages.length > 0 && (
                                    <div className="info-item">
                                        <strong>Languages:</strong>
                                        <span>{movie.spoken_languages.map(l => l.english_name).join(', ')}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Cast */}
                    {credits?.cast && credits.cast.length > 0 && (
                        <div className="movie-cast-section fade-in">
                            <h2 className="section-title">Cast</h2>
                            <div className="cast-grid">
                                {credits.cast.slice(0, 12).map((person) => (
                                    <div key={person.id} className="cast-card">
                                        <div className="cast-image">
                                            {person.profile_path ? (
                                                <img
                                                    src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                                                    alt={person.name}
                                                />
                                            ) : (
                                                <div className="cast-placeholder">👤</div>
                                            )}
                                        </div>
                                        <div className="cast-info">
                                            <p className="cast-name">{person.name}</p>
                                            <p className="cast-character">{person.character}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
