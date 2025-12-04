import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    const handleClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    const getRatingColor = (rating) => {
        if (rating >= 7.5) return '#10b981';
        if (rating >= 6) return '#fbbf24';
        return '#ef4444';
    };

    return (
        <Card className="movie-card" onClick={handleClick}>
            <div className="movie-card-image-wrapper">
                <img
                    src={imageUrl}
                    alt={movie.title}
                    className="movie-card-image"
                    loading="lazy"
                />
                <div className="movie-card-overlay">
                    <button className="movie-card-view-btn">
                        View Details
                    </button>
                </div>
            </div>

            <div className="movie-card-content">
                <h3 className="movie-card-title">{movie.title}</h3>

                <div className="movie-card-meta">
                    <div
                        className="movie-card-rating"
                        style={{ color: getRatingColor(movie.vote_average) }}
                    >
                        <span className="rating-icon">⭐</span>
                        <span className="rating-value">{movie.vote_average?.toFixed(1)}</span>
                    </div>

                    {movie.release_date && (
                        <div className="movie-card-year">
                            📅 {new Date(movie.release_date).getFullYear()}
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default MovieCard;
