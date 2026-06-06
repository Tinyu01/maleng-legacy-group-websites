import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  // Fix for hydration mismatches - ensures client-side only rendering for dynamic content
  useEffect(() => {
    // This runs only on client side
    const handleHydration = () => {
      document.body.classList.add('hydrated');
    };
    handleHydration();
  }, []);

  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}