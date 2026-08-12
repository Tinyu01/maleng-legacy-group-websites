import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ParallaxHero from '../../components/ParallaxHero';
import ParallaxSection from '../../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaHardHat, FaBuilding, FaTrophy, FaPlay } from 'react-icons/fa';

export default function Construction() {
  const stats = [
    { value: "200+", label: "Projects Completed", suffix: "" },
    { value: "50K+", label: "SQM Built", suffix: "" },
    { value: "100%", label: "NHBRC Compliant", suffix: "" },
    { value: "24/7", label: "Project Support", suffix: "" }
  ];

  const whyChooseUs = [
    {
      icon: <FaCheckCircle className="text-4xl text-accent" />,
      title: "NHBRC Registered",
      description: "Fully compliant with National Home Builders Registration Council standards ensuring quality and warranty protection."
    },
    {
      icon: <FaHardHat className="text-4xl text-accent" />,
      title: "Experienced Team",
      description: "Over 15 years of construction experience with qualified engineers and project managers on every site."
    },
    {
      icon: <FaBuilding className="text-4xl text-accent" />,
      title: "Turnkey Solutions",
      description: "From design to handover, we manage every aspect of your construction project with precision and care."
    },
    {
      icon: <FaTrophy className="text-4xl text-accent" />,
      title: "Quality Guarantee",
      description: "ISO 9001 certified processes and 5-year structural warranty on all our construction work."
    }
  ];

  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes, townhouses, and residential developments with modern designs and sustainable building practices.",
      features: ["Architectural design", "Full construction", "Interior finishes", "Landscaping"]
    },
    {
      title: "Commercial Buildings",
      description: "Office parks, retail centers, warehouses, and industrial facilities built to specification and on schedule.",
      features: ["Site preparation", "Structural works", "MEP installations", "Compliance certification"]
    },
    {
      title: "Civil Infrastructure",
      description: "Roads, bridges, water systems, and municipal infrastructure projects for government and private clients.",
      features: ["Earthworks", "Paving & surfacing", "Drainage systems", "Bridge construction"]
    },
    {
      title: "Renovations & Extensions",
      description: "Upgrading and expanding existing structures with minimal disruption to operations or residents.",
      features: ["Space optimization", "Modernization", "Structural additions", "Heritage restoration"]
    }
  ];

  const caseStudies = [
    {
      title: "Polokwane Office Park Development",
      category: "Commercial",
      description: "5,000 sqm multi-tenant office complex completed 2 weeks ahead of schedule with zero defects at handover.",
      stats: "R45M project value | 8 months delivery"
    },
    {
      title: "Lebowakgomo Housing Project",
      category: "Residential",
      description: "120-unit RDP housing development delivering affordable, quality homes to the community.",
      stats: "120 homes | NHBRC Grade 5"
    },
    {
      title: "N1 North Bridge Rehabilitation",
      category: "Infrastructure",
      description: "Critical bridge strengthening and expansion project completed with zero traffic incidents.",
      stats: "2.5km roadway | R18M budget"
    }
  ];

  const testimonials = [
    {
      name: "Thabo Molefe",
      role: "Homeowner, Polokwane",
      content: "Maleng Legacy built our dream home exactly to spec. The quality of workmanship is outstanding and they were professional throughout the entire process.",
      rating: 5
    },
    {
      name: "Sarah Ndlovu",
      role: "Property Developer",
      content: "We've used them for three residential developments now. Their attention to detail and project management is unmatched in the region.",
      rating: 5
    },
    {
      name: "Limpopo Municipality",
      role: "Infrastructure Department",
      content: "Delivered our bridge rehabilitation project on time and within budget. Their civil engineering team is world-class.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Maleng Legacy Construction & Infrastructure | Building Excellence</title>
        <meta name="description" content="NHBRC-registered construction company delivering residential, commercial, and civil infrastructure projects across Limpopo." />
        <meta name="keywords" content="Maleng Legacy Construction, construction South Africa, NHBRC registered builder, civil infrastructure, residential construction, commercial construction" />
      </Head>

      <Navigation isSubsidiary={true} subsidiaryName="Construction & Infrastructure" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-gray-900 to-orange-900 opacity-85"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920")',
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
              <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
                <span className="text-orange-400 font-bold text-sm">🏗️ CONSTRUCTION & INFRASTRUCTURE</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maleng Legacy <span className="gradient-text">Construction & Infrastructure</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Building the Future of Limpopo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Request Quote
                </Link>
                <a href="#projects" className="btn-secondary">
                  View Projects
                </a>
              </div>
            </motion.div>
          </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-r from-orange-900 to-orange-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-orange-300 mb-2">{stat.value}</div>
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
            <h2 className="text-4xl font-bold mb-4 text-orange-500">Why Choose Maleng Legacy Construction</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining technical expertise with local knowledge to deliver construction projects that stand the test of time
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
      <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80">
        <div className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-orange-500">Our Construction Services</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Comprehensive construction solutions from foundation to finishing
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
                  <h3 className="text-2xl font-bold mb-4 text-orange-400">{service.title}</h3>
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
            <h2 className="text-4xl font-bold mb-4 text-orange-500">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering quality construction across residential, commercial, and infrastructure sectors
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
            <h2 className="text-4xl font-bold mb-4 text-orange-500">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by homeowners, developers, and municipalities across Limpopo
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
                    <span key={i} className="text-orange-500 text-xl">★</span>
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
              <h2 className="text-4xl font-bold mb-4 text-orange-500">See Our Work in Action</h2>
              <p className="text-xl text-gray-300">
                Watch how we deliver world-class construction projects from concept to completion
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
            <h2 className="text-4xl font-bold mb-6 text-orange-500">Ready to Start Your Construction Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our construction team for a free consultation and detailed quote
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:+27152911087" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Call: 015 291 1087
              </a>
              <a href="mailto:construction@malenglegacy.co.za" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-all">
                Email: construction@malenglegacy.co.za
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

