import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ParallaxHero from '../components/ParallaxHero';
import ParallaxSection from '../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaSolarPanel, FaLeaf, FaBolt, FaPlay } from 'react-icons/fa';

export default function Energy() {
  const stats = [
    { value: "10MW+", label: "Solar Installed", suffix: "" },
    { value: "450+", label: "Systems Deployed", suffix: "" },
    { value: "R120M+", label: "Client Savings", suffix: "" },
    { value: "25 Yrs", label: "System Warranty", suffix: "" }
  ];

  const whyChooseUs = [
    {
      icon: <FaSolarPanel className="text-4xl text-accent" />,
      title: "Tier 1 Components",
      description: "Only premium solar panels, inverters, and batteries from globally recognized manufacturers with proven longevity."
    },
    {
      icon: <FaLeaf className="text-4xl text-accent" />,
      title: "Sustainability Focus",
      description: "Reducing carbon footprints while delivering guaranteed energy cost savings of 40-60% from day one."
    },
    {
      icon: <FaBolt className="text-4xl text-accent" />,
      title: "Complete Solutions",
      description: "From energy audits to installation, monitoring, and maintenance – turnkey renewable energy systems."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-accent" />,
      title: "25-Year Warranty",
      description: "Industry-leading warranties on all components plus comprehensive maintenance plans for peace of mind."
    }
  ];

  const services = [
    {
      title: "Solar PV Systems",
      description: "Grid-tied, off-grid, and hybrid solar photovoltaic installations for residential, commercial, and industrial applications.",
      features: ["Site assessment & design", "Premium panel installation", "Inverter configuration", "Net metering setup"]
    },
    {
      title: "Energy Storage Solutions",
      description: "Lithium-ion battery systems providing backup power and load-shifting capabilities to maximize solar ROI.",
      features: ["Battery sizing analysis", "Hybrid inverter integration", "Backup power automation", "Remote monitoring"]
    },
    {
      title: "Energy Audits & Consulting",
      description: "Comprehensive energy usage analysis identifying savings opportunities and optimal renewable energy strategies.",
      features: ["Load profiling", "Tariff optimization", "ROI projections", "Carbon footprint analysis"]
    },
    {
      title: "Commercial Solar Projects",
      description: "Large-scale solar installations for factories, warehouses, shopping centers, and office parks with PPA options.",
      features: ["Rooftop & ground-mount", "Carport solar structures", "BESS integration", "Power Purchase Agreements"]
    }
  ];

  const caseStudies = [
    {
      title: "Polokwane Manufacturing Plant - 2.5MW",
      category: "Industrial Solar",
      description: "Reduced electricity costs by R2.8M annually with rooftop solar installation and 1MWh battery storage.",
      stats: "2,500kW system | 18-month ROI"
    },
    {
      title: "Lebowakgomo Mall Solar Carport",
      category: "Commercial",
      description: "850kW solar carport providing shaded parking and offsetting 65% of mall electricity consumption.",
      stats: "850kW | R8.5M savings over 20 years"
    },
    {
      title: "Agricultural Solar Pumping",
      category: "Agriculture",
      description: "Off-grid solar water pumping system irrigating 120 hectares, eliminating diesel generator costs.",
      stats: "45kW system | R180K annual fuel savings"
    }
  ];

  const testimonials = [
    {
      name: "Limpopo Manufacturing Ltd",
      role: "Operations Director",
      content: "Our solar installation paid for itself in 16 months. Maleng Legacy Energy delivered professional service from design through commissioning.",
      rating: 5
    },
    {
      name: "Tzaneen Hotel Group",
      role: "General Manager",
      content: "Load shedding was crippling our business. Their hybrid solar solution keeps us running 24/7 while cutting electricity bills by 55%.",
      rating: 5
    },
    {
      name: "Mopani Farms",
      role: "Farm Owner",
      content: "Switched our irrigation pumps to solar. Zero downtime, zero fuel costs, and zero maintenance headaches. Exceptional ROI.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Maleng Legacy Energy Solutions | Solar Power & Renewable Energy</title>
        <meta name="description" content="Leading renewable energy company specializing in solar PV systems, energy storage, and energy efficiency solutions across Limpopo." />
      </Head>

      <Navigation isSubsidiary={true} subsidiaryName="Energy & Solar" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900 via-gray-900 to-yellow-800 opacity-85"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920")',
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
                <span className="text-yellow-500 font-bold text-sm">⚡ RENEWABLE ENERGY</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maleng Legacy <span className="gradient-text">Energy & Solar Solutions</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Powering the Future with Clean Energy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Get Solar Quote
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
            <h2 className="text-4xl font-bold mb-4 text-yellow-500">Why Choose Maleng Legacy Energy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering reliable, cost-effective renewable energy solutions that reduce expenses and environmental impact
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
      <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80">
        <div className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-yellow-400">Our Energy Solutions</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Comprehensive renewable energy services from consultation to long-term maintenance
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
            <h2 className="text-4xl font-bold mb-4 text-yellow-500">Recent Energy Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming businesses with clean, reliable renewable energy
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
            <h2 className="text-4xl font-bold mb-4 text-yellow-500">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Businesses and farms across Limpopo trust us for their energy needs
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
              <h2 className="text-4xl font-bold mb-4 text-yellow-500">See Solar in Action</h2>
              <p className="text-xl text-gray-300">
                Watch how we're helping businesses transition to clean, cost-effective solar power
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
            <h2 className="text-4xl font-bold mb-6 text-yellow-500">Ready to Go Solar?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a free energy audit and customized solar proposal for your home or business
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:+27152911087" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Call: 015 291 1087
              </a>
              <a href="mailto:energy@malenglegacy.co.za" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-all">
                Email: energy@malenglegacy.co.za
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

