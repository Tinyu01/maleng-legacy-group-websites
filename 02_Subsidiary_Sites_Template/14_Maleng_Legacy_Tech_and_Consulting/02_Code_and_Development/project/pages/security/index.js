import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
// ... rest of your imports

export default function SecurityPage() {
    return (
        <>
            <Head>
                <title>Security & Compliance | Maleng Legacy Tech & Consulting</title>
                <meta name="description" content="Enterprise-grade security, compliance certifications, and data protection." />
            </Head>

            <div className="min-h-screen bg-primary text-white">
                <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

                {/* Unified Page Header */}
                <PageHeader
                    badge="TRUST & COMPLIANCE"
                    title="Enterprise-Grade"
                    highlight="Security"
                    description="Your data is protected by industry-leading security practices, certifications, and 24/7 monitoring."
                    breadcrumb={[{ label: 'Security', href: '#' }]}
                    bg="security"
                />

                {/* Rest of your security page content */}
            </div>
        </>
    );
}