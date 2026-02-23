# Deployment Guide - Maleng Legacy Group Websites

Complete guide for deploying the parent site and all 16 subsidiaries to production.

## 📋 Pre-Deployment Checklist

- [ ] All 16 subsidiaries tested locally
- [ ] No console errors or warnings
- [ ] SEO meta tags verified for each page
- [ ] Images optimized and compressed
- [ ] Environment variables set up
- [ ] Build tested successfully
- [ ] Mobile responsiveness verified
- [ ] All links working (internal and external)

## 🔗 Project Path for Deployment

The actual Next.js application to deploy is located at:
```
01_Parent_Site_MalengLegacy.com/02_Code_and_Development/project/
```

**All subsidiaries are contained within this single Next.js application.**

## ☁️ Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Official Next.js deployment platform
- Free tier available
- Automatic deployments from GitHub
- Global CDN
- Built-in analytics
- One-click SSL

**Steps:**

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/maleng-legacy-group-websites.git
git push -u origin main
```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "Import Project"
   - Connect GitHub account
   - Select repository

3. **Configure Project**
   - **Root Directory:** `01_Parent_Site_MalengLegacy.com/02_Code_and_Development/project/`
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`

4. **Environment Variables**
   - Add any `.env.local` variables
   - Click "Deploy"

5. **Domain Setup**
   - Vercel provides `yourproject.vercel.app`
   - Add custom domain in Vercel Dashboard
   - Update DNS records

**Access after deployment:**
```
https://yourdomain.com                    ← Parent site
https://yourdomain.com/subsidiaries/construction
https://yourdomain.com/subsidiaries/security
... all subsidiaries accessible
```

---

### Option 2: Netlify

**Steps:**

1. **Prepare for Netlify**
```bash
cd 01_Parent_Site_MalengLegacy.com/02_Code_and_Development/project
npm run build
```

2. **Connect to Netlify**
   - Go to https://netlify.com
   - Click "Import an existing project"
   - Connect GitHub
   - Select repository

3. **Build Settings**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Root directory:** `01_Parent_Site_MalengLegacy.com/02_Code_and_Development/project/`

4. **Environment Variables**
   - Set any needed variables in Netlify Dashboard
   - Deploy

5. **Domain**
   - Add custom domain in Netlify settings
   - Update DNS

---

### Option 3: AWS Amplify

**Steps:**

1. **Install Amplify CLI**
```bash
npm install -g @aws-amplify/cli
amplify configure
```

2. **Initialize Amplify**
```bash
cd 01_Parent_Site_MalengLegacy.com/02_Code_and_Development/project
amplify init
```

3. **Deploy**
```bash
amplify publish
```

4. **Domain Setup**
   - Add domain in Amplify Console
   - Update DNS records

---

### Option 4: Traditional VPS/Server

**Requirements:**
- Node.js 16+ installed
- npm or yarn
- Port 3000 available (or configure proxy)
- SSL certificate

**Steps:**

1. **Clone Repository**
```bash
git clone https://github.com/yourusername/maleng-legacy-group-websites.git
cd maleng-legacy-group-websites/01_Parent_Site_MalengLegacy.com/02_Code_and_Development/project
```

2. **Install & Build**
```bash
npm install
npm run build
```

3. **Start Production Server**
```bash
npm run start
```

Or use PM2 for process management:
```bash
npm install -g pm2
pm2 start npm --name "maleng-legacy" -- run start
pm2 save
pm2 startup
```

4. **Set Up Reverse Proxy (Nginx)**

Create `/etc/nginx/sites-available/maleng-legacy`:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

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

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/maleng-legacy /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

5. **SSL Certificate (Let's Encrypt)**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## 🔒 Environment Variables

Create `.env.local` (never commit this):

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Maleng Legacy Group

# Optional - Add as needed
# DATABASE_URL=your_database_url
# API_KEY=your_api_key
```

## 🚀 Post-Deployment

### 1. Test All URLs
```bash
# Parent site
curl https://yourdomain.com

# All subsidiaries
curl https://yourdomain.com/subsidiaries/construction
curl https://yourdomain.com/subsidiaries/security
curl https://yourdomain.com/subsidiaries/agri
# ... test all 16
```

### 2. Google Search Console
1. Verify site ownership
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`
3. Monitor indexing

### 3. Analytics
- Set up Google Analytics
- Track subsidiary page views
- Monitor user engagement

### 4. SEO Check
- Use tools like Lighthouse, GTmetrix
- Verify meta tags on each page
- Check mobile responsiveness

### 5. Performance Monitoring
- Monitor page load times
- Track Core Web Vitals
- Set up alerts for errors

---

## 🔄 Continuous Deployment

### Auto-Deploy on GitHub Push (Vercel/Netlify)

These platforms automatically deploy when you push to GitHub:

1. **Make changes locally**
2. **Commit & push**
```bash
git add .
git commit -m "Update subsidiaries"
git push origin main
```

3. **Automatic deployment** - No manual steps needed!

### Manual Updates

**Via SSH (VPS):**
```bash
ssh user@yourserver.com
cd /path/to/project
git pull origin main
npm install
npm run build
pm2 restart maleng-legacy
```

---

## 📊 Monitoring & Maintenance

### Health Checks
Set up monitoring for:
- Response time (should be < 2s)
- Error rates (should be < 0.1%)
- Uptime (should be > 99.9%)

### Regular Maintenance
- Update dependencies monthly: `npm update`
- Review logs for errors
- Monitor disk space
- Backup database (if using one)

### Performance Optimization
- Monitor Core Web Vitals
- Optimize images further
- Enable caching headers
- Use CDN for static assets

---

## 🔐 Security Best Practices

1. **Environment Variables**
   - Never commit `.env.local`
   - Use platform's secret management

2. **HTTPS**
   - Always use SSL/TLS
   - Redirect HTTP to HTTPS

3. **Headers**
   - Set security headers
   - Enable CORS properly

4. **Dependencies**
   - Keep packages updated
   - Run security audits: `npm audit`
   - Fix vulnerabilities: `npm audit fix`

5. **Access Control**
   - Use strong SSH keys
   - Enable 2FA on deployment platform
   - Restrict deploy permissions

---

## 🆘 Troubleshooting Deployments

### Build Fails
```bash
# Clear build cache
rm -r .next
npm run build

# Check for errors
npm run lint
```

### Slow Performance
- Check server CPU/memory
- Enable Next.js caching
- Optimize images
- Use CDN

### 404 Errors on Subsidiaries
- Verify routing in `pages/subsidiaries/[name].js`
- Check build output includes all files
- Verify path structure in deployment

### Environment Variables Not Working
- Verify `.env` file exists (not `.env.local`)
- Check variable names match code
- Restart application
- For Vercel/Netlify: redeploy after updating variables

---

## 📈 Scaling Considerations

### When Traffic Grows
1. **Vercel/Netlify** - Automatic scaling (recommended)
2. **Custom Server:**
   - Use load balancer
   - Multiple application instances
   - Separate database server
   - Redis for caching

### Database (if added)
- Use managed services (RDS, Atlas, etc.)
- Enable automatic backups
- Monitor query performance

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Netlify Docs:** https://docs.netlify.com
- **AWS Amplify:** https://docs.amplify.aws

---

**Last Updated:** February 23, 2026
**Status:** Ready for Production
