# Data Structure & Usage Guide
## Tech & Consulting Website

---

## 📋 Overview

All website data is stored in JSON files in the `/data` directory. This provides a single source of truth that can be easily updated without touching code.

### Files Created

```
/data/
├── services.json          # All 5 categories + 24 services + pricing
├── config.json            # Site settings, colors, typography
├── testimonials.json      # Client quotes & case studies
├── faqs.json              # Frequently asked questions
└── caseStudies.json       # Detailed case study data
```

---

## 🎯 How to Use Each File

### 1. **services.json** (Primary Data Source)

**Purpose:** Defines all 5 service categories and 24 individual services with complete pricing, features, use cases, and testimonials.

**Structure:**
```javascript
{
  "categories": [
    {
      "id": "software-solutions",
      "name": "Software & Digital Solutions",
      "slug": "software-solutions",
      "description": "...",
      "icon": "💻",
      "color": "#003366",
      "tagline": "...",
      "services": [
        {
          "id": 1,
          "name": "Website Development",
          "slug": "website-development",
          "pricing": {
            "starter": { "name": "...", "price": 2999, ... },
            "professional": { ... },
            "enterprise": { ... },
            "custom": { ... }
          },
          "features": {
            "starter": ["Feature 1", "Feature 2"],
            "professional": [...],
            "enterprise": [...],
            "custom": [...]
          },
          "useCases": ["Use case 1", "Use case 2"],
          "testimonials": [...]
        }
      ]
    }
  ]
}
```

**Usage in Components:**

```javascript
// In a Next.js page component
import services from '@/data/services.json';

export default function ServicePage() {
  const category = services.categories[0]; // Software Solutions
  const service = category.services[0];    // Website Development
  
  return (
    <div>
      <h1>{service.name}</h1>
      <p>Price: ${service.pricing.starter.price}</p>
      <ul>
        {service.features.starter.map(f => <li>{f}</li>)}
      </ul>
    </div>
  );
}
```

