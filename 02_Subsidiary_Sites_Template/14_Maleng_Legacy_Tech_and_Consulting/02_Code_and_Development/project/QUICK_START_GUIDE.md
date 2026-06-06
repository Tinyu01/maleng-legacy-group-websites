# Quick Start & Testing Guide

## 🚀 Getting Started

### 1. Install Dependencies (if not already done)
```bash
cd "02_Subsidiary_Sites_Template/14_Maleng_Legacy_Tech_and_Consulting/02_Code_and_Development/project"
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Server will start at `http://localhost:3000`

### 3. Test the Pages

#### Services Hub
- **URL:** `http://localhost:3000/services`
- **Features to Test:**
  - 5 service category cards with hover effects
  - Featured services carousel (auto-scroll, manual controls)
  - Service highlights grid
  - Trust indicators
  - Responsive layout on mobile/tablet

#### Service Categories
- **URLs:**
  - `http://localhost:3000/services/software-solutions`
  - `http://localhost:3000/services/hosting-infrastructure`
  - `http://localhost:3000/services/consulting`
  - `http://localhost:3000/services/connectivity`
  - `http://localhost:3000/services/security-surveillance`

- **Features to Test:**
  - Category hero section
  - Service grid display
  - Navigation breadcrumbs
  - Category-specific FAQ
  - All CTAs working

#### Individual Services
- **Example URLs:**
  - `http://localhost:3000/services/software-solutions/website-development`
  - `http://localhost:3000/services/hosting-infrastructure/web-hosting`
  - `http://localhost:3000/services/consulting/it-consulting-advisory`

- **Features to Test:**
  - Service overview
  - 4 pricing tiers (Starter, Professional, Enterprise, Custom)
  - Feature comparison sections
  - Testimonials (if available in data)
  - Use cases
  - Industries list

#### Pricing Hub
- **URL:** `http://localhost:3000/pricing`
- **Features to Test:**
  - Category filter buttons
  - All services display
  - Pricing comparison table
  - Filter functionality
  - Support tier comparison

---

## 📋 Testing Checklist

### Functionality Tests
- [ ] All links navigate correctly
- [ ] Category filters work on pricing page
- [ ] Carousel auto-scrolls and manual controls work
- [ ] Pricing tiers display correctly for each service
- [ ] Breadcrumbs show correct path
- [ ] All CTAs functional (buttons clickable)

### Responsive Tests
- [ ] Mobile (375px): Single column layouts
- [ ] Tablet (768px): 2-column grids
- [ ] Desktop (1440px): 3-4 column grids
- [ ] Carousel adapts to screen size
- [ ] No horizontal scrolling on mobile
- [ ] Touch targets are adequate (48px minimum)

### Visual Tests
- [ ] Colors consistent (check highlight, accent usage)
- [ ] Typography hierarchy clear (H1, H2, H3)
- [ ] Hover effects work smoothly
- [ ] Animations are smooth (no jank)
- [ ] Shadows and gradients render correctly
- [ ] Icons display properly

### Performance Tests
- [ ] Pages load quickly (<3 seconds)
- [ ] Carousel doesn't lag on older devices
- [ ] No console errors
- [ ] Images optimized
- [ ] CSS minified

### SEO Tests
- [ ] Page title and meta description present
- [ ] Breadcrumbs visible
- [ ] Headings properly nested
- [ ] Links have descriptive text (not "click here")
- [ ] Images have alt text (where applicable)

---

## 🔧 Build & Deploy

### Build for Production
```bash
npm run build
```

### Export Static Site (if needed)
```bash
next export
```

### Check for Build Errors
- Look for any TypeScript/ESLint warnings
- Verify all pages generate correctly
- Check build output for performance issues

---

## 🐛 Troubleshooting

### Issue: Pages not found (404)
- **Solution:** Make sure services.json has correct data structure
- **Check:** `data/services.json` exists and is valid JSON

### Issue: Carousel not auto-scrolling
- **Solution:** Check browser console for JavaScript errors
- **Check:** Framer Motion is installed: `npm list framer-motion`

### Issue: Styles not applied
- **Solution:** Rebuild Tailwind CSS
- **Commands:**
  ```bash
  npm install
  npm run dev
  ```

### Issue: Images/Icons not showing
- **Solution:** Emoji support varies by OS
- **Alternative:** Icons are simple text, should work everywhere
- **Check:** Console for any font-loading errors

---

## 📊 Performance Metrics

### Expected Lighthouse Scores (Desktop)
- Performance: 85-95
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

### Optimization Tips
1. Images are emojis (no files to optimize)
2. CSS is minified by Tailwind
3. JavaScript is code-split by Next.js
4. Static generation improves FCP

---

## 📱 Mobile Testing

### Test on Real Devices
- iOS Safari: iPhone 12 or newer
- Android Chrome: Any recent Android
- Tablet: iPad or Android tablet

### Test Responsiveness
- Rotate device and verify layout adapts
- Test landscape and portrait modes
- Verify touch interactions work well

---

## 🔗 Important URLs

### Development
- Services Hub: `http://localhost:3000/services`
- Pricing Hub: `http://localhost:3000/pricing`
- Navigation: Should show "Services" dropdown

### Live (After Deployment)
- Replace localhost:3000 with your domain
- Example: `https://yourdomain.com/services`

---

## 💡 Common Customizations

### Change Service List
1. Edit `data/services.json`
2. Pages regenerate automatically (due to SSG)
3. No code changes needed

### Change Colors
1. Edit `tailwind.config.js`
2. Update color tokens
3. Rebuild: `npm run dev`

### Modify Component Text
1. Edit component file (e.g., `ServiceCategoryCard.js`)
2. Changes apply to all using instances
3. Rebuild to see changes

### Add New CTA
1. Add button/link in desired page
2. Wire up `onClick` or `href`
3. Style using Tailwind classes

---

## 📞 Support Resources

### Documentation
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

### Files to Reference
- `SERVICES_IMPLEMENTATION_GUIDE.md` - Complete architecture
- `services.json` - All service data
- `tailwind.config.js` - Design tokens
- Component files in `/components/Services/`

---

## ✅ Launch Checklist

Before going live:
- [ ] All pages tested on mobile, tablet, desktop
- [ ] No console errors or warnings
- [ ] All links working correctly
- [ ] Pricing accurate
- [ ] Contact forms/CTAs configured
- [ ] Analytics tracking added (if needed)
- [ ] SSL certificate installed
- [ ] Domain configured
- [ ] Performance tested with Lighthouse
- [ ] SEO checked with Google Search Console

---

**Created:** June 5, 2026
**Version:** 1.0
**Status:** Ready for Testing
