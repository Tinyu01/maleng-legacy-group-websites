# Maleng Legacy Group - Website Structure Guide

## Overview
This workspace is now organized as **standalone websites**:
- 1 standalone parent website
- 16 standalone subsidiary website templates

Each site follows the same operational structure:
- `00_Strategy_and_Planning`
- `01_Design_and_Mockups`
- `02_Code_and_Development`
- `03_Content_and_Copy`
- `04_Images_and_Media`
- `05_Live_Site`
- `06_SEO_and_Analytics`

---

## Root Structure

```text
maleng-legacy-group-websites/
├── 01_Parent_Site_MalengLegacy.com/
│   ├── 00_Strategy_and_Planning/
│   ├── 01_Design_and_Mockups/
│   ├── 02_Code_and_Development/
│   ├── 03_Content_and_Copy/
│   ├── 04_Images_and_Media/
│   ├── 05_Live_Site/
│   └── 06_SEO_and_Analytics/
│
├── 02_Subsidiary_Sites_Template/
│   ├── 01_Maleng_Legacy_Agri_and_Farming/
│   ├── 02_Maleng_Legacy_Capital_and_Investment/
│   ├── 03_Maleng_Legacy_Executive_Car_Wash/
│   ├── 04_Maleng_Legacy_Catering_and_Events/
│   ├── 05_Maleng_Legacy_Construction_and_Infrastructure/
│   ├── 06_Maleng_Legacy_Corporate_Services/
│   ├── 07_Maleng_Legacy_Energy_and_Solar/
│   ├── 08_Maleng_Legacy_Events_and_Conferencing/
│   ├── 09_Maleng_Legacy_Facility_Management/
│   ├── 10_Maleng_Legacy_Logistics_and_Transport/
│   ├── 11_Maleng_Legacy_Media_and_Signage/
│   ├── 12_Maleng_Legacy_Property_Development/
│   ├── 13_Maleng_Legacy_Security_and_Protection/
│   ├── 14_Maleng_Legacy_Tech_and_Consulting/
│   ├── 15_Maleng_Legacy_Training_and_Development/
│   ├── 16_Maleng_Legacy_Vault_Assets/
│   └── 99_Legacy_Flat_Templates/   # Archived previous flat structure
│
├── DEPLOYMENT.md
├── GITHUB_README.md
└── STRUCTURE_GUIDE.md
```

---

## Standalone Site Structure (Parent + Each Subsidiary)

Inside each site folder:

```text
[Site Folder]/
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

## Key Rule
A subsidiary must be runnable independently from its own folder:

```bash
cd 02_Code_and_Development/project
npm install
npm run dev
```

No dependency on sibling subsidiary folders.

---

## Legacy Archive
The old flat template layout was preserved for safety in:

```text
02_Subsidiary_Sites_Template/99_Legacy_Flat_Templates/
```

This archive contains the previous shared `pages/subsidiaries` structure.

---

## Naming Convention
- Folder names: prefixed with ordered index (`01_`, `02_`, ...)
- Site names: `Maleng_Legacy_[Business_Unit]`
- Code app folder: always `02_Code_and_Development/project`

---

## Status
- Parent website: standalone ✅
- 16 subsidiary templates: standalone ✅
- Legacy flat structure: archived ✅
- Documentation aligned to new model ✅

---

**Last Updated:** February 23, 2026
**Version:** 2.0
**Owner:** Maleng Legacy Group Digital Infrastructure
