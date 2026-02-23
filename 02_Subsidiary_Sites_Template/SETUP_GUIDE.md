# Subsidiary Site Setup Guide

Complete guide for understanding and managing subsidiary site files in Maleng Legacy Group.

## Directory Structure

```
06_WEBSITE_DEVELOPMENT/
├── 01_Parent_Site_MalengLegacy.com/
│   └── 02_Code_and_Development/
│       └── project/
│           ├── pages/
│           │   ├── index.js (homepage)
│           │   └── subsidiaries/
│           │       ├── tech.js (existing)
│           │       ├── media.js (existing)
│           │       ├── vault.js (existing)
│           │       └── corporate.js (existing)
│           ├── components/
│           │   ├── Navigation.js
│           │   ├── Footer.js
│           │   ├── ParallaxHero.js
│           │   └── [other components]
│           ├── styles/
│           │   └── globals.css
│           ├── public/
│           └── package.json
│
└── 02_Subsidiary_Sites_Template/
    ├── pages/subsidiaries/
    │   ├── construction.js
    │   ├── property.js
    │   ├── energy.js
    │   ├── training.js
    │   ├── capital.js
    │   ├── security.js
    │   ├── logistics.js
    │   ├── facility.js
    │   ├── carwash.js
    │   ├── agri.js
    │   ├── catering.js
    │   └── events.js
    └── README.md (this folder's guide)
```

## File Organization

### Parent Site Location
**Path:** `Maleng Legacy Group Workspace/06_WEBSITE_DEVELOPMENT/01_Parent_Site_MalengLegacy.com/`

**Contains:**
- Main Next.js application
- All components (Navigation, Footer, etc.)
- Global styles
- Configuration files
- 4 Original subsidiary pages

**Responsibilities:**
- Serves as the main application server
- Hosts all 16 subsidiaries at `/subsidiaries/[name]`
- Manages shared components
- Handles styling and configuration

### Subsidiary Template Location
**Path:** `Maleng Legacy Group Workspace/06_WEBSITE_DEVELOPMENT/02_Subsidiary_Sites_Template/`

**Contains:**
- All 12 new subsidiary page files
- Reference files for structure
- Documentation

**Purpose:**
- Organized reference location
- Easy access to all subsidiary code
- Single place to view all subsidiaries
- Template for creating new ones

## The 12 Subsidiary Pages

### 1. Construction & Infrastructure
- **File:** `construction.js`
- **Emoji:** 🏗️
- **Sector:** Infrastructure
- **Accent Color:** Orange (orange-500/400)
- **Hero Tagline:** Building the Future of Limpopo
- **Key Stats:** 200+ Projects | 50K+ SQM | NHBRC Registered

### 2. Property Development
- **File:** `property.js`
- **Emoji:** 🏘️
- **Sector:** Real Estate
- **Accent Color:** Yellow (yellow-500/400)
- **Hero Tagline:** Transforming Land into Thriving Communities
- **Key Feature:** Prime investment opportunities

### 3. Energy & Solar Solutions
- **File:** `energy.js`
- **Emoji:** ⚡
- **Sector:** Renewable Energy
- **Accent Color:** Yellow (yellow-500/400)
- **Hero Tagline:** Powering the Future with Clean Energy
- **Key Benefit:** 80% electricity bill reduction

### 4. Training & Development Institute
- **File:** `training.js`
- **Emoji:** 🎓
- **Sector:** Education
- **Accent Color:** Cyan (cyan-500/400)
- **Hero Tagline:** Empowering Careers Through Quality Training
- **Key Feature:** Accredited programs with job placement

### 5. Capital & Investment
- **File:** `capital.js`
- **Emoji:** 💰
- **Sector:** Finance
- **Accent Color:** Amber (amber-500/400)
- **Hero Tagline:** Strategic Wealth Management & Investment Solutions
- **Key Focus:** Portfolio management & wealth growth

### 6. Security & Protection
- **File:** `security.js`
- **Emoji:** 🛡️
- **Sector:** Security
- **Accent Color:** Red (red-500/400)
- **Hero Tagline:** Professional Security Solutions
- **Key Metric:** 500+ sites protected | 99.8% incident prevention

