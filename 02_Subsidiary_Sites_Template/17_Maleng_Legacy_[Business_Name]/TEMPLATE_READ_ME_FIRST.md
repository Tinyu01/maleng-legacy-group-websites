# Future Subsidiary Template (Ready to Copy)

This `Template` folder is the official starter for any new subsidiary website.

## How to Create a New Subsidiary Site

1. Copy this entire folder: `02_Subsidiary_Sites_Template/Template`
2. Rename it using next index format, e.g.:
   - `17_Maleng_Legacy_Retail_and_Distribution`
3. Open:
   - `02_Code_and_Development/project/components/templateOverrides.js`
4. Update placeholders:
   - `displayName`
   - `clusterName`
   - `primaryPhone`
   - `primaryEmail`
5. Run locally:
   - `cd 02_Code_and_Development/project`
   - `npm install`
   - `npm run dev`
6. Add subdomain + folder mapping in:
   - `.github/workflows/main_deploy.yml` matrix include block

## Notes

- New template already includes:
  - Main-style utility header
  - Our Group clustered dropdown + mainsite link
  - Contact form section anchor (`#contact-section`)
  - About / Solutions / Leadership / Investor Relations / Careers / Insights pages
- Careers in subsidiaries is centralized and links to main domain careers page.
- Main parent website remains unchanged except contact directory updates.
