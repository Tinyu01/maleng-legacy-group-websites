import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ParallaxHero from '../components/ParallaxHero';
import ParallaxSection from '../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaChartPie, FaHandshake, FaTrophy, FaPlay } from 'react-icons/fa';

export default function Capital() {
  const stats = [
    { value: "R450M+", label: "Capital Deployed", suffix: "" },
    { value: "18", label: "Portfolio Companies", suffix: "" },
    { value: "35%", label: "Avg Annual Returns", suffix: "" },
    { value: "8", label: "Strategic Acquisitions", suffix: "" }
  ];

  const whyChooseUs = [
    {
      icon: <FaChartPie className="text-4xl text-accent" />,
      title: "Strategic Investment Focus",
      description: "Targeting high-growth sectors in Limpopo with proven management teams and scalable business models."
    },
    {
      icon: <FaHandshake className="text-4xl text-accent" />,
      title: "Active Partnership Approach",
      description: "More than capital – we provide operational expertise, networks, and strategic guidance to portfolio companies."
    },
    {
      icon: <FaTrophy className="text-4xl text-accent" />,
      title: "Proven Track Record",
      description: "35% average annual returns across our portfolio with successful exits generating 3.2x average multiples."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-accent" />,
      title: "B-BBEE Transformation",
      description: "Level 1 B-BBEE contributor supporting transformation objectives while delivering superior returns."
    }
  ];

  const services = [
    {
      title: "Private Equity Investments",
      description: "Minority and majority equity stakes in established businesses seeking growth capital and strategic support.",
      features: ["R10M - R100M ticket size", "3-7 year investment horizon", "Board representation", "Operational value-add"]
    },
    {
      title: "Strategic Acquisitions",
      description: "Identifying and acquiring businesses that complement our existing portfolio and create synergies.",
      features: ["Vertical integration plays", "Geographic expansion", "Technology adoption", "Management continuity"]
    },
    {
      title: "Venture Capital",
      description: "Early-stage investment in innovative Limpopo-based startups with scalable technology and business models.",
      features: ["R2M - R15M initial investment", "Follow-on funding capacity", "Mentorship programmes", "Market access support"]
    },
    {
      title: "Property Investment",
      description: "Strategic property acquisitions and developments generating stable rental income and capital appreciation.",
      features: ["Commercial properties", "Residential developments", "Industrial facilities", "Land banking"]
    }
  ];

  const portfolio = [
    {
      title: "Maleng Legacy Tech Solutions",
      category: "Technology",
      description: "Initial R25M investment in 2021 to scale software development and system integration capabilities.",
      stats: "2.8x return | 45% CAGR"
    },
    {
      title: "Regional Logistics Network",
      category: "Logistics",
      description: "Acquired 60% stake providing fleet, warehousing, and last-mile delivery across Limpopo.",
      stats: "R35M investment | R8M annual distributions"
    },
    {
      title: "Renewable Energy Portfolio",
      category: "Energy",
      description: "Series A funding for solar installation company now operating 10MW+ across commercial clients.",
      stats: "R18M deployed | Preparing Series B"
    }
  ];

  const testimonials = [
    {
      name: "Limpopo Agri Innovations",
      role: "CEO & Co-Founder",
      content: "Maleng Legacy Capital's investment and strategic support helped us scale from 3 to 45 employees. Their networks opened doors we couldn't access alone.",
      rating: 5
    },
    {
      name: "Regional Manufacturing Ltd",
      role: "Managing Director",
      content: "Beyond the capital injection, their operational expertise transformed our supply chain efficiency by 40%. True value-add partners.",
      rating: 5
    },
    {
      name: "Institutional Fund Manager",
      role: "Investment Committee",
      content: "We co-invest with Maleng Legacy Capital because of their deep local market knowledge and disciplined investment approach. Consistent outperformance.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Maleng Legacy Capital & Investments | Private Equity & Venture Capital</title>
        <meta name="description" content="Strategic investment firm deploying private equity, venture capital, and acquisition capital across high-growth Limpopo businesses." />
      </Head>

      <Navigation isSubsidiary={true} subsidiaryName="Capital & Investment" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-gray-900 to-amber-800 opacity-85"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920")',
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
              <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
                <span className="text-amber-500 font-bold text-sm">💰 INVESTMENT & FINANCE</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maleng Legacy <span className="gradient-text">Capital & Investment</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Strategic Wealth Management & Investment Solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Start Investing
                </Link>
                <a href="#services" className="btn-secondary">
                  Investment Options
                </a>
              </div>
            </motion.div>
          </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-r from-amber-900 to-amber-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-amber-300 mb-2">{stat.value}</div>
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
            <h2 className="text-4xl font-bold mb-4 text-amber-500">Why Partner With Maleng Legacy Capital</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic capital combined with operational expertise to accelerate growth and create sustainable value
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
      <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80">
        <div className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-amber-400">Our Investment Strategies</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Flexible capital solutions from early-stage venture to mature private equity
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
                  <h3 className="text-2xl font-bold mb-4 text-amber-400">{service.title}</h3>
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
            <h2 className="text-4xl font-bold mb-4 text-amber-500">Portfolio Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic investments delivering exceptional returns and transformative impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((investment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-accent font-semibold mb-2">{investment.category}</div>
                <h3 className="text-xl font-bold mb-3">{investment.title}</h3>
                <p className="text-gray-600 mb-4">{investment.description}</p>
                <p className="text-sm text-gray-500 border-t pt-4">{investment.stats}</p>
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
            <h2 className="text-4xl font-bold mb-4 text-amber-500">Portfolio Company Feedback</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by entrepreneurs and institutional investors across Limpopo
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
                    <span key={i} className="text-amber-500 text-xl">★</span>
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
              <h2 className="text-4xl font-bold mb-4 text-amber-500">Our Investment Approach</h2>
              <p className="text-xl text-gray-300">
                Learn how we identify, evaluate, and support high-potential investment opportunities
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
            <h2 className="text-4xl font-bold mb-6 text-amber-500">Seeking Investment or Partnership?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Submit your investment proposal or schedule a confidential discussion with our investment team
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:+27152911087" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Call: 015 291 1087
              </a>
              <a href="mailto:investments@malenglegacy.co.za" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-all">
                Email: investments@malenglegacy.co.za
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

