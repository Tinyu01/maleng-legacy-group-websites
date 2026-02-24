# Subsidiary Standalone Setup Guide

## Goal
Use this guide to create and maintain subsidiary websites as **independent standalone sites** with the same operational structure as the parent website.

---

## Standard Structure (Required)

```text
[Subsidiary Site]/
├── 00_Strategy_and_Planning/
├── 01_Design_and_Mockups/
├── 02_Code_and_Development/
│   └── project/
│       ├── components/
│       ├── pages/
│       │   ├── _app.js
│       │   └── index.js
│       ├── public/
│       ├── styles/
│       ├── package.json
│       ├── next.config.js
│       ├── postcss.config.js
│       └── tailwind.config.js
├── 03_Content_and_Copy/
├── 04_Images_and_Media/
├── 05_Live_Site/
├── 06_SEO_and_Analytics/
└── README.md
```

---

## Create a New Subsidiary Site (Recommended Process)

1. Copy any existing subsidiary folder from `02_Subsidiary_Sites_Template`.
2. Rename folder with next index prefix and business unit name.
3. Update `02_Code_and_Development/project/pages/index.js` content.
4. Update page metadata (`title`, `description`, OG tags).
5. Update contact details and service content.
6. Run local test:

```bash
cd 02_Code_and_Development/project
npm install
npm run dev
```

7. Prepare deployment from that same site’s `project` folder.

---

## Migration Source (Legacy)
If you need old flat page templates, use:

```text
99_Legacy_Flat_Templates/pages/subsidiaries/
```

When migrating from legacy files to standalone:
- Copy legacy `[name].js` into `pages/index.js`.
- Replace imports:
  - from `../../components/...`
  - to `../components/...`

---

## Quality Checks Before Marking Ready
- Site runs locally without missing imports.
- `index.js` uses local `components` path.
- Required folders `00` to `06` exist.
- `README.md` exists at subsidiary root.
- No dependency on sibling folders.

---

## Deployment Notes
Each subsidiary can be deployed separately because each has its own project package.
Use standard Next.js flow from each project folder:

```bash
npm install
npm run build
```

If exporting static hosting:
- Ensure `next.config.js` contains `output: 'export'`
- Build and publish generated output according to host requirements.

---

**Last Updated:** February 23, 2026
**Version:** 2.0
**Model:** Standalone-first subsidiary architecture
