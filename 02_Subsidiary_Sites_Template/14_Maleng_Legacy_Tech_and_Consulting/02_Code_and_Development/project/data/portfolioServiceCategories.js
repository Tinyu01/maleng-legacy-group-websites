const portfolioServiceCategories = {
  'retailchain-website': 'software-solutions',
  'healthcare-portal': 'software-solutions',
  'financeglobal-dashboard': 'software-solutions',
  'manufacturing-mes': 'software-solutions',
  'retailtech-saas': 'software-solutions',
  'enterprise-sdwan': 'connectivity',
};

export function getPortfolioCategorySlug(project) {
  return portfolioServiceCategories[project.id] || 'software-solutions';
}

export default portfolioServiceCategories;
