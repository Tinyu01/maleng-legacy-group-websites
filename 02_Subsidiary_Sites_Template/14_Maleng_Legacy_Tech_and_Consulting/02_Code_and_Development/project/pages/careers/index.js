import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
// ... rest of your imports and component code

export default function CareersPage() {
    // ... your existing state and functions

    return (
        <>
            <Head>
                <title>Careers | Maleng Legacy Tech & Consulting</title>
                <meta name="description" content="Join our team of experts in tech consulting, cybersecurity, and digital transformation." />
            </Head>

            <div className="min-h-screen bg-primary text-white">
                <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

                {/* Unified Page Header */}
                <PageHeader
                    badge="JOIN OUR TEAM"
                    title="Build the Future of"
                    highlight="Enterprise Tech"
                    description="We're looking for passionate technologists to help enterprises transform their businesses."
                    breadcrumb={[{ label: 'Careers', href: '#' }]}
                    bg="careers"
                    cta={{ text: 'View Open Positions', link: '#openings' }}
                />

                {/* Rest of your careers page content - Benefits, Open Positions, etc. */}
            </div>
        </>
    );
}