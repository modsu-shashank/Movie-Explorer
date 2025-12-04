# 🚀 Movie Explorer - Deployment Guide

## Quick Start Deployment

### Recommended: Vercel (Easiest Full-Stack Deployment)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Build and Test Locally**
   ```bash
   npm run build
   npm run preview
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
4. **Set Environment Variable**
   - Go to your Vercel dashboard
   - Navigate to your project → Settings → Environment Variables
   - Add: `TMDB_API_KEY` = `your_actual_api_key`
   
5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

---

## Alternative Deployment Options

### Option 1: Netlify (Frontend) + Render (Backend)

#### Deploy Backend to Render:
1. Go to [render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `node server/index.js`
   - **Environment Variables**: Add `TMDB_API_KEY`
5. Copy your backend URL (e.g., `https://your-app.onrender.com`)

#### Update Frontend API URL:
Edit `src/services/api.js` and update the base URL to your Render backend URL.

#### Deploy Frontend to Netlify:
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Build: `npm run build`
3. Deploy: `netlify deploy --prod`

### Option 2: Railway (Full Stack)

1. Install Railway CLI: `npm install -g @railway/cli`
2. Login: `railway login`
3. Initialize: `railway init`
4. Set env var: `railway variables set TMDB_API_KEY=your_key`
5. Deploy: `railway up`
6. Generate domain: `railway domain`

---

## Environment Variables Required

- `TMDB_API_KEY`: Your TMDB API key (get from https://www.themoviedb.org/settings/api)
- `PORT`: (Optional) Port number, defaults to 5000

---

## Pre-Deployment Checklist

- [ ] TMDB API key is ready
- [ ] `.env` file is NOT committed to git (check `.gitignore`)
- [ ] Code builds successfully locally (`npm run build`)
- [ ] All tests pass (if applicable)
- [ ] Backend server runs without errors (`npm run server`)
- [ ] Frontend connects to backend API correctly

---

## Post-Deployment Testing

After deployment, test these features:

1. **Homepage** - Should load with animations
2. **Movies Page** - Should display popular movies
3. **Search** - Should find movies by title
4. **Movie Details** - Should show full movie information
5. **Dark Mode** - Should toggle correctly
6. **Mobile View** - Should be responsive

---

## Troubleshooting

### Build Fails
- Run `npm install` to ensure all dependencies are installed
- Check for any TypeScript or linting errors
- Verify `vite.config.js` is correct

### API Not Working
- Verify `TMDB_API_KEY` is set in environment variables
- Check CORS settings in `server/index.js`
- Ensure backend URL is correct in `src/services/api.js`

### 404 on Page Refresh
- Ensure SPA fallback is configured (already done in `vercel.json` and `netlify.toml`)

### CORS Errors
- Update CORS settings in `server/index.js` to allow your frontend domain

---

## Continuous Deployment

### GitHub Integration
Most platforms support automatic deployments:

1. Push your code to GitHub
2. Connect your repository in Vercel/Netlify/Render dashboard
3. Enable automatic deployments
4. Every push to `main` branch will trigger a new deployment

---

## Monitoring & Logs

- **Vercel**: Dashboard → Your Project → Deployments → View Logs
- **Netlify**: Dashboard → Your Site → Deploys → Deploy Log
- **Render**: Dashboard → Your Service → Logs
- **Railway**: Dashboard → Your Project → Deployments

---

## Cost Estimates

- **Vercel**: Free tier includes 100GB bandwidth
- **Netlify**: Free tier includes 100GB bandwidth
- **Render**: Free tier available (spins down after inactivity)
- **Railway**: $5/month for hobby plan

---

## Support

For issues or questions:
1. Check the deployment logs
2. Review the troubleshooting section
3. Consult platform-specific documentation

---

**Happy Deploying! 🎉**
