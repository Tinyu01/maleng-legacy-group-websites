# Maleng Legacy Group Parent Website
## Complete Setup & Deployment Guide

---

## 📋 PROJECT OVERVIEW

**Project Name:** Maleng Legacy Group Holdings (Pty) Ltd - Parent Company Website
**Technology Stack:** Next.js 14 + React 18 + Tailwind CSS + Framer Motion
**Deployment Target:** HostAfrica (malenglegacy.co.za)
**Status:** Development Ready
**Last Updated:** February 20, 2026

---

## 🚀 QUICK START (5 MINUTES)

### Prerequisites
- Node.js 16+ installed
- npm 7+
- Git (optional)

### Installation Steps

```bash
# 1. Navigate to project directory
cd project

# 2. Install dependencies
npm install

# 3. Create environment file
echo "NEXT_PUBLIC_GA_ID=G-XXXXXXX" > .env.local

# 4. Run development server
npm run dev

# 5. Open browser and visit
# http://localhost:3000
```

---

## 📁 PROJECT STRUCTURE

```
project/
├── pages/
│   ├── _app.js                 # Global app wrapper
│   └── index.js                # Main landing page
├── components/
│   ├── Hero.js                 # Hero section with animated title
│   ├── Architecture.js         # Vault & Engines architecture
│   ├── CoreClusters.js         # 4 clusters overview
│   ├── ClosedLoop.js           # Closed-loop economy model
│   ├── LegacyStandard.js       # Mission, Vision, Values
│   ├── Management.js           # Org structure & leadership
│   ├── StrategicPlan.js        # 5-year roadmap
│   ├── FounderProfile.js       # Masingita's profile
│   └── Contact.js              # Contact information
├── styles/
│   └── globals.css             # Tailwind + custom styles
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg            # Social media preview
│   └── robots.txt
├── package.json
├── next.config.js
├── tailwind.config.js
└── .env.local                  # Environment variables (not in git)
```

---

## 🎨 DESIGN & BRANDING

