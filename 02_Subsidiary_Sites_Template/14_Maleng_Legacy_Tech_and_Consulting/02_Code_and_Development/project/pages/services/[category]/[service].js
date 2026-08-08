import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import ServiceBackground from '../../../components/ServiceBackground';  
import PricingCard from '../../../components/Services/PricingCard';
import FeatureComparison from '../../../components/Services/FeatureComparison';
import TestimonialCard from '../../../components/Services/TestimonialCard';
import TrustIndicators from '../../../components/Services/TrustIndicators';
import services from '../../../data/services.json';
import { FaArrowRight, FaCheckCircle, FaClock, FaMobileAlt, FaChartLine, FaHeadset } from 'react-icons/fa';

export default function IndividualService({ category, service }) {
  const [selectedTier, setSelectedTier] = useState('professional');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!service) {
    return (
      <>
        <Head><title>Service Not Found</title></Head>
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />
        <div className="min-h-screen bg-primary flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
            <Link href="/services" className="text-highlight hover:text-accent transition">← Back to Services</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const pricingTiers = Object.entries(service.pricing || {}).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  const popularTier = 'professional';

  // Stats for the compact header
  const stats = [
    { icon: FaClock, label: 'Setup Time', value: service.setupTime || '2-4 weeks' },
    { icon: FaMobileAlt, label: 'Mobile Optimized', value: service.mobile ? 'Yes ✓' : 'N/A' },
    { icon: FaChartLine, label: 'SEO Ready', value: service.seo ? 'Yes ✓' : 'N/A' },
    { icon: FaHeadset, label: 'Support', value: '24/7 Available' },
  ];

  const isLiveTelematics = service.slug === 'live-telematics-engines';

  const liveTelematicsPlans = {
    carTrace: [
      {
        name: 'Starter Fleet Tracking',
        price: 'R175',
        cadence: '/ asset / month',
        description: 'Real-time GPS coordinates, trip playback history, and basic speed or stationary alerts.',
        idealFor: 'Small localized delivery or service vehicles.',
        features: ['Real-time GPS coordinates', 'Trip playback history', 'Basic speed and stationary alerts'],
      },
      {
        name: 'Professional Fleet Intelligence',
        price: 'R395',
        cadence: '/ asset / month',
        description: 'Advanced route analytics, precise geofencing, and driver oversight metrics.',
        idealFor: 'Regional distribution fleets and commercial haulers.',
        features: ['Advanced route analytics', 'Precise boundary geofencing', 'Driver behavior oversight metrics'],
      },
      {
        name: 'Enterprise AI Cam Tracking',
        price: 'R850',
        cadence: '/ asset / month',
        description: 'AI-enabled multi-camera telemetry, live engine dashboards, and automated incident reporting.',
        idealFor: 'High-value logistics and secure transit operations.',
        features: ['AI-enabled multi-cam video streams', 'Live engine telemetry dashboards', 'Automated incident reporting'],
      },
    ],
    smartAgri: [
      {
        name: 'Herd Starter Tracking',
        price: 'R45',
        cadence: '/ head / month',
        description: 'Active location pings, perimeter geofence maps, and automated missing-asset alerts.',
        idealFor: 'Commercial herds needing simple, reliable tracing.',
        features: ['Active location ping schedules', 'Main perimeter geofence maps', 'Missing asset automated pings'],
      },
      {
        name: 'Herd Professional Tracing',
        price: 'R120',
        cadence: '/ head / month',
        description: 'Continuous spatial tracking, grazing pattern maps, and proactive containment break alerts.',
        idealFor: 'Livestock operations that need operational visibility.',
        features: ['Continuous spatial tracking', 'Grazing pattern and velocity maps', 'Proactive containment break alerts'],
      },
      {
        name: 'Herd Enterprise Biosecurity',
        price: 'R220',
        cadence: '/ head / month',
        description: 'Biometric body-vital monitoring, estrus and health telemetry, and 24/7 SOC stock-theft alert integration.',
        idealFor: 'High-value stud animals and commercial breeding herds.',
        features: ['Biometric body vital monitoring', 'Estrus and health shift telemetry', 'Direct 24/7 SOC stock-theft alert link'],
      },
    ],
    custom: {
      name: 'Custom Enterprise Telematics',
      price: 'Request Quote',
      description: 'Hybrid fleets, unified rural and urban tracking, custom API webhooks, multi-country private APN profiles, and dedicated project management.',
      features: ['Hybrid fleets on one screen', 'Tailored API webhooks to ERP tools', 'Multi-country roaming via private APN', 'Dedicated project management'],
    },
  };

  const liveTelematicsComparison = [
    ['Live Location Tracking', '✓', '✓', '✓', '✓', '✓', '✓'],
    ['Historical Route Data', '✓', '✓', '✓', '—', '✓', '✓'],
    ['Custom Geofencing', 'Basic', 'Advanced', 'Multi-Layer', 'Static Perimeter', 'Dynamic Zones', 'Automated Corrals'],
    ['Hardware Pairing Options', 'Wired Box', 'OBD-II / CANbus', 'AI Dashcam Array', 'Smart Ear Tag', 'Solar Neck Collar', 'Biometric Sensor Tag'],
    ['Telemetry Insights', 'Speed / Idle', 'Fuel / Braking', 'AI Driver Fatigue', '—', 'Grazing Speed', 'Vitals / Temperature'],
    ['24/7 SOC Integration', 'Optional', 'Optional', '✓', '—', 'Optional', '✓'],
  ];

  if (isLiveTelematics) {
    return (
      <>
        <Head>
          <title>Live Telematics Engines | Security & Surveillance Services | Maleng Legacy Tech & Consulting</title>
          <meta
            name="description"
            content="Specialized tracking subscriptions for fleets and livestock with live coordinates, private APN telemetry, geofencing, and 24/7 SOC integration."
          />
        </Head>

        <div className="min-h-screen bg-primary text-white">
          <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

          <section className="relative pt-6 pb-12 md:pt-8 md:pb-16 px-6 overflow-hidden">
            <ServiceBackground category={category} variant="hero" />
            <div className="mx-auto max-w-6xl relative z-10">
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Services', href: '/services' },
                  { label: 'Security & Surveillance Services (Physical Operations & Telematics)', href: '/services/security-surveillance' },
                  { label: 'Live Telematics Engines', href: '#' },
                ]}
              />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-6">
                <div className="flex items-center gap-5">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-highlight/20 to-accent/20 border border-highlight/30 flex items-center justify-center"
                  >
                    <span className="text-5xl">📍</span>
                  </motion.div>
                  <div>
                    <motion.h1
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-3xl md:text-4xl lg:text-5xl font-bold"
                    >
                      Live Telematics Engines
                    </motion.h1>
                    <motion.p
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-highlight text-base md:text-lg mt-2 max-w-3xl"
                    >
                      Specialized tracking subscriptions displaying live coordinates, advanced spatial geofencing, and real-time telemetry reports. Link our software platforms seamlessly to rugged, field-deployed vehicle black boxes, heavy-duty GPS cattle collars, and smart biometric ear tags.
                    </motion.p>
                  </div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex gap-3"
                >
                  <Link href="/contact" className="px-5 py-2.5 bg-gradient-to-r from-highlight to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all text-sm">
                    Request Custom Quote
                  </Link>
                  <Link href="/contact" className="px-5 py-2.5 border border-highlight text-highlight font-semibold rounded-lg hover:bg-highlight/10 transition-all text-sm">
                    Chat with Expert
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
              >
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="text-sm text-gray-400 mb-1">Setup Time</p>
                  <p className="text-xl font-bold text-white">3-10 Days</p>
                  <p className="text-xs text-gray-500 mt-1">Hardware dependent</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="text-sm text-gray-400 mb-1">Network Layer</p>
                  <p className="text-xl font-bold text-white">Managed Private APN</p>
                  <p className="text-xs text-gray-500 mt-1">Maleng MVNO SIM compatible</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="text-sm text-gray-400 mb-1">Monitoring Availability</p>
                  <p className="text-xl font-bold text-white">24/7 SOC Integrated</p>
                  <p className="text-xs text-gray-500 mt-1">Live incident escalation</p>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-primary to-soft">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Specialized Tracking Subscription</h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                  Select the asset tier that matches your operational requirements. All subscriptions pair natively with purchased or leased telemetry hardware.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-soft via-surface to-surface p-8"
                >
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2">Vehicle Modules</p>
                      <h3 className="text-2xl font-bold">Car Trace Fleet Engine</h3>
                    </div>
                    <div className="text-4xl">🚗</div>
                  </div>
                  <p className="text-gray-300 mb-6">Our premium vehicle telematics software layers engineered for complete fleet visibility.</p>

                  <div className="grid gap-4">
                    {liveTelematicsPlans.carTrace.map((plan) => (
                      <div key={plan.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">{plan.name}</p>
                            <h4 className="text-xl font-bold text-white mb-2">{plan.price} <span className="text-base text-gray-400 font-medium">{plan.cadence}</span></h4>
                            <p className="text-sm text-gray-300 mb-3">{plan.description}</p>
                            <p className="text-xs text-gray-400">{plan.idealFor}</p>
                          </div>
                          <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-highlight to-accent text-sm font-semibold text-white">
                            Get Started
                          </Link>
                        </div>
                        <div className="mt-4 grid gap-2">
                          {plan.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="text-accent">◆</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-soft via-surface to-surface p-8"
                >
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2">Herd & Livestock Tracing</p>
                      <h3 className="text-2xl font-bold">SmartAgri Livestock Engine</h3>
                    </div>
                    <div className="text-4xl">🐄</div>
                  </div>
                  <p className="text-gray-300 mb-6">Specialized agricultural software telemetry built to secure and track your biological assets.</p>

                  <div className="grid gap-4">
                    {liveTelematicsPlans.smartAgri.map((plan) => (
                      <div key={plan.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">{plan.name}</p>
                            <h4 className="text-xl font-bold text-white mb-2">{plan.price} <span className="text-base text-gray-400 font-medium">{plan.cadence}</span></h4>
                            <p className="text-sm text-gray-300 mb-3">{plan.description}</p>
                            <p className="text-xs text-gray-400">{plan.idealFor}</p>
                          </div>
                          <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-highlight to-accent text-sm font-semibold text-white">
                            Get Started
                          </Link>
                        </div>
                        <div className="mt-4 grid gap-2">
                          {plan.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="text-accent">◆</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8 rounded-3xl border border-highlight/20 bg-gradient-to-r from-highlight/10 to-accent/10 p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2">Custom Architecture Layer</p>
                    <h3 className="text-2xl font-bold mb-3">Custom Enterprise Telematics</h3>
                    <p className="text-gray-300 max-w-3xl">Hybrid fleets (hooves and wheels unified on one screen), tailored API webhooks to internal ERP tools, multi-country roaming profiles via private APN, and dedicated project management.</p>
                  </div>
                  <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-highlight to-accent text-white font-semibold">
                    Request Quote
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  {liveTelematicsPlans.custom.features.map((feature) => (
                    <div key={feature} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-sm text-gray-300">{feature}</div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-16 md:py-20 px-6 bg-primary">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Advanced Spatial Software Combined with Rugged Field Hardware</h2>
                <p className="text-gray-400 text-lg max-w-4xl mx-auto">We solve asset vulnerability by mapping physical telemetry straight to private cloud dashboards for logistics fleets and rural livestock operations alike.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Uncompromised Field Hardware', text: 'Software layers link to shock-resistant enclosures, long-life lithium battery configurations, and solar power.' },
                  { title: 'Private Network Tunneling', text: 'Maleng MVNO SIM cards with private APN configurations keep telemetry data off the vulnerable public internet.' },
                  { title: 'Automated Threat Isolation', text: 'Real-time boundary breach notifications, tracking irregularities, and biometric distress triggers are handled instantly.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 px-6 bg-soft">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Detailed Features Breakdown</h2>
                <p className="text-gray-400 text-lg">Compare capabilities across the vehicle and livestock ecosystems.</p>
              </motion.div>

              <div className="overflow-x-auto rounded-3xl border border-white/10 bg-surface">
                <table className="min-w-full text-left">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-5 py-4 text-sm font-semibold text-gray-300">Feature</th>
                      <th className="px-5 py-4 text-sm font-semibold text-gray-300">Car Trace Starter</th>
                      <th className="px-5 py-4 text-sm font-semibold text-gray-300">Car Trace Pro</th>
                      <th className="px-5 py-4 text-sm font-semibold text-gray-300">Car Trace Enterprise</th>
                      <th className="px-5 py-4 text-sm font-semibold text-gray-300">SmartAgri Starter</th>
                      <th className="px-5 py-4 text-sm font-semibold text-gray-300">SmartAgri Pro</th>
                      <th className="px-5 py-4 text-sm font-semibold text-gray-300">SmartAgri Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {liveTelematicsComparison.map((row, index) => (
                      <tr key={row[0]} className={index % 2 === 0 ? 'bg-white/0' : 'bg-white/5'}>
                        <td className="px-5 py-4 text-sm font-medium text-white">{row[0]}</td>
                        {row.slice(1).map((value) => (
                          <td key={value} className="px-5 py-4 text-sm text-gray-300">{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 px-6 bg-primary">
            <div className="mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Frequently Asked Questions</h2>
              </motion.div>

              <div className="space-y-4">
                {[
                  {
                    q: 'Do the subscription prices include the physical tracking hardware?',
                    a: 'No. Subscription pricing covers the cloud tracking platform access, data mapping, and cellular network telemetry routing. Physical hardware assets are purchased once-off or configured under custom deployment procurement.',
                  },
                  {
                    q: 'How long do hardware batteries last in the field for livestock tracing?',
                    a: 'SmartAgri hardware is designed for rugged environments. Lightweight biometric ear tags use optimized low-power configurations extending up to 3-5 years, while heavy-duty cattle collars can use solar-assisted power for continuous field operation.',
                  },
                  {
                    q: 'Can I monitor my vehicle fleet and my livestock on the same website interface?',
                    a: 'Yes. The custom enterprise architecture tier can deploy a unified geospatial master map so assets, vehicles, and personnel can be traced under a single corporate credential.',
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-lg border border-white/10 bg-white/5 hover:border-highlight/30 transition-all"
                  >
                    <h3 className="text-base font-bold text-white mb-2">Q: {faq.q}</h3>
                    <p className="text-gray-400 text-sm">A: {faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-6 bg-gradient-to-r from-highlight/20 to-accent/20">
            <div className="mx-auto max-w-4xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to unify your fleet and livestock telemetry?</h2>
                <p className="text-gray-300 mb-6">Build a single operational view for vehicles, assets, and biological stock with private APN routing and 24/7 SOC visibility.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg transition-all">
                    Request Custom Quote
                  </Link>
                  <Link href="/contact" className="px-8 py-3 border border-highlight text-highlight font-bold rounded-lg hover:bg-highlight/10 transition-all">
                    Chat with Expert
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{service.name} | {category.name} | Maleng Legacy Tech & Consulting</title>
        <meta name="description" content={service.description} />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        {/* Hero Section with Dynamic Background */}
        <section className="relative pt-6 pb-12 md:pt-8 md:pb-16 px-6 overflow-hidden">
          {/* Dynamic Background based on category */}
          <ServiceBackground category={category} variant="hero" />
          
          <div className="mx-auto max-w-6xl relative z-10">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/services' },
                { label: category.name, href: `/services/${category.slug}` },
                { label: service.name, href: '#' }
              ]} 
            />

            {/* Service Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-6">
              <div className="flex items-center gap-5">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-highlight/20 to-accent/20 border border-highlight/30 flex items-center justify-center"
                >
                  <span className="text-5xl">{service.icon}</span>
                </motion.div>
                <div>
                  <motion.h1 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold"
                  >
                    {service.name}
                  </motion.h1>
                  <motion.p 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-highlight text-sm md:text-base"
                  >
                    {category.name}
                  </motion.p>
                </div>
              </div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-3"
              >
                <Link
                  href="/contact"
                  className="px-5 py-2.5 bg-gradient-to-r from-highlight to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all text-sm"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 border border-highlight text-highlight font-semibold rounded-lg hover:bg-highlight/10 transition-all text-sm"
                >
                  Chat with Expert
                </Link>
              </motion.div>
            </div>

            {/* Service Description */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 text-base max-w-3xl mt-6 leading-relaxed"
            >
              {service.description}
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                  <stat.icon className="w-4 h-4 text-highlight mb-1" />
                  <p className="text-lg font-bold text-highlight">{stat.value}</p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PRICING & PACKAGES - Moved to top (UX priority) */}
        <section className="py-12 md:py-16 px-6 bg-soft">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full mb-4">
                <span className="text-accent font-bold text-sm">💰 PRICING & PACKAGES</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Choose Your Perfect Plan
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Select the tier that best fits your needs. All plans include enterprise-grade features and 24/7 support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {pricingTiers.map((tier, index) => (
                <PricingCard
                  key={tier.id}
                  tier={tier.name}
                  price={tier.price !== null ? tier.price : tier.name}
                  description={tier.description}
                  features={service.features?.[tier.id] || []}
                  isPopular={tier.id === popularTier}
                  cta={tier.billingModel === 'contact' ? 'Get Quote' : 'Get Started'}
                  index={index}
                />
              ))}
            </div>

            {/* Volume Discount Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-sm text-gray-400">
                💡 Need a custom plan? <Link href="/contact" className="text-highlight hover:text-accent font-semibold">Contact our sales team</Link> for volume discounts and enterprise pricing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SERVICE OVERVIEW - Now second (UX flow) */}
        <section className="py-12 md:py-16 px-6 bg-primary">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full mb-4">
                <span className="text-accent font-bold text-sm">📋 SERVICE OVERVIEW</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                What's Included
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Everything you need to know about {service.name}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Benefits:</h3>
                  {[
                    'Enterprise-grade security and compliance',
                    'Dedicated support team available 24/7',
                    'Scalable solutions that grow with you',
                    'Regular updates and maintenance included',
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCheckCircle className="w-5 h-5 text-highlight" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Why This Service */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-soft to-surface border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Why Choose This Service?</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-highlight font-semibold text-sm mb-1">Key Differentiators</p>
                    <p className="text-gray-400 text-sm">Industry-leading expertise and proven methodologies with 15+ years experience.</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-highlight font-semibold text-sm mb-1">Expected Impact</p>
                    <p className="text-gray-400 text-sm">Measurable ROI and operational efficiency improvements within 90 days.</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-highlight font-semibold text-sm mb-1">Support Level</p>
                    <p className="text-gray-400 text-sm">24/7 expert support with dedicated account manager for Enterprise clients.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-12 md:py-16 px-6 bg-soft">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Detailed Features Breakdown
              </h2>
              <p className="text-gray-400">Compare what's included in each tier</p>
            </motion.div>

            <FeatureComparison
              categories={[
                {
                  name: 'Core Features',
                  features: service.features?.starter?.slice(0, 5).map(f => ({ name: f })) || [],
                },
                {
                  name: 'Advanced Features',
                  features: service.features?.professional?.slice(0, 5).map(f => ({ name: f })) || [],
                },
                {
                  name: 'Enterprise Features',
                  features: service.features?.enterprise?.slice(0, 5).map(f => ({ name: f })) || [],
                },
              ]}
            />
          </div>
        </section>

        {/* Use Cases */}
        {service.useCases && service.useCases.length > 0 && (
          <section className="py-12 md:py-16 px-6 bg-primary">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Perfect For</h2>
                <p className="text-gray-400">Ideal use cases for {service.name}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="w-2 h-2 rounded-full bg-highlight" />
                    <span className="text-gray-300">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials */}
        {service.testimonials && service.testimonials.length > 0 && (
          <section className="py-12 md:py-16 px-6 bg-soft">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-3">What Our Clients Say</h2>
                <p className="text-gray-400">Real results from real customers</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} index={index} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Industries */}
        {service.industries && service.industries.length > 0 && (
          <section className="py-12 md:py-16 px-6 bg-primary">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Industries We Serve</h2>
                <p className="text-gray-400">Trusted by enterprises across sectors</p>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-3">
                {service.industries.map((industry, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-gray-300 text-sm"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Trust Indicators */}
        <section className="py-12 md:py-16 px-6 bg-soft">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Why Enterprise Clients Trust Us
              </h2>
            </motion.div>
            <TrustIndicators />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 px-6 bg-primary">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-4">
              {[
                { q: `How long does ${service.name} take to implement?`, a: `Most implementations take ${service.setupTime || '2-4 weeks'} depending on your requirements.` },
                { q: `What level of support is included?`, a: `All tiers include comprehensive support. Enterprise tier includes 24/7 dedicated support.` },
                { q: `Can I upgrade or downgrade my plan?`, a: `Yes, you can upgrade or downgrade at any time with no penalty.` },
                { q: `Is there a free trial available?`, a: `Yes, we offer a 30-day free trial for most services. No credit card required.` },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-lg border border-white/10 bg-white/5 hover:border-highlight/30 transition-all"
                >
                  <h3 className="text-base font-bold text-white mb-2">Q: {faq.q}</h3>
                  <p className="text-gray-400 text-sm">A: {faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-highlight/20 to-accent/20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Get Started with {service.name}?
              </h2>
              <p className="text-gray-300 mb-6">
                Join hundreds of enterprise clients who trust us for their {service.name.toLowerCase()} needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg transition-all">
                  Start Free Trial
                </Link>
                <Link href="/contact" className="px-8 py-3 border border-highlight text-highlight font-bold rounded-lg hover:bg-highlight/10 transition-all">
                  Get Detailed Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const category = services.categories.find(cat => cat.slug === params.category);

  if (!category) {
    return { notFound: true };
  }

  const service = category.services.find(svc => svc.slug === params.service);

  if (!service) {
    return { notFound: true };
  }

  return {
    props: {
      category,
      service,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];

  services.categories.forEach(category => {
    category.services.forEach(service => {
      paths.push({
        params: {
          category: category.slug,
          service: service.slug,
        },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}