**Key Data Points:**
- **5 Categories** with different colors and icons
- **24 Total Services** (6+5+5+3+5)
- **4 Pricing Tiers** per service (Starter, Professional, Enterprise, Custom)
- **Features by Tier** (what's included at each level)
- **Use Cases** (2-5 typical applications)
- **Testimonials** (2-3 client quotes per service)

---

### 2. **config.json** (Site Configuration)

**Purpose:** Central configuration for colors, typography, navigation, and global settings.

**Key Sections:**

```javascript
{
  "colors": {
    "primary": "#003366",      // Deep blue
    "secondary": "#00A896",    // Teal
    "accent": "#00D084",       // Bright green
    ...
  },
  "typography": {
    "headline": "Montserrat",
    "body": "Inter",
    "sizes": { "h1": "44px", ... }
  },
  "components": {
    "button": {
      "primaryBg": "#003366",
      "radius": "8px",
      ...
    },
    "card": { ... },
    "input": { ... }
  },
  "navigation": {
    "main": [
      {
        "label": "Services",
        "submenu": [
          { "label": "Software Solutions", "href": "/services/software-solutions" },
          ...
        ]
      }
    ]
  }
}
```

**Usage in Tailwind Config:**

```javascript
// tailwind.config.js
const config = require('@/data/config.json');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: config.colors.primary,
        secondary: config.colors.secondary,
        accent: config.colors.accent,
      },
      fontFamily: {
        headline: config.typography.headline,
        body: config.typography.body,
      }
    }
  }
}
```

**Usage in Components:**

```javascript
import config from '@/data/config.json';

export default function Navigation() {
  return (
    <nav style={{ backgroundColor: config.colors.primary }}>
      {config.navigation.main.map(item => (
        <a key={item.label} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
```

---

### 3. **testimonials.json** (Client Feedback)

**Purpose:** Stores client testimonials, case studies, and trust indicators.

**Structure:**

```javascript
{
  "homepage": [
    {
      "id": 1,
      "client": "TechCorp Inc",
      "role": "Chief Technology Officer",
      "quote": "Their custom software...",
      "rating": 5,
      "image": "👨‍💼",
      "service": "Custom Software Development"
    }
  ],
  "testimonialsByService": {
    "website-development": [
      { "client": "...", "quote": "..." }
    ],
    "custom-software": [...]
  },
  "trustIndicators": {
    "years": 15,
    "clients": 500,
    "projects": 1200,
    "uptime": "99.9%"
  }
}
```

**Usage in Components:**

```javascript
import testimonials from '@/data/testimonials.json';

export default function TestimonialSection() {
  return (
    <div>
      {testimonials.homepage.map(item => (
        <blockquote key={item.id}>
          <p>{item.image} {item.quote}</p>
          <footer>{item.client}, {item.role}</footer>
          <div>⭐ {item.rating}/5</div>
        </blockquote>
      ))}
    </div>
  );
}
```

---

### 4. **faqs.json** (FAQ Data)

**Purpose:** Stores categorized frequently asked questions and answers.

**Structure:**

```javascript
{
  "general": [
    {
      "id": 1,
      "question": "What makes your tech consulting different?",
      "answer": "We focus on specialized B2B services...",
      "category": "General"
    }
  ],
  "software": [
    { "question": "...", "answer": "...", "category": "Software Development" }
  ],
  "hosting": [ ... ],
  "consulting": [ ... ],
  "pricing": [ ... ],
  "support": [ ... ],
  "security": [ ... ],
  "compliance": [ ... ]
}
```

**Usage in FAQ Page:**

```javascript
import faqs from '@/data/faqs.json';

export default function FAQPage() {
  const allFaqs = Object.values(faqs).flat();
  
  return (
    <div>
      {allFaqs.map(item => (
        <details key={item.id}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
```

---

### 5. **caseStudies.json** (Case Study Data)

**Purpose:** Detailed case studies showing client success stories.

**Structure:**

```javascript
{
  "caseStudies": [
    {
      "id": 1,
      "slug": "retailchain-infrastructure-upgrade",
      "title": "RetailChain International - Infrastructure Consolidation",
      "industry": "Retail",
      "company": "RetailChain International",
      "challenge": "Fragmented IT infrastructure across 50+ locations...",
      "solution": "Implemented unified managed hosting infrastructure...",
      "results": {
        "metrics": [
          {
            "label": "Cost Reduction",
            "value": "35%",
            "description": "..."
          }
        ],
        "businessImpact": ["...", "..."]
      },
      "services": [
        { "name": "Managed Hosting", "href": "/services/hosting-infrastructure/..." }
      ],
      "testimonial": {
        "quote": "...",
        "author": "...",
        "role": "...",
        "company": "..."
      },
      "timeline": "4 months",
      "team": "4 engineers + 1 project manager"
    }
  ]
}
```

**Usage in Case Studies Page:**

```javascript
import caseStudies from '@/data/caseStudies.json';

export default function CaseStudiesPage() {
  return (
    <div>
      {caseStudies.caseStudies.map(study => (
        <article key={study.id}>
          <h2>{study.title}</h2>
          <p><strong>Challenge:</strong> {study.challenge}</p>
          <p><strong>Solution:</strong> {study.solution}</p>
          <div>
            <h3>Results:</h3>
            {study.results.metrics.map(m => (
              <div key={m.label}>
                <span>{m.label}:</span> <strong>{m.value}</strong>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
```

---

## 🔄 Dynamic Page Generation

### Service Category Pages
**Path:** `/services/[category]`

```javascript
// pages/services/[category]/index.js
export async function getStaticProps({ params }) {
  const services = require('@/data/services.json');
  const category = services.categories.find(c => c.slug === params.category);
  return { props: { category } };
}

export async function getStaticPaths() {
  const services = require('@/data/services.json');
  const paths = services.categories.map(c => ({
    params: { category: c.slug }
  }));
  return { paths, fallback: false };
}

export default function CategoryPage({ category }) {
  return (
    <div>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      <div className="grid">
        {category.services.map(service => (
          <ServiceCard key={service.id} service={service} category={category} />
        ))}
      </div>
    </div>
  );
}
```

### Individual Service Pages
**Path:** `/services/[category]/[service]`

```javascript
// pages/services/[category]/[service].js
export async function getStaticProps({ params }) {
  const services = require('@/data/services.json');
  const category = services.categories.find(c => c.slug === params.category);
  const service = category.services.find(s => s.slug === params.service);
  return { props: { category, service } };
}

export async function getStaticPaths() {
  const services = require('@/data/services.json');
  const paths = [];
  services.categories.forEach(cat => {
    cat.services.forEach(srv => {
      paths.push({
        params: { category: cat.slug, service: srv.slug }
      });
    });
  });
  return { paths, fallback: false };
}

export default function ServicePage({ service, category }) {
  return (
    <div>
      <h1>{service.name}</h1>
      <PricingTiers service={service} />
      <FeaturesList service={service} />
      <UseCases service={service} />
      <Testimonials service={service} />
    </div>
  );
}
```

---

## 📊 Data Statistics

**At a glance:**

| Category | Services | Total Pricing Tiers | Testimonials | Features |
|----------|----------|-------------------|--------------|----------|
| Software | 6 | 24 | 12+ | 50+ |
| Hosting | 5 | 20 | 10+ | 40+ |
| Consulting | 5 | 20 | 10+ | 40+ |
| Connectivity | 3 | 12 | 6+ | 25+ |
| Security | 5 | 20 | 10+ | 40+ |
| **TOTAL** | **24** | **96** | **48+** | **195+** |

---

## 🔧 How to Update Data

### Adding a New Service
1. Open `/data/services.json`
2. Find the appropriate category in `services.categories`
3. Add new service object to `services` array:
   ```json
   {
     "id": 25,
     "name": "New Service Name",
     "slug": "new-service-slug",
     "pricing": { ... },
     "features": { ... },
     ...
   }
   ```
4. Update `meta.totalServices` count
5. Save file

Next.js will automatically regenerate pages on next build!

### Updating Pricing
1. Open `/data/services.json`
2. Navigate to service → `pricing` section
3. Update prices for any tier
4. Save file

**All pages using that pricing will automatically reflect the change.**

### Adding Testimonials
1. Open `/data/testimonials.json`
2. Add to appropriate section (homepage, testimonialsByService, etc.)
3. Save file

### Adding FAQ
1. Open `/data/faqs.json`
2. Add to appropriate category (general, software, hosting, etc.)
3. Save file

---

## 💡 Best Practices

1. **Keep data normalized** - Don't duplicate information across files
2. **Use consistent slug format** - All slugs should be lowercase with hyphens
3. **Include metadata** - Always include `lastUpdated` and `version` in JSON files
4. **Validate before saving** - Use a JSON validator before committing changes
5. **Document changes** - Keep a changelog of major data updates

---

## 🚀 Next Steps

1. **Build Homepage Components:**
   - Hero section
   - Service category cards
   - Featured services carousel
   - Testimonials section

2. **Build Service Pages:**
   - Dynamic routing for categories
   - Dynamic routing for individual services
   - Pricing tier displays
   - Feature comparisons

3. **Build Pricing Hub:**
   - Master pricing page with filters
   - Service comparison tool

4. **Build Supporting Pages:**
   - Case studies gallery
   - FAQ accordion
   - About page (using testimonials + trust indicators)

---

**File Created:** `2026-06-04`
**Data Structure Version:** 1.0.0
**Total JSON Data:** ~5,000 lines

