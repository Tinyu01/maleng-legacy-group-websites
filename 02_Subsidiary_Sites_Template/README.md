# Subsidiary Sites Template

This directory contains all 12 subsidiary site page files and shared components for Maleng Legacy Group subsidiaries.

## Quick Links

- **Parent Site Code:** `../01_Parent_Site_MalengLegacy.com/`
- **Shared Components:** Located in parent site (`/components/`)
- **Styling:** Uses Tailwind CSS (configured in parent site)

## Subsidiary Pages

### The 12 New Subsidiaries

| File | Name | Sector | Accent Color |
|------|------|--------|--------------|
| construction.js | Construction & Infrastructure | Infrastructure | Orange |
| property.js | Property Development | Real Estate | Yellow |
| energy.js | Energy & Solar Solutions | Renewable Energy | Yellow |
| training.js | Training & Development Institute | Education | Cyan |
| capital.js | Capital & Investment | Finance | Amber |
| security.js | Security & Protection | Security | Red |
| logistics.js | Logistics & Transport | Transportation | Yellow |
| facility.js | Facility Management | Services | Cyan |
| carwash.js | Executive Car Wash | Auto Care | Red |
| agri.js | Agri & Farming | Agriculture | Green |
| catering.js | Catering & Events | Hospitality | Green |
| events.js | Events & Conferencing | Events | Amber |

## File Structure

Each subsidiary page (`[name].js`) contains:

```javascript
// Hero Section
- Full-screen background with parallax
- Gradient overlay (brand colors)
- Emoji category badge
- Main heading with gradient text
- Tagline
- CTA buttons

// Stats Section
- Key metrics grid
- Colored background matching brand

// Content Sections
- Why Choose Us (with icons)
- Services/Solutions (detailed list)
- Portfolio/Case Studies
- Testimonials (with star ratings)
- Video Section
- Call-to-Action Footer
```

## Color System

Each subsidiary has a unique accent color applied throughout:
- Hero section gradient
- Stats section background
- All h2 and h3 headings
- Testimonial star ratings
- Service icons
- Button hover states

## Development

All subsidiaries share:
- Navigation component
- Footer component
- Tailwind CSS styling
- Framer Motion animations
- React Icons

To view a subsidiary locally:
```bash
npm run dev
# Visit: http://localhost:3000/subsidiaries/[name]
```

## Creating New Subsidiary Pages

1. Copy an existing subsidiary file (e.g., `construction.js`)
2. Update:
   - Title and tagline
   - Category emoji and text
   - Accent color (e.g., orange-500 → your-color-500)
   - Why Choose Us section
   - Services list
   - Portfolio items
   - Testimonials
   - Contact information
3. Save with appropriate filename
4. Test at `localhost:3000/subsidiaries/[name]`

## Customization

### Change Accent Color
Find and replace color classes:
```javascript
// From:
bg-orange-500, text-orange-400, border-orange-500

// To your brand color:
bg-teal-500, text-teal-400, border-teal-500
```

### Change Background Image
In the hero section:
```javascript
backgroundImage: 'url("YOUR_IMAGE_URL")',
```

### Update Content
Modify the component's data objects:
- `stats` - Key metrics
- `whyChooseUs` - Features/benefits
- `services` - Service offerings
- `caseStudies` - Portfolio items
- `testimonials` - Client quotes

## Related Files

- **Parent Site:** `../01_Parent_Site_MalengLegacy.com/`
- **Structure Guide:** `../STRUCTURE_GUIDE.md`
- **Marketing Content:** `../Facebook_Posts_Maleng_Legacy_Subsidiaries.md`

## Contact

For development questions or to report issues, refer to the main project README in the parent site folder.