### 7. Logistics & Transport
- **File:** `logistics.js`
- **Emoji:** 🚚
- **Sector:** Transportation
- **Accent Color:** Yellow (yellow-500/400)
- **Hero Tagline:** Reliable Transportation Solutions
- **Coverage:** Local & long-distance | Southern Africa

### 8. Facility Management
- **File:** `facility.js`
- **Emoji:** 🏢
- **Sector:** Facility Services
- **Accent Color:** Cyan (cyan-500/400)
- **Hero Tagline:** Comprehensive Facility Solutions
- **Services:** Maintenance, cleaning, landscaping, security

### 9. Executive Car Wash
- **File:** `carwash.js`
- **Emoji:** 🚗
- **Sector:** Auto Care
- **Accent Color:** Red (red-500/400)
- **Hero Tagline:** Premium Auto Detailing & Valeting
- **Services:** Full detailing, paint correction, ceramic coating

### 10. Agri & Farming
- **File:** `agri.js`
- **Emoji:** 🌾
- **Sector:** Agriculture
- **Accent Color:** Green (green-700/600)
- **Hero Tagline:** Sustainable Farming for Food Security
- **Focus:** Crop production, livestock, modern equipment

### 11. Catering & Events
- **File:** `catering.js`
- **Emoji:** 🍽️
- **Sector:** Hospitality
- **Accent Color:** Green (green-700/600)
- **Hero Tagline:** Exceptional Culinary Experiences
- **Services:** Corporate events, weddings, custom menus

### 12. Events & Conferencing
- **File:** `events.js`
- **Emoji:** 🎉
- **Sector:** Event Management
- **Accent Color:** Amber (amber-500/400)
- **Hero Tagline:** Creating Unforgettable Experiences
- **Services:** Conferences, corporate events, weddings

## Hero Section Specifications

Each subsidiary page follows this structure:

```javascript
// 1. IMPORTS
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

// 2. COMPONENT DEFINITION
export default function [SubsidiaryName]() {
  const stats = [...]     // Key metrics
  const whyChooseUs = [...] // Benefits/features
  const services = [...]   // Service offerings
  const caseStudies = [...] // Portfolio/projects
  const testimonials = [...] // Client quotes

  return (
    <>
      {/* HTML Head for SEO */}
      <Head>...</Head>

      {/* Navigation */}
      <Navigation isSubsidiary={true} subsidiaryName="..." />

      {/* Main Content */}
      <main>
        {/* Hero Section - Full screen */}
        <section className="relative h-screen overflow-hidden">
          {/* Background with parallax */}
          {/* Gradient overlay */}
          {/* Centered content */}
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-[color]-900 to-[color]-800">
          {/* 4-column grid of metrics */}
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          {/* Feature cards with icons */}
        </section>

        {/* Services Section */}
        {/* Portfolio Section */}
        {/* Testimonials Section */}
        {/* Video Section */}
        {/* CTA Section */}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
```

## Styling System

### Tailwind CSS Classes Used

**Layout:**
- `h-screen` - Full viewport height
- `overflow-hidden` - Clip overflow
- `flex`, `grid` - Layout systems
- `max-w-7xl` - Container width
- `container mx-auto px-6` - Responsive container

**Typography:**
- `text-5xl md:text-6xl` - Hero title
- `text-2xl` - Tagline
- `text-4xl font-bold` - Section headings
- `text-xl` - Body text

**Colors:**
- `bg-gradient-to-br` - Gradient backgrounds
- `text-[color]-500` - Brand color text
- `bg-[color]-500/10` - Tinted backgrounds
- `hover:bg-[color]/90` - Hover states

**Effects:**
- `opacity-85`, `opacity-90` - Transparency
- `backdrop-blur-sm` - Blur effect
- `rounded-lg`, `rounded-xl` - Border radius
- `shadow-lg`, `shadow-2xl` - Shadows
- `border` - Borders with colors

## Component Dependencies

Each subsidiary imports:

1. **Next.js Components**
   - `Head` - SEO and meta tags
   - `Link` - Client-side navigation

