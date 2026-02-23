# Maleng Legacy Group - Website Development Structure

## Overview
This directory contains all website development assets for Maleng Legacy Group, organized into parent site and subsidiary site templates.

---

## Folder Structure

```
06_WEBSITE_DEVELOPMENT/
├── 01_Parent_Site_MalengLegacy.com/          # Parent site (main holding company)
│   ├── 02_Code_and_Development/
│   │   ├── project/                          # Next.js application
│   │   │   ├── pages/                        # Page components
│   │   │   │   ├── index.js                 # Home page
│   │   │   │   ├── subsidiaries/            # Subsidiary pages
│   │   │   │   │   ├── tech.js
│   │   │   │   │   ├── media.js
│   │   │   │   │   ├── vault.js
│   │   │   │   │   └── corporate.js
│   │   │   │   └── [other pages]
│   │   │   ├── components/                   # Shared components
│   │   │   │   ├── Navigation.js
│   │   │   │   ├── Footer.js
│   │   │   │   ├── ParallaxHero.js
│   │   │   │   ├── ParallaxSection.js
│   │   │   │   └── [other components]
│   │   │   ├── styles/                       # Global styles
│   │   │   ├── public/                       # Static assets
│   │   │   ├── package.json
│   │   │   ├── next.config.js
│   │   │   ├── tailwind.config.js
│   │   │   └── postcss.config.js
│   │   └── assets/                           # Design files, images
│   └── [other documentation]
│
└── 02_Subsidiary_Sites_Template/             # Subsidiary site templates & code
    ├── pages/
    │   └── subsidiaries/                     # All 12 subsidiary page files
    │       ├── construction.js               # 🏗️ Construction & Infrastructure
    │       ├── property.js                   # 🏘️ Property Development
    │       ├── energy.js                     # ⚡ Energy & Solar Solutions
    │       ├── training.js                   # 🎓 Training & Development
    │       ├── capital.js                    # 💰 Capital & Investment
    │       ├── security.js                   # 🛡️ Security & Protection
    │       ├── logistics.js                  # 🚚 Logistics & Transport
    │       ├── facility.js                   # 🏢 Facility Management
    │       ├── carwash.js                    # 🚗 Car Wash & Detailing
    │       ├── agri.js                       # 🌾 Agri & Farming
    │       ├── catering.js                   # 🍽️ Catering & Events
    │       └── events.js                     # 🎉 Events & Conferencing
    │
    ├── components/                           # Shared components for subsidiaries
    │   ├── Navigation.js                     # (shared from parent)
    │   └── Footer.js                         # (shared from parent)
    │
    ├── public/                               # Static assets for subsidiaries
    │   └── [images, logos, etc]
    │
    ├── README.md                             # Subsidiary sites documentation
    └── SETUP_GUIDE.md                        # Instructions for creating new subsidiary sites

└── STRUCTURE_GUIDE.md                        # This file
└── README.md                                 # Main development README
```

---

## File Organization Details

### Parent Site (01_Parent_Site_MalengLegacy.com)
**Purpose:** Main holding company website displaying overview, group statistics, and links to all subsidiaries

**Key Files:**
- `pages/index.js` - Homepage with hero, stats, subsidiaries showcase
- `pages/subsidiaries/tech.js` - Tech & Consulting subsidiary (shared with users)
- `pages/subsidiaries/media.js` - Media & Signage subsidiary
- `pages/subsidiaries/vault.js` - The Vault (Asset Holdings)
- `pages/subsidiaries/corporate.js` - Corporate Services

**Components Used:**
- `ParallaxHero.js` - Main hero section with parallax background
- `ParallaxSection.js` - Reusable parallax section wrapper
- `Navigation.js` - Header/navigation bar
- `Footer.js` - Footer component

**Technology Stack:**
- Next.js 14.2.35
- React 18
- Tailwind CSS
- Framer Motion (animations)
- React Icons

---

### Subsidiary Sites (02_Subsidiary_Sites_Template)
**Purpose:** Template and storage for all 12 subsidiary page files

**The 12 New Subsidiaries:**
1. **construction.js** - Construction & Infrastructure 🏗️
   - NHBRC-registered, residential/commercial projects
   - Hero: Orange accent (orange-500/400)

2. **property.js** - Property Development 🏘️
   - Land transformation, investment opportunities
   - Hero: Yellow accent (yellow-500/400)

3. **energy.js** - Energy & Solar Solutions ⚡
   - Solar installations, renewable energy
   - Hero: Yellow accent (yellow-500/400)

4. **training.js** - Training & Development Institute 🎓
   - Accredited skills programs, job placement
   - Hero: Cyan accent (cyan-500/400)

5. **capital.js** - Capital & Investment 💰
   - Wealth management, investment advisory
   - Hero: Amber accent (amber-500/400)

6. **security.js** - Security & Protection 🛡️
   - PSIRA-registered, armed response, 24/7
   - Hero: Red accent (red-500/400)

