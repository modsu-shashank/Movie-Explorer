import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background">
                    <div className="hero-gradient"></div>
                    <div className="hero-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                </div>

                <div className="container hero-content">
                    <div className="hero-text fade-in">
                        <h1 className="hero-title">
                            Discover Your Next
                            <br />
                            <span className="gradient-text">Favorite Movie</span>
                        </h1>
                        <p className="hero-description">
                            Explore thousands of movies, get detailed information, ratings, and reviews.
                            Your ultimate movie discovery platform powered by TMDB.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/movies">
                                <Button size="large" icon="🎬">
                                    Explore Movies
                                </Button>
                            </Link>
                            <Button variant="outline" size="large" icon="ℹ️">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    <div className="hero-image scale-in">
                        <div className="hero-image-wrapper">
                            <div className="floating-card card-1">
                                <span className="card-emoji">🎭</span>
                                <span className="card-text">Drama</span>
                            </div>
                            <div className="floating-card card-2">
                                <span className="card-emoji">🚀</span>
                                <span className="card-text">Sci-Fi</span>
                            </div>
                            <div className="floating-card card-3">
                                <span className="card-emoji">😂</span>
                                <span className="card-text">Comedy</span>
                            </div>
                            <div className="floating-card card-4">
                                <span className="card-emoji">💥</span>
                                <span className="card-text">Action</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section section">
                <div className="container">
                    <h2 className="section-title">Why Choose Movie Explorer?</h2>
                    <p className="section-subtitle">Everything you need to discover and explore movies</p>

                    <div className="features-grid">
                        <div className="feature-card fade-in">
                            <div className="feature-icon">🔍</div>
                            <h3 className="feature-title">Advanced Search</h3>
                            <p className="feature-description">
                                Find any movie instantly with our powerful search functionality
                            </p>
                        </div>

                        <div className="feature-card fade-in" style={{ animationDelay: '0.1s' }}>
                            <div className="feature-icon">⭐</div>
                            <h3 className="feature-title">Ratings & Reviews</h3>
                            <p className="feature-description">
                                See what others think with comprehensive ratings and reviews
                            </p>
                        </div>

                        <div className="feature-card fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="feature-icon">📊</div>
                            <h3 className="feature-title">Detailed Info</h3>
                            <p className="feature-description">
                                Get complete information about cast, crew, and production details
                            </p>
                        </div>

                        <div className="feature-card fade-in" style={{ animationDelay: '0.3s' }}>
                            <div className="feature-icon">🎨</div>
                            <h3 className="feature-title">Beautiful UI</h3>
                            <p className="feature-description">
                                Enjoy a stunning, modern interface with dark mode support
                            </p>
                        </div>

                        <div className="feature-card fade-in" style={{ animationDelay: '0.4s' }}>
                            <div className="feature-icon">📱</div>
                            <h3 className="feature-title">Responsive Design</h3>
                            <p className="feature-description">
                                Perfect experience on any device - mobile, tablet, or desktop
                            </p>
                        </div>

                        <div className="feature-card fade-in" style={{ animationDelay: '0.5s' }}>
                            <div className="feature-icon">⚡</div>
                            <h3 className="feature-title">Lightning Fast</h3>
                            <p className="feature-description">
                                Optimized performance for smooth and instant browsing
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section">
                <div className="container">
                    <div className="cta-content glass-effect">
                        <h2 className="cta-title">Ready to Start Exploring?</h2>
                        <p className="cta-description">
                            Join thousands of movie enthusiasts discovering their next favorite film
                        </p>
                        <Link to="/movies">
                            <Button size="large" icon="🚀">
                                Start Exploring Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
