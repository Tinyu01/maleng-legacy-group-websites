import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    const contactMethods = [
        { icon: FaEnvelope, title: 'Email Us', details: 'tech@malenglegacy.co.za', action: 'mailto:tech@malenglegacy.co.za', color: 'from-blue-500/20 to-blue-600/20' },
        { icon: FaPhone, title: 'Call Us', details: '+27 73 884 7449', action: 'tel:+27738847449', color: 'from-green-500/20 to-green-600/20' },
        { icon: FaMapMarkerAlt, title: 'Visit Us', details: 'Gauteng, South Africa', action: null, color: 'from-red-500/20 to-red-600/20' },
        { icon: FaClock, title: 'Business Hours', details: 'Mon-Fri: 8am - 6pm SAST', action: null, color: 'from-purple-500/20 to-purple-600/20' },
    ];

    const serviceOptions = ['Select a service', 'Software & Digital Solutions', 'Managed Hosting & Infrastructure', 'Consulting Services', 'Connectivity Services', 'Security & Surveillance', 'Design & Creative Services', 'Other / General Inquiry'];

    return (
        <>
            <Head>
                <title>Contact Us | Maleng Legacy Tech & Consulting</title>
                <meta name="description" content="Get in touch with our enterprise technology experts. Free consultation, 24/7 support, and tailored solutions." />
            </Head>

            <div className="min-h-screen bg-primary text-white">
                <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

                {/* Unified Page Header */}
                <PageHeader
                    badge="GET IN TOUCH"
                    title="Let's Talk About"
                    highlight="Your Project"
                    description="Ready to transform your business? Our experts are here to help. Free consultation available."
                    breadcrumb={[{ label: 'Contact', href: '#' }]}
                    bg="contact"
                />

                {/* Rest of your contact page content remains the same */}
                {/* Contact Methods Grid, Form, etc. - keeping your existing code */}

                <section className="py-8 px-6">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className={`p-6 rounded-xl bg-gradient-to-br ${method.color} border border-white/10 hover:border-highlight/30 transition-all`}
                                    >
                                        <Icon className="w-10 h-10 text-highlight mb-4" />
                                        <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                                        <p className="text-gray-300 mb-3">{method.details}</p>
                                        {method.action && (
                                            <Link href={method.action} className="text-sm text-highlight hover:text-accent transition">
                                                Contact Now →
                                            </Link>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Contact Form Section - keeping your existing form code */}
                <section className="py-16 px-6">
                    <div className="mx-auto max-w-4xl">
                        <div className="bg-gradient-to-br from-soft to-surface border border-white/10 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold mb-6 text-center">Send us a message</h2>
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Full Name *</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-highlight" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Email Address *</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-highlight" />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Phone Number</label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Company</label>
                                            <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Service Interested In</label>
                                        <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg">
                                            {serviceOptions.map((option, i) => (
                                                <option key={i} value={option} className="bg-primary">{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Message *</label>
                                        <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg resize-none" />
                                    </div>
                                    <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg disabled:opacity-50">
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}