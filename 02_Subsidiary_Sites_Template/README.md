# Subsidiary Sites Template (Standalone Model)

## Purpose
This folder contains **16 standalone subsidiary website templates**.
Each subsidiary has the same structure pattern as the parent site.

## What Changed
- Old flat structure (`pages/subsidiaries/*.js`) is archived.
- New structure gives each subsidiary its own independent site package.
- Every subsidiary has its own `02_Code_and_Development/project`.

## Current Layout

```text
02_Subsidiary_Sites_Template/
├── 01_Maleng_Legacy_Agri_and_Farming/
├── 02_Maleng_Legacy_Capital_and_Investment/
├── ...
├── 16_Maleng_Legacy_Vault_Assets/
└── 99_Legacy_Flat_Templates/
```

## Run Any Subsidiary Locally

```bash
cd [Subsidiary Folder]/02_Code_and_Development/project
npm install
npm run dev
```

## Shared Pattern in Each Subsidiary
- `00_Strategy_and_Planning`
- `01_Design_and_Mockups`
- `02_Code_and_Development/project`
- `03_Content_and_Copy`
- `04_Images_and_Media`
- `05_Live_Site`
- `06_SEO_and_Analytics`

## Legacy Reference
Archived old templates are here:

```text
99_Legacy_Flat_Templates/
```

Do not build new work from the legacy folder unless you are intentionally porting old content.

---

**Last Updated:** February 23, 2026
**Status:** Standalone structure active
