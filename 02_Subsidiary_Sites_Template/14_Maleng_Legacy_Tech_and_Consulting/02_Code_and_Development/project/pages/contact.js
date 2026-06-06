import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call - replace with actual form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: 'tech@malenglegacy.co.za',
      action: 'mailto:tech@malenglegacy.co.za',
      color: 'from-blue-500/20 to-blue-600/20',
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: '+27 73 884 7449',
      action: 'tel:+27738847449',
      color: 'from-green-500/20 to-green-600/20',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      details: 'Gauteng, South Africa',
      action: null,
      color: 'from-red-500/20 to-red-600/20',
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      details: 'Mon-Fri: 8am - 6pm SAST',
      action: null,
      color: 'from-purple-500/20 to-purple-600/20',
    },
  ];

  const serviceOptions = [
    'Select a service',
    'Software & Digital Solutions',
    'Managed Hosting & Infrastructure',
    'Consulting Services',
    'Connectivity Services',
    'Security & Surveillance',
    'Design & Creative Services',
    'Other / General Inquiry',
  ];

  return (
    <>
      <Head>
        <title>Contact Us | Maleng Legacy Tech & Consulting</title>
        <meta
          name="description"
          content="Get in touch with our enterprise technology experts. Free consultation, 24/7 support, and tailored solutions for your business."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-highlight rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
                <span className="text-accent font-bold text-sm">GET IN TOUCH</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Let's Talk About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-accent">
                  Your Project
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to transform your business? Our experts are here to help. Free consultation available.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods Grid */}
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
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-xl bg-gradient-to-br ${method.color} border border-white/10 hover:border-highlight/30 transition-all`}
                  >
                    <Icon className="w-10 h-10 text-highlight mb-4" />
                    <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                    <p className="text-gray-300 mb-3">{method.details}</p>
                    {method.action && (
                      <Link
                        href={method.action}
                        className="text-sm text-highlight hover:text-accent transition"
                      >
                        Contact Now →
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 md:py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-soft to-surface border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

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
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-highlight transition text-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-highlight transition text-white"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-highlight transition text-white"
                          placeholder="+27 XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-highlight transition text-white"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-highlight transition text-white"
                      >
                        {serviceOptions.map((option, i) => (
                          <option key={i} value={option} className="bg-primary">
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-highlight transition text-white resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-highlight/50 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </form>
                )}
              </motion.div>

              {/* Info & Social */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Office Info */}
                <div className="bg-gradient-to-br from-soft to-surface border border-white/10 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Office Location</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <FaMapMarkerAlt className="w-5 h-5 text-highlight mt-1" />
                      <div>
                        <p className="font-semibold">Gauteng, South Africa</p>
                        <p className="text-gray-400 text-sm">Sandton, Johannesburg</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <FaClock className="w-5 h-5 text-highlight mt-1" />
                      <div>
                        <p className="font-semibold">Business Hours</p>
                        <p className="text-gray-400 text-sm">Monday - Friday: 8:00 AM - 6:00 PM SAST</p>
                        <p className="text-gray-400 text-sm">24/7 Support available for Enterprise clients</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-soft to-surface border border-white/10 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/company/maleng-legacy-group"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-highlight/20 hover:border-highlight border border-white/20 transition-all"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com/malenglegacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-highlight/20 hover:border-highlight border border-white/20 transition-all"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com/malenglegacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-highlight/20 hover:border-highlight border border-white/20 transition-all"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="bg-gradient-to-br from-soft to-surface border border-white/10 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-3">🏆</div>
                  <p className="font-semibold">ISO 27001 Certified</p>
                  <p className="text-sm text-gray-400">SOC 2 Type II • GDPR Ready • HIPAA Compliant</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-soft">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: 'How quickly can you respond to my inquiry?',
                  a: 'We typically respond within 2-4 business hours during business days. For urgent inquiries, please call us directly.',
                },
                {
                  q: 'Do you offer free consultations?',
                  a: 'Yes, we offer a free 30-minute consultation to understand your needs and recommend the right solutions.',
                },
                {
                  q: 'What is your typical project timeline?',
                  a: 'Project timelines vary by scope. Simple websites: 2-4 weeks. Custom software: 4-16 weeks. Contact us for a detailed estimate.',
                },
                {
                  q: 'Can you help with an existing project?',
                  a: 'Absolutely. We provide project rescue, optimization, and ongoing support for existing systems.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-highlight/30 transition-all"
                >
                  <h3 className="text-lg font-bold text-white mb-2">Q: {faq.q}</h3>
                  <p className="text-gray-400">A: {faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-b2b-primary via-b2b-secondary to-b2b-primary">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need immediate assistance?</h2>
              <p className="text-lg text-white/80 mb-6">Call our 24/7 support line for urgent inquiries</p>
              <Link
                href="tel:+27738847449"
                className="inline-block px-8 py-4 bg-white text-b2b-primary font-bold rounded-lg hover:shadow-2xl transition-all text-xl"
              >
                +27 73 884 7449
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}