import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ParallaxHero from '../components/ParallaxHero';
import ParallaxSection from '../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaMapMarkedAlt, FaChartLine, FaHandshake, FaPlay } from 'react-icons/fa';

export default function Property() {
  const stats = [
    { value: "50+", label: "Properties Developed", suffix: "" },
    { value: "R250M+", label: "Portfolio Value", suffix: "" },
    { value: "15+", label: "Active Projects", suffix: "" },
    { value: "95%", label: "Occupancy Rate", suffix: "" }
  ];

  const whyChooseUs = [
    {
      icon: <FaMapMarkedAlt className="text-4xl text-accent" />,
      title: "Prime Locations",
      description: "Strategic land acquisition in high-growth areas across Limpopo with strong appreciation potential."
    },
    {
      icon: <FaChartLine className="text-4xl text-accent" />,
      title: "Proven Track Record",
      description: "15+ years delivering profitable developments with average ROI exceeding industry benchmarks by 23%."
    },
    {
      icon: <FaHandshake className="text-4xl text-accent" />,
      title: "Full-Service Development",
      description: "From land sourcing to tenant placement, we manage every aspect of the property development lifecycle."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-accent" />,
      title: "Regulatory Excellence",
      description: "100% compliance track record with municipal approvals, zoning, and environmental regulations."
    }
  ];

  const services = [
    {
      title: "Land Acquisition & Feasibility",
      description: "Identifying and securing high-potential land parcels with comprehensive due diligence and market analysis.",
      features: ["Site selection", "Title deed verification", "Zoning applications", "Environmental impact studies"]
    },
    {
      title: "Residential Development",
      description: "Creating vibrant residential communities from townhouse complexes to luxury estates and affordable housing.",
      features: ["Master planning", "Infrastructure development", "Unit construction", "Marketing & sales"]
    },
    {
      title: "Commercial Development",
      description: "Building retail centers, office parks, and mixed-use developments tailored to market demand.",
      features: ["Market research", "Tenant attraction", "Build-to-suit", "Investment structuring"]
    },
    {
      title: "Property Management",
      description: "Professional management services ensuring optimal performance and value preservation of our developments.",
      features: ["Tenant relations", "Maintenance coordination", "Financial reporting", "Vacancy management"]
    }
  ];

  const portfolio = [
    {
      title: "Polokwane Central Business Hub",
      category: "Commercial",
      description: "8,500 sqm mixed-use development featuring retail, office, and residential components in the CBD.",
      stats: "R85M investment | 92% pre-let"
    },
    {
      title: "Lebowakgomo Residential Estate",
      category: "Residential",
      description: "180-unit gated community with schools, parks, and modern amenities targeting growing middle class.",
      stats: "R120M value | 165 units sold"
    },
    {
      title: "Tzaneen Retail Park",
      category: "Retail",
      description: "12,000 sqm neighborhood shopping center anchored by national tenants serving 50,000+ residents.",
      stats: "R60M development | 100% occupied"
    }
  ];

  const testimonials = [
    {
      name: "Investment Holdings Ltd",
      role: "Institutional Investor",
      content: "Maleng Legacy's property development projects consistently outperform our portfolio benchmarks. Their market insight and execution capability are exceptional.",
      rating: 5
    },
    {
      name: "Nkosi Retail Group",
      role: "Commercial Tenant",
      content: "From site selection to occupancy, they delivered our flagship store on time and on budget. Their professionalism sets the standard.",
      rating: 5
    },
    {
      name: "Dr. Mpho Ledwaba",
      role: "Residential Buyer",
      content: "Purchased a townhouse in their Lebowakgomo development. The quality, location, and value are outstanding. Highly recommended.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Maleng Legacy Property Development | Strategic Real Estate Investment</title>
        <meta name="description" content="Premier property development company specializing in residential, commercial, and mixed-use projects across Limpopo Province." />
      </Head>

      <Navigation isSubsidiary={true} subsidiaryName="Property Development" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900 via-gray-900 to-yellow-800 opacity-85"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920")',
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
                <span className="text-yellow-500 font-bold text-sm">🏘️ PROPERTY DEVELOPMENT</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maleng Legacy <span className="gradient-text">Property Development</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Transforming Land into Thriving Communities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  View Developments
                </Link>
                <a href="#portfolio" className="btn-secondary">
                  Investment Opportunities
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
            <h2 className="text-4xl font-bold mb-4 text-yellow-500">Why Invest With Maleng Legacy Property</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming prime land into profitable developments that serve communities and generate superior returns
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
      <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80">
        <div className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-yellow-400">Our Development Services</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                End-to-end property development solutions from land acquisition to asset management
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

      {/* Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-yellow-500">Featured Developments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering value through strategic property development across multiple sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-accent font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 border-t pt-4">{project.stats}</p>
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
            <h2 className="text-4xl font-bold mb-4 text-yellow-500">Partner Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by investors, tenants, and communities across Limpopo
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
              <h2 className="text-4xl font-bold mb-4 text-yellow-500">See Our Developments Come to Life</h2>
              <p className="text-xl text-gray-300">
                From vacant land to thriving communities – watch our development journey
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
            <h2 className="text-4xl font-bold mb-6 text-yellow-500">Explore Investment Opportunities</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Partner with us on our next development project or inquire about available properties
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:+27152911087" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Call: 015 291 1087
              </a>
              <a href="mailto:property@malenglegacy.co.za" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-all">
                Email: property@malenglegacy.co.za
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

