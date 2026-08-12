import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ParallaxHero from '../../components/ParallaxHero';
import ParallaxSection from '../../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaTruck, FaWarehouse, FaMapMarkedAlt, FaPlay } from 'react-icons/fa';

export default function Logistics() {
  const stats = [
    { value: "120+", label: "Fleet Vehicles", suffix: "" },
    { value: "15K+", label: "Tons Moved Monthly", suffix: "" },
    { value: "99.2%", label: "On-Time Delivery", suffix: "" },
    { value: "8,500m²", label: "Warehouse Space", suffix: "" }
  ];

  const whyChooseUs = [
    {
      icon: <FaTruck className="text-4xl text-accent" />,
      title: "Modern Fleet",
      description: "GPS-tracked vehicles from 1-ton bakkies to 34-ton interlinks, all under 5 years old with full maintenance records."
    },
    {
      icon: <FaWarehouse className="text-4xl text-accent" />,
      title: "Secure Warehousing",
      description: "8,500 sqm of CCTV-monitored storage with racking systems, temperature control, and 24/7 security."
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-accent" />,
      title: "Regional Network",
      description: "Daily routes covering Polokwane, Tzaneen, Mokopane, Bela-Bela, and inter-provincial to Gauteng and Mpumalanga."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-accent" />,
      title: "Real-Time Tracking",
      description: "Live GPS tracking, proof-of-delivery photos, and automated SMS updates for complete shipment visibility."
    }
  ];

  const services = [
    {
      title: "General Freight Transport",
      description: "Reliable road freight services for palletized, loose, and specialized cargo across Limpopo and nationwide.",
      features: ["1-ton to 34-ton capacity", "Daily Gauteng routes", "Temperature-controlled options", "Dangerous goods certified"]
    },
    {
      title: "Warehousing & Distribution",
      description: "Secure storage with pick-and-pack, cross-docking, and last-mile delivery to optimize your supply chain.",
      features: ["8,500 sqm facility", "Racking & shelving", "Inventory management", "Order fulfillment"]
    },
    {
      title: "Fleet Management",
      description: "Full fleet leasing and management services including vehicles, maintenance, tracking, and driver provision.",
      features: ["Contract hire", "Maintenance planning", "Fuel management", "Driver training"]
    },
    {
      title: "Project Logistics",
      description: "Specialized logistics for construction, mining, and industrial projects requiring heavy haulage and site coordination.",
      features: ["Abnormal load permits", "Crane & rigging services", "Site delivery coordination", "Equipment transport"]
    }
  ];

  const caseStudies = [
    {
      title: "Retail Distribution Network",
      category: "Retail",
      description: "Managing daily deliveries to 35 retail stores across Limpopo with 99.5% on-time performance.",
      stats: "450 deliveries/month | Zero damage claims"
    },
    {
      title: "Mining Equipment Transport",
      category: "Mining",
      description: "Specialized heavy haulage moving mining equipment valued at R120M+ across Northern provinces.",
      stats: "45-ton loads | 100% safety record"
    },
    {
      title: "FMCG Warehousing & Fulfillment",
      category: "Warehousing",
      description: "3PL solution for national FMCG brand managing 2,500 SKUs and 1,200+ orders monthly.",
      stats: "99.8% picking accuracy | Same-day dispatch"
    }
  ];

  const testimonials = [
    {
      name: "Limpopo Retail Chain",
      role: "Supply Chain Manager",
      content: "Switched our entire logistics to Maleng Legacy two years ago. Their reliability and real-time tracking have transformed our operations. Not a single missed delivery.",
      rating: 5
    },
    {
      name: "Construction Supplies Ltd",
      role: "Operations Director",
      content: "Their warehousing and distribution service is exceptional. We've reduced our logistics costs by 30% while improving delivery times.",
      rating: 5
    },
    {
      name: "Manufacturing Company",
      role: "Logistics Coordinator",
      content: "The GPS tracking and automated updates give us complete visibility. Their drivers are professional and the fleet is always well-maintained.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Maleng Legacy Logistics & Transport | Fleet, Warehousing & Distribution</title>
        <meta name="description" content="Professional logistics services including freight transport, warehousing, fleet management, and project logistics across Limpopo and South Africa." />
        <meta name="keywords" content="Maleng Legacy Logistics, transport South Africa, freight transport, warehousing, fleet management, distribution logistics" />
      </Head>

      <Navigation isSubsidiary={true} subsidiaryName="Logistics & Transport" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900 via-gray-900 to-yellow-800 opacity-85"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920")',
                backgroundAttachment: 'fixed'
              }}
            />
          </div>
          <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
                <span className="text-yellow-500 font-bold text-sm">🚚 TRANSPORT & LOGISTICS</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maleng Legacy <span className="gradient-text">Logistics & Transport</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Reliable Transportation Solutions Across Southern Africa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Get Quote
                </Link>
                <a href="#services" className="btn-secondary">
                  Our Fleet
                </a>
              </div>
            </motion.div>
          </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-r from-yellow-900 to-yellow-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-yellow-300 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-yellow-500">Why Choose Maleng Legacy Logistics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering reliable, cost-effective logistics solutions with modern fleet and technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80">
        <div className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-yellow-400">Our Logistics Solutions</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                End-to-end supply chain management from warehousing to final-mile delivery
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">{service.title}</h3>
                  <p className="text-gray-200 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-200">
                        <FaCheckCircle className="text-accent mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-yellow-500">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted logistics partner for retail, mining, manufacturing, and construction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-accent font-semibold mb-2">{study.category}</div>
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <p className="text-sm text-gray-500 border-t pt-4">{study.stats}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-yellow-500">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering logistics excellence across Limpopo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-yellow-500">Our Logistics Network in Action</h2>
              <p className="text-xl text-gray-300">
                See how our fleet, warehousing, and distribution network delivers results
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/40 transition-all">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-accent rounded-full flex items-center justify-center"
                >
                  <FaPlay className="text-white text-2xl ml-1" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-yellow-500">Optimize Your Supply Chain</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Request a logistics audit and customized quote for your transport and warehousing needs
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:+27152911087" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Call: 015 291 1087
              </a>
              <a href="mailto:logistics@malenglegacy.co.za" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-all">
                Email: logistics@malenglegacy.co.za
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      </main>

      <Footer />
    </>
  );
}


