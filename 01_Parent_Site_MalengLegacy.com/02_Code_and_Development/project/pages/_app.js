import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined') {
      const gaId = process.env.NEXT_PUBLIC_GA_ID;
      if (gaId) {
        // GA will be auto-tracked via @next/third-parties
      }
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
