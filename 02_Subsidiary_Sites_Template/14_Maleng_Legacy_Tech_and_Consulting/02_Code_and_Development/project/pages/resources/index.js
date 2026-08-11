import React from 'react';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources</title>
      </Head>
      <Navigation />
      <div className="min-h-screen bg-primary">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-white">Resources</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}