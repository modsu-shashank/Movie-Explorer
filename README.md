# Movie Explorer SPA

A modern, feature-rich Single Page Application (SPA) built with React and Express that allows users to explore movies using the TMDB (The Movie Database) API.

## 🎬 Project Overview

This project is a full-stack MERN application that demonstrates:
- **Frontend**: React.js with Vite
- **Backend**: Express.js + Node.js
- **API**: TMDB (The Movie Database) API
- **Routing**: React Router for SPA navigation
- **Styling**: Custom CSS with modern design system

## ✨ Features

### Core Features
- ✅ **SPA Routing**: Seamless navigation between Home, Movies List, and Movie Details
- ✅ **API Integration**: Real-time data from TMDB API
- ✅ **Search Functionality**: Search movies by title
- ✅ **Pagination**: Browse through multiple pages of movies
- ✅ **Loading States**: Beautiful loading animations
- ✅ **Error Handling**: Graceful error messages with retry options
- ✅ **Responsive Design**: Works perfectly on mobile, tablet, and desktop

### Bonus Features
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 🎨 **Modern UI**: Beautiful gradient designs and smooth animations
- 📱 **Mobile Menu**: Responsive hamburger menu
- ⭐ **Color-coded Ratings**: Visual rating indicators
- 🎭 **Cast Information**: View movie cast with photos
- 💰 **Detailed Info**: Budget, revenue, production companies, and more

## 📁 Project Structure

```
reaidy.io/
├── server/
│   └── index.js              # Express backend server
├── src/
│   ├── components/
│   │   ├── Button/           # Reusable button component
│   │   ├── Card/             # Reusable card component
│   │   ├── Loader/           # Loading spinner component
│   │   ├── ErrorMessage/     # Error display component
│   │   ├── Navbar/           # Navigation bar with dark mode
│   │   └── MovieCard/        # Movie card for grid display
│   ├── pages/
│   │   ├── Home/             # Landing page
│   │   ├── Movies/           # Movies list with search
│   │   └── MovieDetail/      # Detailed movie information
│   ├── services/
│   │   └── api.js            # API service layer
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles and design system
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── .env.example              # Environment variables template
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- TMDB API Key (free from https://www.themoviedb.org/settings/api)

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd reaidy.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Add your TMDB API key:
   ```
   TMDB_API_KEY=your_actual_api_key_here
   PORT=5000
   ```

4. **Start the backend server**
   ```bash
   npm run server
   ```

5. **In a new terminal, start the frontend**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🎯 Pages & Routes

### 1. Home Page (`/`)
- Welcome section with animated hero
- Feature highlights
- Call-to-action buttons
- Floating genre cards animation

### 2. Movies List Page (`/movies`)
- Grid of popular movies
- Search functionality
- Pagination controls
- Loading and error states
- Responsive grid layout

### 3. Movie Detail Page (`/movie/:id`)
- Large backdrop image
- Movie poster
- Comprehensive information:
  - Title, tagline, overview
  - Rating, release date, runtime
  - Genres, budget, revenue
  - Production companies
  - Cast with photos
- Back navigation

## 🧩 Reusable Components

### Button
- Multiple variants: primary, secondary, outline, ghost
- Sizes: small, medium, large
- Icon support
- Ripple effect animation

### Card
- Hover effects
- Glass morphism option
- Clickable variant

### Loader
- Multiple sizes
- Fullscreen mode
- Gradient spinner animation

### ErrorMessage
- Retry functionality
- Fullscreen option
- User-friendly messages

### Navbar
- Sticky navigation
- Active link highlighting
- Dark mode toggle
- Mobile responsive menu

### MovieCard
- Image with zoom effect
- Overlay on hover
- Color-coded ratings
- Release year display

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (#667eea → #764ba2)
- **Secondary**: Pink gradient (#f093fb → #f5576c)
- **Accent**: Blue gradient (#4facfe → #00f2fe)

### Typography
- **Headings**: Outfit font family
- **Body**: Inter font family

### Animations
- Fade in, slide in, scale in
- Floating shapes
- Hover effects
- Page transitions

## 🔧 API Integration

### Backend Endpoints
- `GET /api/movies/popular?page=1` - Get popular movies
- `GET /api/movies/search?query=term&page=1` - Search movies
- `GET /api/movies/:id` - Get movie details
- `GET /api/movies/:id/credits` - Get movie cast & crew
- `GET /api/health` - Health check

### Frontend Service
- Centralized API service in `src/services/api.js`
- Error handling
- Axios for HTTP requests

## 📱 Responsive Breakpoints
- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## 🌙 Dark Mode
- Toggle in navbar
- Persists in localStorage
- Smooth transitions
- All components support both themes

## 🎓 Technology Choices

### Why React?
- Component-based architecture
- Large ecosystem and community
- Excellent performance with Virtual DOM
- Great developer experience

### Why Vite?
- Lightning-fast development server
- Optimized build process
- Hot Module Replacement (HMR)
- Modern tooling

### Why Express?
- Lightweight and flexible
- Easy API creation
- Middleware support
- Perfect for proxy/backend services

### Why TMDB API?
- Comprehensive movie database
- Free tier available
- Well-documented
- Rich data including images, cast, ratings

## 🚧 Challenges & Solutions

### Challenge 1: API Rate Limiting
**Solution**: Implemented backend proxy to centralize API calls and add caching potential

### Challenge 2: Image Loading Performance
**Solution**: Used lazy loading and placeholder images

### Challenge 3: Dark Mode Persistence
**Solution**: localStorage to save user preference

### Challenge 4: Responsive Design
**Solution**: CSS Grid with auto-fit and mobile-first approach

## 📸 Screenshots

(Screenshots would be added here showing all three pages in both light and dark modes)

## 🔮 Future Enhancements

- [ ] Add favorites/watchlist with localStorage
- [ ] Implement filters (genre, year, rating)
- [ ] Add movie trailers
- [ ] User authentication
- [ ] Movie recommendations
- [ ] Infinite scroll option
- [ ] Share functionality

## 📄 License

This project is for educational purposes. Movie data provided by TMDB.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for the amazing API
- [React](https://react.dev/) for the framework
- [Vite](https://vitejs.dev/) for the build tool
- Google Fonts for Inter and Outfit fonts

---

**Built with ❤️ using React, Express, and TMDB API**