### Color Scheme
- **Primary:** Earth Brown (#8B4513)
- **Secondary:** Earth Green (#556B2F)
- **Accent:** Gold (#DAA520)
- **Navy Blue:** #001F3F
- **Background:** Gradient (Brown → Green)

### Typography
- **Font Family:** Inter (Google Fonts)
- **Font Sizes:**
  - H1: 6xl (72px)
  - H2: 4xl (36px)
  - H3: 2xl (24px)
  - Body: 1rem (16px)

### Components Used
- **Animation Library:** Framer Motion
  - Fade-in on scroll
  - Scale effects on hover
  - Stagger animations for lists
  - Parallax effects

---

## 🔧 CONFIGURATION FILES

### next.config.js
- React strict mode enabled
- Image optimization configured
- SWC minification enabled
- Ready for SSG (Static Site Generation)

### tailwind.config.js
- Custom color scheme extended
- Custom font family configured
- Responsive design ready
- Custom utility classes

### .env.local (CREATE THIS FILE)
```
NEXT_PUBLIC_GA_ID=G-XXXXXXX
```
Replace `G-XXXXXXX` with your Google Analytics Measurement ID

---

## 📊 GOOGLE ANALYTICS SETUP

### Step 1: Create GA4 Property
1. Go to https://analytics.google.com
2. Click "Start measuring"
3. Create new Property: "Maleng Legacy Group"
4. Select "Web" platform
5. Enter website URL: malenglegacy.co.za
6. Copy the Measurement ID (format: G-XXXXX)

### Step 2: Add to Project
1. Create `.env.local` file in project root
2. Add: `NEXT_PUBLIC_GA_ID=G-XXXXXXX`
3. Restart dev server: `npm run dev`

### Step 3: Verify Tracking
1. Open your site in browser
2. Go to Google Analytics > Realtime > Overview
3. You should see 1 active user

---

## 🏗️ BUILD & DEPLOYMENT

### Development
```bash
npm run dev
# Runs on http://localhost:3000 with hot reload
```

### Production Build
```bash
npm run build
npm start
# Creates optimized build, runs on http://localhost:3000
```

### Static Export (for HostAfrica)
```bash
npm run build
npm run export
# Creates `/out` folder with static HTML/CSS/JS files
```

---

## 🌐 HOSTDADDY/HOSTAFRIC A DEPLOYMENT

### Option 1: Static HTML Export (Recommended for simplicity)

```bash
# 1. Build the static site
npm run build
npm run export

# 2. This creates a `/out` folder with all static files

# 3. Upload via FTP/SFTP:
#    - Host: ftp.malenglegacy.co.za (or your FTP host)
#    - Upload the `/out` folder contents to /public_html

# 4. Set up domain in HostAfrica control panel
#    - Domain: malenglegacy.co.za
#    - Point to: /public_html (or where you uploaded files)

# 5. Test: Visit https://www.malenglegacy.co.za
```

### Option 2: Node.js Deployment (If HostAfrica supports it)

```bash
# 1. Build
npm run build

# 2. Upload entire `/project` folder to hosting

# 3. On server:
npm install --production
npm start

# 4. Set up reverse proxy (nginx/Apache) to port 3000

# 5. Point domain to server
```

### Option 3: Vercel Deployment (Fastest alternative)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Follow prompts to connect your domain
```

---

## 📧 CONTACT & EMAIL SETUP

### Professional Email on HostAfrica

1. **Create Email Account:**
   - Go to HostAfrica cPanel
   - Email Accounts
   - Add: ceo@malenglegacy.co.za
   - Set password

2. **Configure Email Client:**
   - IMAP/POP3 settings provided by HostAfrica
   - Use Thunderbird, Outlook, or Gmail

3. **Forward to Personal Email:**
   - Optional: Forward to your personal email for convenience

---

## 🔍 SEO OPTIMIZATION

### Meta Tags (Already Configured)
- ✅ Title: Unique and descriptive
- ✅ Meta Description: 160 characters
- ✅ Keywords: Relevant search terms
- ✅ Open Graph (OG) tags for social sharing
- ✅ Canonical URL to prevent duplicates
- ✅ JSON-LD schema for Organization

### Sitemap
```
# Auto-generated by Next.js
https://www.malenglegacy.co.za/sitemap.xml
```

### robots.txt
Already placed in `/public/robots.txt` - allows search engine crawling

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: malenglegacy.co.za
3. Verify ownership (add TXT record to DNS)
4. Submit sitemap

---

## 🚦 PERFORMANCE OPTIMIZATION

### Lighthouse Scores (Target)
- ✅ Performance: >90
- ✅ Accessibility: >95
- ✅ Best Practices: >95
- ✅ SEO: >95

### Optimization Techniques
- Image lazy loading (via next/image)
- Code splitting (automatic with Next.js)
- CSS-in-JS optimization (Tailwind)
- Server-side rendering for SEO
- Static site generation (getStaticProps)

### Monitoring
1. Google PageSpeed Insights: https://pagespeed.web.dev
2. Google Analytics: Real-time user monitoring
3. Uptime monitoring: https://uptimerobot.com

---

## 🔐 SECURITY CHECKLIST

- ✅ HTTPS enabled (HostAfrica provides SSL)
- ✅ No sensitive data in code
- ✅ Environment variables for secrets
- ✅ Security headers configured
- ✅ CSRF protection (Next.js default)
- ✅ XSS protection (Tailwind CSS)

---

## 📱 RESPONSIVE DESIGN

The website is fully responsive:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1280px+)

Test using:
- Chrome DevTools (F12)
- Mobile emulation
- Real devices (iOS/Android)

---

## 🐛 TROUBLESHOOTING

### Issue: Port 3000 already in use
```bash
# Kill process on port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue: Module not found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Styles not loading
```bash
# Rebuild Tailwind CSS
npm run build
```

### Issue: GA not tracking
1. Check `.env.local` has correct `NEXT_PUBLIC_GA_ID`
2. Restart dev server: `npm run dev`
3. Clear browser cache
4. Check Google Analytics > Realtime

---

## 📈 ANALYTICS & MONITORING

### Key Metrics to Track
- Page views
- Bounce rate
- Average session duration
- Traffic source (organic, direct, referral)
- Device breakdown (mobile, tablet, desktop)

### Monthly Report
Create a report template:
- Total users
- New vs. returning
- Top pages
- Conversion goals (contact form, email signups)

---

## 🎯 NEXT STEPS (IMMEDIATE)

1. **Week 1:**
   - ✅ Set up Google Analytics
   - ✅ Deploy to HostAfrica
   - ✅ Test all pages and links
   - ✅ Set up professional email

2. **Week 2:**
   - ✅ Google Search Console verification
   - ✅ Create sitemap
   - ✅ Submit to Google Search
   - ✅ Monitor analytics

3. **Week 3-4:**
   - ✅ Promote website across all channels
   - ✅ Add blog/news section (optional)
   - ✅ Set up contact form (optional)
   - ✅ Monitor performance metrics

---

## 💼 INVESTMENT MEMORANDUM NOTICE

This website serves as a professional investment memorandum. All information is:
- Confidential
- For authorized recipients only
- Subject to change without notice
- Part of strategic business documentation

**Not for public distribution without approval.**

---

## 📞 SUPPORT & MAINTENANCE

### Ongoing Tasks
- Monthly Google Analytics review
- Security updates (Next.js, dependencies)
- Backup configuration files
- Monitor uptime (UptimeRobot)

### Contact for Updates
- Email: ceo@malenglegacy.co.za
- Phone: +27 73 884 7449

---

## 🎓 RESOURCES & DOCUMENTATION

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **HostAfrica Support:** https://hostAfrica.co.za/support

---

**Document Version:** 1.0
**Last Updated:** February 20, 2026
**Status:** ✅ PRODUCTION READY
