# Bilandang Beach Property - Deployment Guide

This guide will help you deploy the website to your own custom domain.

## Option 1: Vercel (Recommended - Easiest)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel --prod
```

### Step 4: Add Custom Domain
1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Domains**
4. Add your custom domain (e.g., `bilandang-property.com`)
5. Follow DNS instructions to point your domain to Vercel

### Vercel Pricing
- **Hobby Plan**: Free (perfect for this project)
- Custom domain included
- Automatic HTTPS/SSL

---

## Option 2: Netlify

### Step 1: Create `netlify.toml`
```toml
[build]
  command = "bun run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Step 2: Deploy via Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Step 3: Add Custom Domain
1. Go to Netlify Dashboard
2. Site Settings → Domain Management
3. Add custom domain

---

## Option 3: Your Own Server (VPS)

### Requirements
- Ubuntu/Debian server
- Node.js 18+ or Bun installed
- Nginx for reverse proxy
- SSL certificate (Let's Encrypt)

### Step 1: Build the project
```bash
bun run build
```

### Step 2: Start production server
```bash
bun run start
```

### Step 3: Configure Nginx
```nginx
server {
    listen 80;
    server_name bilandang-property.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 4: SSL with Let's Encrypt
```bash
sudo certbot --nginx -d bilandang-property.com
```

---

## Environment Variables

Create a `.env.production` file if needed:
```env
# Add any production environment variables here
```

---

## Quick Deploy Commands

### Vercel (One-liner)
```bash
vercel --prod --yes
```

### After deployment, your site will be live at:
- Vercel default: `https://your-project.vercel.app`
- Custom domain: `https://bilandang-property.com` (after DNS setup)

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Next.js Deployment**: https://nextjs.org/docs/deployment

---

## Build Output

✓ Build successful - Ready for production deployment!
