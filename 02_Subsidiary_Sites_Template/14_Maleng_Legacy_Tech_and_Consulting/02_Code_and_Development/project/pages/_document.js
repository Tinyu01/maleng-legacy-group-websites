// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const googleVerificationCode = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'PLACEHOLDER-GOOGLE-VERIFICATION-CODE';
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maleng Legacy Tech & Consulting",
    "url": "https://tech.malenglegacy.co.za",
    "logo": "https://tech.malenglegacy.co.za/logo.png",
    "description": "Enterprise technology solutions, software development, and digital transformation consulting in South Africa",
    "foundingDate": "2011",
    "areaServed": ["ZA", "SA"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Johannesburg",
      "addressCountry": "ZA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "telephone": "+27-73-884-7449",
      "email": "info@malenglegacy.co.za"
    },
    "sameAs": [
      "https://www.linkedin.com/company/maleng-legacy",
      "https://twitter.com/malenglegacy",
      "https://facebook.com/malenglegacy"
    ],
    "knowsAbout": [
      "Custom Software Development",
      "Digital Transformation",
      "Cloud Infrastructure",
      "Cybersecurity",
      "Enterprise Solutions",
      "AI & Machine Learning"
    ]
  };

  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#04132a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* SEO Optimization */}
        <meta name="description" content="Maleng Legacy Tech & Consulting - Enterprise software development, digital transformation, and technology consulting for enterprises in South Africa. 15+ years expertise." />
        <meta name="keywords" content="software development, digital transformation, enterprise solutions, cloud infrastructure, cybersecurity, consulting, Johannesburg, South Africa" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="author" content="Maleng Legacy Tech & Consulting" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="https://tech.malenglegacy.co.za" />
        <meta property="og:title" content="Enterprise Tech Solutions & Digital Transformation | Maleng Legacy Tech" />
        <meta property="og:description" content="15+ years of enterprise technology expertise. Custom software, digital transformation, cloud infrastructure, and cybersecurity solutions." />
        <meta property="og:image" content="https://tech.malenglegacy.co.za/og-image.png" />
        <meta property="og:site_name" content="Maleng Legacy Tech & Consulting" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://tech.malenglegacy.co.za" />
        <meta name="twitter:title" content="Enterprise Tech Solutions | Maleng Legacy Tech" />
        <meta name="twitter:description" content="Custom software development and digital transformation consulting" />
        <meta name="twitter:image" content="https://tech.malenglegacy.co.za/twitter-image.png" />
        <meta name="twitter:creator" content="@malenglegacy" />

        {/* Google Verification & Analytics Placeholders */}
        <meta name="google-site-verification" content={googleVerificationCode} />
        {gaId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        ) : null}

        {/* Canonical URL */}
        <link rel="canonical" href="https://tech.malenglegacy.co.za" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Maleng Legacy Tech & Consulting",
              "image": "https://tech.malenglegacy.co.za/logo.png",
              "description": "Enterprise technology consulting and software development",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Johannesburg",
                "addressRegion": "Gauteng",
                "postalCode": "2000",
                "addressCountry": "ZA"
              },
              "telephone": "+27-73-884-7449",
              "email": "info@malenglegacy.co.za",
              "url": "https://tech.malenglegacy.co.za",
              "priceRange": "R2000 - R5000000"
            })
          }}
        />

        {/* Careers/Jobs Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": "Enterprise Technology Positions",
              "description": "Join our team of 500+ enterprise clients. We're hiring talented developers, consultants, and architects.",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "Maleng Legacy Tech & Consulting",
                "sameAs": "https://tech.malenglegacy.co.za"
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "ZA",
                  "addressRegion": "Gauteng"
                }
              },
              "employmentType": "FULL_TIME",
              "applicantLocationRequirements": {
                "@type": "Country",
                "name": "ZA"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}