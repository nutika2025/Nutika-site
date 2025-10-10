# Quick Deployment Guide

## Before You Deploy

### 1. Update Amazon Affiliate Tag

Replace all instances of `?tag=yourtag` in `data/products.ts` with your actual Amazon Associates tag:

```bash
# Find and replace
sed -i '' 's/tag=yourtag/tag=YOUR-TAG-20/g' data/products.ts
```

### 2. Update Domain in SEO Files

Edit `app/sitemap.ts` and `app/robots.ts` to use your actual domain:

```typescript
const baseUrl = 'https://yourdomain.com'  // Change this
```

### 3. Rebuild

```bash
npm run build
```

## Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

3. Follow prompts and you're live!

## Deploy to Netlify

### Option 1: Drag & Drop
1. Go to https://app.netlify.com/drop
2. Drag the `out/` folder
3. Done!

### Option 2: Git Integration
1. Push to GitHub
2. Connect repo on Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`

## Deploy to Cloudflare Pages

1. Push to GitHub
2. Go to Cloudflare Pages dashboard
3. Connect repository
4. Settings:
   - Build command: `npm run build`
   - Build output directory: `out`
   - Framework preset: Next.js (Static HTML Export)

## Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"deploy": "gh-pages -d out"
```

3. Deploy:
```bash
npm run build
npm run deploy
```

## Deploy to Your Own Server

Just upload the `out/` directory contents to your web server root.

### Using SCP:
```bash
scp -r out/* user@yourserver:/var/www/html/
```

### Using FTP:
Upload all files from `out/` to your hosting root directory.

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify affiliate links work and include your tag
- [ ] Check mobile responsiveness
- [ ] Test the product finder functionality
- [ ] Verify sitemap.xml is accessible at /sitemap.xml
- [ ] Check robots.txt at /robots.txt
- [ ] Submit sitemap to Google Search Console
- [ ] Add affiliate disclosure notice if required by your region

## Performance Tips

- Enable Brotli/Gzip compression on your host
- Set up a CDN (Cloudflare is free)
- Enable caching headers for static assets
- Consider adding a custom domain for better branding

## Monitoring

Consider adding:
- Google Analytics for traffic tracking
- Amazon OneLink for better affiliate tracking
- Plausible or Simple Analytics for privacy-friendly analytics

## Need Help?

Check out the full README.md for more details on customization and content management.
