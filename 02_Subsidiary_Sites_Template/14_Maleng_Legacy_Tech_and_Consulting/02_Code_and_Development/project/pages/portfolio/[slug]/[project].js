import portfolioData from '../../../data/portfolio.json';
import services from '../../../data/services.json';
import { getPortfolioCategorySlug } from '../../../data/portfolioServiceCategories';
import PortfolioDetail from '../[slug]';

export async function getStaticPaths() {
  return {
    paths: (portfolioData.projects || []).map((project) => ({
      params: {
        slug: getPortfolioCategorySlug(project),
        project: project.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = (portfolioData.projects || []).find((item) => item.slug === params.project);
  const serviceCategory = (services.categories || []).find((category) => category.slug === params.slug);

  if (!project || !serviceCategory || getPortfolioCategorySlug(project) !== serviceCategory.slug) {
    return { notFound: true };
  }

  const category = (portfolioData.categories || []).find((item) => item.id === project.category) || null;

  return {
    props: { project, category, serviceCategory },
  };
}

export default PortfolioDetail;