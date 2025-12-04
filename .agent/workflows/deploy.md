---
description: Deploy Movie Explorer Application
---

# Deployment Workflow for Movie Explorer

This workflow guides you through deploying the Movie Explorer application. The app consists of:
- **Frontend**: React + Vite SPA
- **Backend**: Express.js API server

## Deployment Options

### Option 1: Deploy to Vercel (Recommended for Full Stack)

#### Prerequisites
1. Install Vercel CLI: `npm install -g vercel`
2. Create a Vercel account at https://vercel.com
3. Have your TMDB API key ready

#### Steps

// turbo
1. **Build the frontend**
```bash
npm run build
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy to Vercel**
```bash
vercel
```
- Follow the prompts
- When asked about settings, use defaults
- Add environment variable: `TMDB_API_KEY=your_key_here`

4. **Deploy to production**
```bash
vercel --prod
```

#### Configure Environment Variables in Vercel Dashboard
- Go to your project settings
- Add `TMDB_API_KEY` with your actual API key
- Redeploy if needed

---

### Option 2: Deploy Frontend (Vercel) + Backend (Render)

#### Part A: Deploy Backend to Render

1. **Create a Render account** at https://render.com

2. **Push your code to GitHub** (if not already done)

3. **Create a new Web Service on Render**
   - Connect your GitHub repository
   - Name: `movie-explorer-api`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `node server/index.js`
   - Add Environment Variable: `TMDB_API_KEY=your_key_here`
   - Add Environment Variable: `PORT=10000`

4. **Note the deployed URL** (e.g., `https://movie-explorer-api.onrender.com`)

5. **Update frontend API URL**
   - Update `src/services/api.js` to use the Render backend URL

#### Part B: Deploy Frontend to Vercel

// turbo
1. **Build the frontend**
```bash
npm run build
```

2. **Deploy to Vercel**
```bash
vercel --prod
```

---

### Option 3: Deploy to Railway (Full Stack)

#### Prerequisites
1. Install Railway CLI: `npm install -g @railway/cli`
2. Create a Railway account at https://railway.app

#### Steps

1. **Login to Railway**
```bash
railway login
```

2. **Initialize Railway project**
```bash
railway init
```

3. **Add environment variables**
```bash
railway variables set TMDB_API_KEY=your_key_here
```

4. **Deploy**
```bash
railway up
```

5. **Generate domain**
```bash
railway domain
```

---

### Option 4: Deploy to Netlify (Frontend) + Render (Backend)

#### Part A: Deploy Backend to Render
(Same as Option 2, Part A)

#### Part B: Deploy Frontend to Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build the frontend**
```bash
npm run build
```

3. **Deploy to Netlify**
```bash
netlify deploy --prod
```

---

## Post-Deployment Checklist

- [ ] Verify frontend loads correctly
- [ ] Test all routes (Home, Movies, Movie Detail)
- [ ] Verify API calls are working
- [ ] Test search functionality
- [ ] Test pagination
- [ ] Verify dark mode toggle works
- [ ] Test on mobile devices
- [ ] Check browser console for errors
- [ ] Verify environment variables are set correctly

## Troubleshooting

### Issue: API calls failing
**Solution**: Check that TMDB_API_KEY is set correctly in environment variables

### Issue: CORS errors
**Solution**: Ensure backend CORS is configured to allow your frontend domain

### Issue: 404 on page refresh
**Solution**: Configure SPA fallback routing in your hosting platform

### Issue: Build fails
**Solution**: Run `npm install` and `npm run build` locally first to identify issues

## Monitoring

After deployment, monitor:
- Application logs in your hosting platform dashboard
- API response times
- Error rates
- User traffic

## Updating Deployment

To update your deployed application:

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push

# Redeploy (Vercel)
vercel --prod

# Or for Railway
railway up
```

Most platforms support automatic deployments from GitHub - enable this in your platform settings for continuous deployment.