2. **Custom Components** (from parent site)
   - `Navigation` - Header/navbar
   - `Footer` - Footer section
   - `ParallaxSection` - Reusable parallax wrapper

3. **Framer Motion**
   - `motion` - Animations
   - `useScroll`, `useTransform` - Scroll effects

4. **React Icons**
   - Various icon components (FaCheckCircle, etc.)

## Key Features

### Hero Section Features
✅ Full-screen background image
✅ Parallax scroll effect (bg-fixed)
✅ Gradient color overlay
✅ Centered content with max-width
✅ Emoji badge with category
✅ Large responsive heading
✅ Tagline in gray text
✅ Two CTA buttons
✅ Framer Motion entrance animation

### Stats Section
✅ Gradient background (brand colors)
✅ 4-column responsive grid
✅ Large bold numbers
✅ Descriptive text

### Content Sections
✅ Why Choose Us - Feature grid with icons
✅ Services - Detailed list with descriptions
✅ Portfolio - Case studies with results
✅ Testimonials - Client quotes with ratings
✅ Video - Embedded video with play button
✅ CTA - Call-to-action footer

## Color Assignments

| Subsidiary | Primary | Secondary | Gradient From | Gradient To |
|-----------|---------|-----------|---------------|------------|
| Construction | orange-500 | orange-400 | orange-900 | orange-800 |
| Property | yellow-500 | yellow-400 | yellow-900 | yellow-800 |
| Energy | yellow-500 | yellow-400 | yellow-900 | yellow-800 |
| Training | cyan-500 | cyan-400 | cyan-900 | cyan-800 |
| Capital | amber-500 | amber-400 | amber-900 | amber-800 |
| Security | red-500 | red-400 | red-900 | red-800 |
| Logistics | yellow-500 | yellow-400 | yellow-900 | yellow-800 |
| Facility | cyan-500 | cyan-400 | cyan-900 | cyan-800 |
| Carwash | red-500 | red-400 | red-900 | red-800 |
| Agri | green-700 | green-600 | green-900 | green-800 |
| Catering | green-700 | green-600 | green-900 | green-800 |
| Events | amber-500 | amber-400 | amber-900 | amber-800 |

## Running the Application

```bash
# Navigate to parent site
cd 01_Parent_Site_MalengLegacy.com/02_Code_and_Development/project

# Install dependencies
npm install

# Start development server
npm run dev

# Access subsidiaries
http://localhost:3000/subsidiaries/construction
http://localhost:3000/subsidiaries/security
http://localhost:3000/subsidiaries/agri
# ... etc
```

## Maintenance & Updates

### To Update a Subsidiary Page
1. Open file from `02_Subsidiary_Sites_Template/pages/subsidiaries/[name].js`
2. Modify content (whyChooseUs, services, etc.)
3. Restart dev server
4. Changes apply immediately to parent site

### To Add a New Subsidiary
1. Copy an existing page file
2. Update all content sections
3. Change accent color throughout
4. Change background image URL
5. Update SEO meta tags
6. Save with new filename
7. Will be accessible at `/subsidiaries/[name]`

### To Change Styling
All styling uses Tailwind CSS classes. Modify:
- Parent site's `tailwind.config.js` for theme changes
- Component files directly for specific styles
- Colors can be changed throughout any subsidiary file

## Version Control

- **All code:** Version controlled in project folder
- **Documentation:** Maintained in `STRUCTURE_GUIDE.md` and this file
- **Marketing Content:** In `Facebook_Posts_Maleng_Legacy_Subsidiaries.md`

## References

- **Tailwind CSS:** https://tailwindcss.com/docs
- **Next.js:** https://nextjs.org/docs
- **Framer Motion:** https://www.framer.com/motion/
- **React Icons:** https://react-icons.github.io/react-icons/

## Support

For questions about:
- **Code Structure:** See STRUCTURE_GUIDE.md
- **File Organization:** See this file (SETUP_GUIDE.md)
- **Individual Subsidiary:** Check the file's comments and structure
- **Marketing Content:** See Facebook_Posts_Maleng_Legacy_Subsidiaries.md

---

**Last Updated:** February 23, 2026
**Status:** Complete
**Total Subsidiaries:** 16 (4 existing + 12 new)
