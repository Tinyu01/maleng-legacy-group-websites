import React from 'react';
import Head from 'next/head';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export default function Whitepaper() {
  return (
    <>
      <Head>
        <title>Whitepaper</title>
      </Head>
      <Navigation />
      <div className="min-h-screen bg-primary">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-white">Whitepaper</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}