7. **logistics.js** - Logistics & Transport 🚚
   - Modern fleet, nationwide coverage
   - Hero: Yellow accent (yellow-500/400)

8. **facility.js** - Facility Management 🏢
   - Building maintenance, cleaning, landscaping
   - Hero: Cyan accent (cyan-500/400)

9. **carwash.js** - Executive Car Wash 🚗
   - Premium detailing, valeting services
   - Hero: Red accent (red-500/400)

10. **agri.js** - Agri & Farming 🌾
    - Sustainable farming, fresh produce
    - Hero: Green accent (green-700/600)

11. **catering.js** - Catering & Events 🍽️
    - Corporate events, weddings, custom menus
    - Hero: Green accent (green-700/600)

12. **events.js** - Events & Conferencing 🎉
    - Event management, conferencing services
    - Hero: Amber accent (amber-500/400)

---

## Hero Section Structure (All Subsidiaries)

Each subsidiary page contains:
```javascript
// 1. HERO SECTION
- Full-screen height (h-screen)
- Background image with parallax effect
- Gradient overlay (brand colors)
- Emoji badge with category
- Title with gradient-text styling
- Tagline text
- CTA buttons (primary + secondary)

// 2. STATS SECTION
- Gradient background (brand colors)
- 4-column grid of key metrics
- Centered text layout

// 3. CONTENT SECTIONS
- Why Choose Us
- Services/Solutions
- Portfolio/Projects
- Testimonials
- Video Section
- Call-to-Action Footer
```

---

## Color System

### Accent Colors by Subsidiary

```javascript
Construction:  Orange   (orange-500 / orange-400)
Property:      Yellow   (yellow-500 / yellow-400)
Energy:        Yellow   (yellow-500 / yellow-400)
Training:      Cyan     (cyan-500 / cyan-400)
Capital:       Amber    (amber-500 / amber-400)
Security:      Red      (red-500 / red-400)
Logistics:     Yellow   (yellow-500 / yellow-400)
Facility:      Cyan     (cyan-500 / cyan-400)
Carwash:       Red      (red-500 / red-400)
Agri:          Green    (green-700 / green-600)
Catering:      Green    (green-700 / green-600)
Events:        Amber    (amber-500 / amber-400)
```

All colors are applied throughout:
- Hero gradient overlays
- Stats section gradients
- Section headings (h2, h3)
- Testimonial star ratings
- Service icons
- CTA buttons

---

## Development Workflow

### Running Parent Site
```bash
cd 01_Parent_Site_MalengLegacy.com/02_Code_and_Development/project
npm install
npm run dev
# Runs on localhost:3000
```

### Accessing Subsidiaries
```
Parent Site: http://localhost:3000/
Subsidiaries: http://localhost:3000/subsidiaries/[name]

Examples:
- http://localhost:3000/subsidiaries/construction
- http://localhost:3000/subsidiaries/security
- http://localhost:3000/subsidiaries/agri
```

---

## Key Dependencies

### Core
- **next**: 14.2.35 (React framework)
- **react**: 18 (UI library)
- **react-dom**: 18
- **framer-motion**: Animations

### Styling
- **tailwindcss**: Utility-first CSS
- **postcss**: CSS processing
- **autoprefixer**: CSS vendor prefixes

### Icons & UI
- **react-icons**: Icon library (FontAwesome, Feather, etc.)

### Development
- **eslint**: Code linting
- **prettier**: Code formatting

---

## File Naming Conventions

```
pages/
├── index.js                           # Always index for route entry
├── subsidiaries/
│   ├── construction.js               # Lowercase, kebab-ready
│   ├── property.js
│   └── [subsidiary-name].js          # Matches URL path

components/
├── Navigation.js                      # PascalCase for components
├── Footer.js
├── ParallaxHero.js
└── [ComponentName].js

styles/
├── globals.css                        # Global styles
└── [feature].module.css               # Scoped styles (if needed)
```

---

## Documentation Files

### Main Documentation
- **STRUCTURE_GUIDE.md** (This file) - Folder organization & file details
- **README.md** - Quick start guide
- **SETUP_GUIDE.md** - Instructions for creating new subsidiary sites

### Marketing
- **Facebook_Posts_Maleng_Legacy_Subsidiaries.md** - Social media content for all 16 subsidiaries

### Development Assets
- All source code in respective project folders
- Design files in `assets/` directories
- Static images in `public/` directories

---

## Next Steps

1. ✅ **Code Organization** - Parent site in 01_, Subsidiaries in 02_
2. ✅ **Documentation** - Structure guide created
3. 📋 **Future:** Consider setting up CI/CD pipeline
4. 📋 **Future:** Add deployment guides for each site
5. 📋 **Future:** Create component library documentation

---

## Contact & Support
For questions about site structure or development:
- Check the README.md in each folder
- Review the SETUP_GUIDE.md for new subsidiary creation
- Examine existing subsidiary files as templates

---

**Last Updated:** February 23, 2026
**Version:** 1.0
**Status:** Complete and organized
