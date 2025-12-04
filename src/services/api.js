import axios from 'axios';

const API_BASE_URL = '/api';

// Fallback to direct TMDB API if backend is not available
const TMDB_API_KEY = 'YOUR_TMDB_API_KEY'; // This will be replaced by backend
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
});

// API Service
export const movieService = {
    // Get popular movies
    getPopularMovies: async (page = 1) => {
        try {
            const response = await api.get(`/movies/popular?page=${page}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            throw error;
        }
    },

    // Get movie details
    getMovieDetails: async (id) => {
        try {
            const response = await api.get(`/movies/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching movie details:', error);
            throw error;
        }
    },

    // Search movies
    searchMovies: async (query, page = 1) => {
        try {
            const response = await api.get(`/movies/search?query=${encodeURIComponent(query)}&page=${page}`);
            return response.data;
        } catch (error) {
            console.error('Error searching movies:', error);
            throw error;
        }
    },

    // Get movie credits (cast & crew)
    getMovieCredits: async (id) => {
        try {
            const response = await api.get(`/movies/${id}/credits`);
            return response.data;
        } catch (error) {
            console.error('Error fetching movie credits:', error);
            throw error;
        }
    },
};

export default api;
