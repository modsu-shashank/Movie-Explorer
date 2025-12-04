import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const TMDB_API_KEY = process.env.TMDB_API_KEY || 'YOUR_API_KEY_HERE';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to fetch from TMDB
const fetchFromTMDB = async (endpoint) => {
    const url = `${TMDB_BASE_URL}${endpoint}${endpoint.includes('?') ? '&' : '?'}api_key=${TMDB_API_KEY}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching from TMDB (${endpoint}):`, error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
        }
        throw error;
    }
};

// Routes

// Get popular movies
app.get('/api/movies/popular', async (req, res) => {
    try {
        const page = req.query.page || 1;
        const data = await fetchFromTMDB(`/movie/popular?page=${page}`);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch popular movies' });
    }
});

// Search movies
app.get('/api/movies/search', async (req, res) => {
    try {
        const query = req.query.query;
        const page = req.query.page || 1;

        if (!query) {
            return res.status(400).json({ error: 'Search query is required' });
        }

        const data = await fetchFromTMDB(`/search/movie?query=${encodeURIComponent(query)}&page=${page}`);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to search movies' });
    }
});

// Get movie details
app.get('/api/movies/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await fetchFromTMDB(`/movie/${id}`);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movie details' });
    }
});

// Get movie credits
app.get('/api/movies/:id/credits', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await fetchFromTMDB(`/movie/${id}/credits`);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movie credits' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Movie Explorer API is running',
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📡 API endpoints available at http://localhost:${PORT}/api`);

    if (TMDB_API_KEY === 'YOUR_API_KEY_HERE') {
        console.warn('⚠️  WARNING: TMDB_API_KEY not set! Please add it to .env file');
    }
});

export default app;
