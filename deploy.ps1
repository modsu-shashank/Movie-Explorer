# Quick Deployment Script for Movie Explorer

Write-Host "🎬 Movie Explorer - Deployment Helper" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Build the project
Write-Host "🔨 Building the project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Choose your deployment platform:" -ForegroundColor Cyan
    Write-Host "1. Vercel (Recommended - Full Stack)" -ForegroundColor White
    Write-Host "2. Netlify (Frontend Only)" -ForegroundColor White
    Write-Host "3. Railway (Full Stack)" -ForegroundColor White
    Write-Host "4. Just build (no deployment)" -ForegroundColor White
    Write-Host ""
    
    $choice = Read-Host "Enter your choice (1-4)"
    
    switch ($choice) {
        "1" {
            Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Yellow
            if (Get-Command vercel -ErrorAction SilentlyContinue) {
                vercel
            } else {
                Write-Host "❌ Vercel CLI not found. Install it with: npm install -g vercel" -ForegroundColor Red
            }
        }
        "2" {
            Write-Host "🚀 Deploying to Netlify..." -ForegroundColor Yellow
            if (Get-Command netlify -ErrorAction SilentlyContinue) {
                netlify deploy --prod
            } else {
                Write-Host "❌ Netlify CLI not found. Install it with: npm install -g netlify-cli" -ForegroundColor Red
            }
        }
        "3" {
            Write-Host "🚀 Deploying to Railway..." -ForegroundColor Yellow
            if (Get-Command railway -ErrorAction SilentlyContinue) {
                railway up
            } else {
                Write-Host "❌ Railway CLI not found. Install it with: npm install -g @railway/cli" -ForegroundColor Red
            }
        }
        "4" {
            Write-Host "✅ Build complete! Files are in the 'dist' folder." -ForegroundColor Green
        }
        default {
            Write-Host "❌ Invalid choice. Build complete, but not deployed." -ForegroundColor Red
        }
    }
} else {
    Write-Host "❌ Build failed! Please check the errors above." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📚 For detailed deployment instructions, see DEPLOYMENT.md" -ForegroundColor Cyan
