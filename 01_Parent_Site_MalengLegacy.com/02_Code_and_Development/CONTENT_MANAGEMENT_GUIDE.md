# Content Management Guide
## How to Update Website Content

This guide explains how to modify website content without touching code.

---

## 🎯 QUICK UPDATES

### Update Company Information

**Location:** `components/Contact.js`

```javascript
const contactData = {
  email: "ceo@malenglegacy.co.za",      // ← Update email
  phone: "+27 73 884 7449",              // ← Update phone
  location: "Gauteng, South Africa",     // ← Update location
  status: "Phase 1 Activation"           // ← Update status
};
```

---

### Update Hero Title

**Location:** `components/Hero.js`

```javascript
<h1>
  Maleng Legacy Group Holdings (Pty) Ltd  {/* ← Update title */}
</h1>
```

---

### Update Mission & Vision

**Location:** `components/LegacyStandard.js`

```javascript
<div className="bg-gradient">
  <h3>Mission</h3>
  <p>
    To build and sustain diversified, profitable subsidiaries
    that create sustainable legacies through integrated
    operational solutions...
  </p>
</div>

<div className="bg-gradient">
  <h3>Vision</h3>
  <p>
    R100 million+ revenue by 2030 and establish Maleng Legacy
    as a household name in South African business...
  </p>
</div>
```

---

### Update Executive Team

**Location:** `components/Management.js`

Find the executives array and update:

```javascript
{
  role: "Chief Executive Officer",        // ← Role name
  description: "Strategic direction...",   // ← Job description
  year: "2023"                            // ← Year appointed
}
```

---

### Update Cluster Information

**Location:** `components/CoreClusters.js`

Find each cluster and update subsidiaries:

```javascript
const clusters = [
  {
    name: "Infrastructure & Built Environment",
    subsidiaries: [
      {
        name: "Mopani Farms & Production",
        description: "Agricultural production and livestock..."
      },
      // Add more subsidiaries here
    ]
  }
];
```

---

### Update Strategic Roadmap

**Location:** `components/StrategicPlan.js`

```javascript
const phases = [
  {
    phase: 1,
    title: "Foundation & Activation",
    timeline: "2024-2025",
    revenue: "R3-8M",
    actions: [
      "Action 1 here",
      "Action 2 here",
      "Action 3 here",
      "Action 4 here"
    ],
    metrics: [
      "Metric 1 here",
      "Metric 2 here",
      "Metric 3 here"
    ]
  }
];
```

---

### Update Founder Profile

**Location:** `components/FounderProfile.js`

```javascript
const founder = {
  name: "Masingita Ottis Maluleke",
  title: "Founder & CEO",
  expertise: [
    "Software Engineering",
    "Security Architecture",
    "UX/UI Design",
    "Systems Administration",
    "Digital Marketing"
  ],
  experience: [
    {
      company: "CAPACITI",
      role: "Advanced Digital Skills Internship",
      year: "2022-2023"
    }
  ]
};
```

---

## 🔄 UPDATING AFTER LAUNCH

### When to Update What

| Content | How Often | Impact | Difficulty |
|---------|-----------|--------|-----------|
| News/Updates | Weekly | High | Easy |
| Team Members | Quarterly | Medium | Easy |
| Financials | Annually | High | Easy |
| Service Offerings | Quarterly | Medium | Medium |
| Cluster Structure | Rarely | Very High | Hard |
| Color Scheme | Never | Critical | Hard |

---

### File Editing Best Practices

1. **Backup Before Editing**
   ```bash
   # Create backup copy
   copy components\Hero.js components\Hero.js.backup
   ```

2. **Test Locally Before Deploying**
   ```bash
   npm run dev
   # Visit http://localhost:3000
   # Check your changes
   ```

3. **Deploy When Ready**
   ```bash
   npm run build
   npm run export
   # Upload /out folder to HostAfrica
   ```

---

## 📱 SOCIAL MEDIA PREVIEW

When you update the website, social sharing images update automatically:

**File:** `pages/index.js`

```javascript
<meta property="og:image" content="/og-image.jpg" />
<meta name="twitter:image" content="/og-image.jpg" />
```

Update `/public/og-image.jpg` (1200x630px) to change social preview.

---

## 🎨 CHANGING COLORS

All colors are defined in one file - easy to update!

**File:** `tailwind.config.js`

```javascript
colors: {
  'earth-brown': '#8B4513',    // ← Primary brown
  'earth-green': '#556B2F',    // ← Primary green
  'gold-accent': '#DAA520',    // ← Accent gold
  'navy-blue': '#001F3F',
  'steel-blue': '#4682B4',
  'dark-grey': '#2C3E50'
}
```

Change these hex values and the entire site updates.

---

## 📸 ADDING IMAGES

1. **Create image file** (JPG, PNG, or WebP)
2. **Optimize image** (< 50KB recommended)
3. **Place in** `/public/images/` folder
4. **Reference in component:**

```javascript
import Image from 'next/image';

<Image 
  src="/images/my-image.jpg"
  alt="Description"
  width={400}
  height={300}
/>
```

---

## 🚀 DEPLOYMENT AFTER UPDATES

### Quick Deployment Steps

```bash
# 1. Build the updated site
npm run build

# 2. Export static files
npm run export

# 3. Upload to HostAfrica via FTP
# Upload the /out folder contents

# 4. Clear browser cache (Ctrl+Shift+Del)

# 5. Visit https://www.malenglegacy.co.za
```

---

## ✅ VERIFICATION CHECKLIST

After updating content:

- [ ] No typos in the text
- [ ] All links still work
- [ ] Images display correctly
- [ ] Mobile view looks good
- [ ] Desktop view looks good
- [ ] No console errors (F12 > Console)
- [ ] Google Analytics still tracking
- [ ] HTTPS still working (padlock visible)

---

## 🆘 IF SOMETHING BREAKS

**Don't panic!** Here's how to recover:

```bash
# 1. Restore from git if you have version control
git checkout components/Hero.js

# 2. Or restore from backup file
copy components\Hero.js.backup components\Hero.js

# 3. Rebuild and test
npm run build
npm run dev
```

---

## 📝 DOCUMENTATION

All components have comments explaining their purpose:

```javascript
/**
 * Hero Component
 * Displays main headline with animated text
 * Location: components/Hero.js
 * Update: Hero title in this file
 */
```

---

## 💡 TIPS & TRICKS

**Tip 1: Use Find & Replace**
- Many editors have Find & Replace (Ctrl+H)
- Useful for updating company names site-wide

**Tip 2: Keep Backups**
- Save old versions before major updates
- Useful if you need to revert changes

**Tip 3: Test on Mobile**
- Always check how updates look on phone/tablet
- Use browser DevTools (F12)

**Tip 4: Monitor Analytics**
- Check if users are reading updated content
- Use Google Analytics > Pages

---

## 📞 NEED HELP?

- **Edit a component?** Look at similar components first
- **Stuck on syntax?** Check JavaScript/React documentation
- **Deploy issue?** See DEPLOYMENT_GUIDE.md
- **Technical help?** Email: ceo@malenglegacy.co.za

---

**Last Updated:** February 20, 2026
**For:** Maleng Legacy Group Holdings (Pty) Ltd
**Status:** ✅ COMPLETE AND TESTED
