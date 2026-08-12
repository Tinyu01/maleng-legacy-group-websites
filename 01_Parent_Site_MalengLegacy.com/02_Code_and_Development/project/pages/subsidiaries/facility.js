import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ParallaxHero from '../../components/ParallaxHero';
import ParallaxSection from '../../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaBroom, FaTools, FaLeaf, FaPlay } from 'react-icons/fa';

export default function Facility() {
  const stats = [
    { value: "200+", label: "Buildings Serviced", suffix: "" },
    { value: "450+", label: "Cleaning Staff", suffix: "" },
    { value: "98.5%", label: "Client Retention", suffix: "" },
    { value: "24/7", label: "Support Available", suffix: "" }
  ];

  const whyChooseUs = [
    {
      icon: <FaBroom className="text-4xl text-accent" />,
      title: "Trained Professionals",
      description: "All staff undergo SABS-approved hygiene and safety training with continuous upskilling and supervision."
    },
    {
      icon: <FaLeaf className="text-4xl text-accent" />,
      title: "Eco-Friendly Solutions",
      description: "Green cleaning products, waste reduction programmes, and environmentally responsible practices."
    },
    {
      icon: <FaTools className="text-4xl text-accent" />,
      title: "Full Facility Maintenance",
      description: "Beyond cleaning – HVAC maintenance, plumbing, electrical, painting, and general building upkeep."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-accent" />,
      title: "Quality Assurance",
      description: "Regular inspections, client feedback systems, and performance KPIs ensuring consistent service excellence."
    }
  ];

  const services = [
    {
      title: "Commercial Cleaning",
      description: "Daily office cleaning, sanitation, and hygiene services for corporate buildings, retail spaces, and medical facilities.",
      features: ["Floor care & polishing", "Restroom sanitation", "Window cleaning", "Carpet shampooing"]
    },
    {
      title: "Industrial Cleaning",
      description: "Specialized cleaning for factories, warehouses, and production facilities including high-pressure washing and degreasing.",
      features: ["Factory floor cleaning", "Equipment degreasing", "High-pressure washing", "Waste removal"]
    },
    {
      title: "Building Maintenance",
      description: "Comprehensive facility maintenance including HVAC servicing, plumbing, electrical, painting, and minor repairs.",
      features: ["HVAC maintenance", "Electrical & plumbing", "Painting & repairs", "Pest control coordination"]
    },
    {
      title: "Hygiene & Washroom Services",
      description: "Supply and maintenance of hygiene bins, soap dispensers, air fresheners, and consumables management.",
      features: ["Feminine hygiene services", "Hand soap & sanitizers", "Air freshening systems", "Consumables supply"]
    }
  ];

  const caseStudies = [
    {
      title: "Polokwane Office Park - 12 Buildings",
      category: "Commercial",
      description: "Managing daily cleaning and maintenance for 18,000 sqm office complex with 450+ tenants.",
      stats: "35 staff | 5-year contract | 99% satisfaction"
    },
    {
      title: "Manufacturing Plant Cleaning",
      category: "Industrial",
      description: "24/7 cleaning and hygiene services for food production facility maintaining HACCP compliance.",
      stats: "18 staff | Zero compliance issues | 3-year renewal"
    },
    {
      title: "Retail Mall Facility Management",
      category: "Retail",
      description: "Total facility management including cleaning, maintenance, and landscaping for 8,500 sqm shopping center.",
      stats: "42 staff | R2.8M annual contract"
    }
  ];

  const testimonials = [
    {
      name: "Polokwane Property Management",
      role: "Facilities Manager",
      content: "Maleng Legacy Facility Management has serviced our buildings for 6 years. Reliable, professional, and their staff are well-trained. Never had a complaint.",
      rating: 5
    },
    {
      name: "Limpopo Manufacturing Ltd",
      role: "Operations Director",
      content: "Their industrial cleaning meets our strict hygiene standards. Auditors always comment on the cleanliness of our production areas.",
      rating: 5
    },
    {
      name: "Medical Center",
      role: "Practice Manager",
      content: "Critical that our facility is spotless. They've never let us down. Excellent communication and quality control.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Maleng Legacy Facility Management | Commercial Cleaning & Building Maintenance</title>
        <meta name="description" content="Professional facility management services including commercial cleaning, industrial hygiene, building maintenance, and washroom services across Limpopo." />
        <meta name="keywords" content="Maleng Legacy Facility Management, commercial cleaning, building maintenance, industrial hygiene, washroom services, facility services" />
      </Head>

      <Navigation isSubsidiary={true} subsidiaryName="Facility Management" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-gray-900 to-cyan-800 opacity-85"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920")',
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
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
                <span className="text-cyan-500 font-bold text-sm">🏢 FACILITY MANAGEMENT</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maleng Legacy <span className="gradient-text">Facility Management Services</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Comprehensive Facility Solutions for Optimal Operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Request Services
                </Link>
                <a href="#services" className="btn-secondary">
                  Our Solutions
                </a>
              </div>
            </motion.div>
          </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-r from-cyan-900 to-cyan-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">{stat.value}</div>
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
            <h2 className="text-4xl font-bold mb-4 text-cyan-500">Why Choose Maleng Legacy Facility Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering world-class facility management with trained staff and eco-friendly practices
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
      <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80">
        <div className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-cyan-400">Our Facility Services</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Comprehensive cleaning and maintenance solutions for every type of facility
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
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">{service.title}</h3>
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
            <h2 className="text-4xl font-bold mb-4 text-cyan-500">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted facility management partner across commercial, industrial, and retail sectors
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
            <h2 className="text-4xl font-bold mb-4 text-cyan-500">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering cleaning excellence across Limpopo
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
                    <span key={i} className="text-cyan-500 text-xl">★</span>
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
              <h2 className="text-4xl font-bold mb-4 text-cyan-500">See Our Standards in Action</h2>
              <p className="text-xl text-gray-300">
                Watch how our trained teams deliver spotless facilities every day
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
            <h2 className="text-4xl font-bold mb-6 text-cyan-500">Request a Facility Assessment</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a free quote for cleaning and facility management services
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:+27152911087" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Call: 015 291 1087
              </a>
              <a href="mailto:facility@malenglegacy.co.za" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-all">
                Email: facility@malenglegacy.co.za
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


