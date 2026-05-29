# Deployment Guide - Maleng Legacy Group Websites

> Public-safe documentation note: This document may use placeholders. See `DOCUMENTATION_PLACEHOLDER_MAP.md` in workspace root.

Complete guide for deploying the parent site and subsidiary websites to production.

## ✅ Primary Deployment Method (Hestia + GitHub Actions)

The primary production method is now **GitHub Actions -> HestiaCP server** using isolated Linux users per website ownership.

### MLG Automated Sync Protocol

- **Source Control:** GitHub (`main` branch)
- **Primary Target:** `<server-ip-or-hostname>`
- **Workflow File:** `.github/workflows/main_deploy.yml`

### Master Sync Logic

On each push to `main`, the workflow checks what changed:

1. If changes are in `01_Parent_Site_MalengLegacy.com/**` -> deploy parent only
2. If changes are in `02_Subsidiary_Sites_Template/**` -> deploy all subsidiaries only

This preserves your existing parent/subsidiary structure and avoids unnecessary deployments.

### Required Repository Secrets

In GitHub -> **Settings -> Secrets and variables -> Actions**, add:

- `HOST` = `<server-ip-or-hostname>`
- `ADMIN_SSH_USER` = `<admin-user>`
- `ADMIN_SSH_PASSWORD` = `<admin-password>`
- `MLG_SSH_USER` = `<mlg-deploy-user>`
- `MLG_SSH_PASSWORD` = `<mlg-deploy-password>`

### Security Note (Important)

- No real passwords or private keys should ever be committed to this repository.
- Keep SSH passwords only in GitHub Secrets.
- If this repository becomes public, replace exposed infrastructure details (such as server IP and deploy username) in docs with placeholders.

### Server Mapping

- Parent source: `01_Parent_Site_MalengLegacy.com/` -> `/home/<admin-user>/web/<root-domain>/public_html/`
- Template source: `02_Subsidiary_Sites_Template/` -> `/home/<mlg-deploy-user>/web/{subdomain}.<root-domain>/public_html/`

### Note on Naming Conventions

The holding company concept **"Vault"** is deployed to the domain `assets.<root-domain>`.

- Business concept: Vault
- Deployment keyword in GitHub matrix: `assets`
- Server target path: `/home/<mlg-deploy-user>/web/assets.<root-domain>/public_html/`

To add more subsidiaries, add another `subdomain` value in the matrix inside `.github/workflows/main_deploy.yml`.

## 🧭 Deployment Models

This repository supports two valid deployment models:

1. **Parent-integrated model**
   - Deploy `01_Parent_Site_MalengLegacy.com/02_Code_and_Development/project`
   - Parent site is available at `/`
   - Subsidiary pages are available at `/subsidiaries/[name]`

2. **Standalone subsidiary model**
   - Deploy each subsidiary from its own folder:
     `02_Subsidiary_Sites_Template/[Subsidiary]/02_Code_and_Development/project`
   - Each subsidiary runs as an independent website/app

## 📋 Pre-Deployment Checklist

- [ ] Parent/subsidiary changes tested locally
- [ ] No console errors or warnings
- [ ] GitHub Actions secrets configured (`HOST`, `ADMIN_SSH_USER`, `ADMIN_SSH_PASSWORD`, `MLG_SSH_USER`, `MLG_SSH_PASSWORD`)
- [ ] `.github/workflows/main_deploy.yml` exists on `main`
- [ ] Hestia web directories exist for target domains
- [ ] All links working (internal and external)

## 🔗 Deployment Targets

### Parent-integrated target
```
01_Parent_Site_MalengLegacy.com/02_Code_and_Development/project/
```

### Standalone subsidiary target
```
02_Subsidiary_Sites_Template/[Subsidiary Folder]/02_Code_and_Development/project/
```

## ☁️ Deployment Options (Hestia Primary)

### Option 1: Hestia + GitHub Actions (Recommended) ⭐

This is the active enterprise workflow for this repository.

1. **Push your changes to `main`**
```bash
git add .
git commit -m "Update website content"
git push origin main
```

2. **GitHub Actions auto-detects what changed**
   - Parent folder change -> deploy parent domain
   - Template folder change -> deploy all subsidiary domains in the matrix

3. **Verify run status**
   - Open Actions tab in GitHub
   - Confirm `MLG Group Master Deployment` completed successfully

4. **Add a new subsidiary deployment target**
   - Edit `.github/workflows/main_deploy.yml`
   - Add the new subdomain to `strategy.matrix.subdomain`

---

### Option 2: Vercel

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
https://yourdomain.com/subsidiaries/construction    ← Parent-integrated route
https://tech.yourdomain.com                          ← Example standalone subsidiary domain
```

---

### Option 3: Netlify

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

> For standalone subsidiary deployment on Netlify, set the **Root directory** to that specific subsidiary's `02_Code_and_Development/project` folder.

---

### Option 4: AWS Amplify

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

> For standalone subsidiary deployment on Amplify, initialize and publish from that subsidiary's `project` folder.

---

### Option 5: Traditional VPS/Server

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

For standalone subsidiary deployment, replace the `cd` path with the relevant subsidiary `project` folder.

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

# Parent-integrated subsidiaries
curl https://yourdomain.com/subsidiaries/construction
curl https://yourdomain.com/subsidiaries/security
curl https://yourdomain.com/subsidiaries/agri

# Standalone subsidiaries (if using standalone model)
curl https://tech.yourdomain.com
curl https://security.yourdomain.com
```

### 2. Google Search Console
1. Verify site ownership
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`
3. Monitor indexing

### 3. Analytics
- Set up Google Analytics
- Track subsidiary page views (integrated or standalone)
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

### Auto-Deploy on GitHub Push (Hestia)

Deployment is triggered automatically when changes are pushed to `main`.

```bash
git add .
git commit -m "Update website content"
git push origin main
```

The workflow then:
- Detects whether parent and/or template paths changed
- Deploys only the matching target(s)
- Uses deploy credentials from GitHub Secrets

### Manual Emergency Update (Server-Side)

Use only if GitHub Actions is unavailable:

```bash
ssh <deploy-user>@<server-ip-or-hostname>
# Sync or upload changed files manually to the matching /home/<deploy-user>/web/.../public_html/ path
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
- Parent-integrated model: verify `pages/subsidiaries/[name].js` exists in parent project
- Standalone model: verify subsidiary `pages/index.js` exists in that subsidiary project
- Check build output includes expected pages for selected deployment target

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

- **HestiaCP Docs:** https://hestiacp.com/docs/
- **GitHub Actions Docs:** https://docs.github.com/actions
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Netlify Docs:** https://docs.netlify.com
- **AWS Amplify:** https://docs.amplify.aws

---

**Last Updated:** April 12, 2026
**Status:** Ready for Production
