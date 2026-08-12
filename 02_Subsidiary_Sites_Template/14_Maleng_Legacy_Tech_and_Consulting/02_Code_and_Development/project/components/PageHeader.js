import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Breadcrumb from './Breadcrumb';
import ImageBackground from './ImageBackground';
import ServiceBackground from './ServiceBackground';
import { FaArrowRight } from 'react-icons/fa';

export default function PageHeader({ 
  title, highlight, description, badge,
  breadcrumb = [], cta, ctaSecondary,
  bg = 'default', isService = false 
}) {
  const router = useRouter();
  const breadcrumbSchema = breadcrumb.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://tech.malenglegacy.co.za"
          },
          ...breadcrumb
            .map((item, index) => {
              const isLastItem = index === breadcrumb.length - 1;
              const resolvedHref = item.href && item.href !== '#'
                ? item.href
                : isLastItem
                  ? router.asPath.split('?')[0]
                  : '';

              if (!resolvedHref) {
                return null;
              }

              const itemUrl = resolvedHref.startsWith('http')
                ? resolvedHref
                : `https://tech.malenglegacy.co.za${resolvedHref.startsWith('/') ? resolvedHref : `/${resolvedHref}`}`;

              return {
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                "item": itemUrl
              };
            })
            .filter(Boolean)
        ]
      }
    : null;

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 px-6 overflow-hidden">
      {isService ? <ServiceBackground category={{ id: bg }} /> : <ImageBackground page={bg} />}

      <div className="mx-auto max-w-6xl relative z-10">
        {breadcrumb.length > 0 && <Breadcrumb items={breadcrumb} />}

        {breadcrumbSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {badge && (
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <span className="text-accent font-bold text-sm tracking-wider">{badge}</span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {title}{' '}
            {highlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-accent">
                {highlight}
              </span>
            )}
          </h1>

          {description && (
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {(cta || ctaSecondary) && (
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {cta && (
                <Link
                  href={cta.link}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-highlight to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {cta.text}
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.link}
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-highlight hover:bg-white/10 transition-all duration-300"
                >
                  {ctaSecondary.text}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}