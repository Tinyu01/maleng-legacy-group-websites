import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ParallaxHero from '../components/ParallaxHero';
import ParallaxSection from '../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaShieldAlt, FaVideo, FaUserShield, FaPlay } from 'react-icons/fa';

export default function Security() {
  const stats = [
    { value: "500+", label: "Sites Protected", suffix: "" },
    { value: "850+", label: "Security Officers", suffix: "" },
    { value: "24/7", label: "Control Room", suffix: "" },
    { value: "99.8%", label: "Incident Prevention", suffix: "" }
  ];

  const whyChooseUs = [
    {
      icon: <FaShieldAlt className="text-4xl text-accent" />,
      title: "PSIRA Registered",
      description: "Fully accredited with Private Security Industry Regulatory Authority ensuring legal compliance and professional standards."
    },
    {
      icon: <FaUserShield className="text-4xl text-accent" />,
      title: "Trained Personnel",
      description: "All officers undergo PSIRA-accredited training plus continuous upskilling in tactical response and customer service."
    },
    {
      icon: <FaVideo className="text-4xl text-accent" />,
      title: "Technology Integration",
      description: "Advanced CCTV surveillance, access control, and real-time reporting systems integrated with armed response."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-accent" />,
      title: "24/7 Control Center",
      description: "Manned control room monitoring all sites with GPS-tracked armed response vehicles and 5-minute reaction time."
    }
  ];

  const services = [
    {
      title: "Manned Guarding",
      description: "Professional security officers providing physical access control, patrols, and deterrent presence at your premises.",
      features: ["Access control", "Perimeter patrols", "Visitor management", "Incident reporting"]
    },
    {
      title: "Armed Response & Escort",
      description: "Rapid-response armed reaction services and secure cash-in-transit escort for high-value cargo and personnel.",
      features: ["5-minute response time", "GPS-tracked vehicles", "Cash escort services", "VIP protection"]
    },
    {
      title: "CCTV & Surveillance",
      description: "High-definition camera systems with 24/7 monitoring, facial recognition, and cloud-based storage for forensic review.",
      features: ["4K camera installation", "Remote monitoring", "Motion detection alerts", "30-day cloud storage"]
    },
    {
      title: "Event Security",
      description: "Specialized crowd control and event security services for conferences, concerts, sporting events, and private functions.",
      features: ["Crowd management", "VIP protection", "Bag screening", "Emergency evacuation planning"]
    }
  ];

  const caseStudies = [
    {
      title: "Polokwane Shopping Mall - 24/7 Security",
      category: "Commercial",
      description: "Comprehensive security solution protecting 12,000 sqm retail complex with 45 stores and 300+ parking bays.",
      stats: "18 guards | CCTV network | Zero incidents in 18 months"
    },
    {
      title: "Mining Operations Security",
      category: "Industrial",
      description: "Securing 500-hectare mining site with perimeter surveillance, access control, and armed patrols preventing theft.",
      stats: "65 officers | R8M equipment protected annually"
    },
    {
      title: "Residential Estate Security",
      category: "Residential",
      description: "Gated community protection for 240 homes with biometric access, patrols, and integrated alarm response.",
      stats: "12 guards | 99.9% resident satisfaction"
    }
  ];

  const testimonials = [
    {
      name: "Limpopo Retail Group",
      role: "Operations Manager",
      content: "Switched to Maleng Legacy Security after multiple theft incidents with our previous provider. Not a single incident in 20 months. Professional, reliable, proactive.",
      rating: 5
    },
    {
      name: "Industrial Park Management",
      role: "Facility Director",
      content: "Their control room monitoring and rapid response have been game-changers. Armed response arrives within 5 minutes every single time.",
      rating: 5
    },
    {
      name: "Residential Estate HOA",
      role: "Chairperson",
      content: "Residents feel safe for the first time in years. The guards are friendly, professional, and vigilant. Excellent value for money.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Maleng Legacy Security Services | PSIRA Registered Armed Response & Guarding</title>
        <meta name="description" content="Professional security services including manned guarding, armed response, CCTV surveillance, and event security across Limpopo." />
      </Head>

      <Navigation isSubsidiary={true} subsidiaryName="Security Services" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-gray-900 to-red-800 opacity-85"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920")',
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
              <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <span className="text-red-500 font-bold text-sm">🛡️ SECURITY SERVICES</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maleng Legacy <span className="gradient-text">Security & Protection</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Professional Security Solutions for Total Peace of Mind
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Request Security
                </Link>
                <a href="#services" className="btn-secondary">
                  Our Services
                </a>
              </div>
            </motion.div>
          </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-r from-red-900 to-red-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-red-300 mb-2">{stat.value}</div>
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
            <h2 className="text-4xl font-bold mb-4 text-red-500">Why Choose Maleng Legacy Security</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining trained personnel with advanced technology to deliver proactive, reliable security solutions
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
      <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80">
        <div className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-red-400">Our Security Solutions</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Comprehensive security services protecting people, property, and assets
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
                  <h3 className="text-2xl font-bold mb-4 text-red-400">{service.title}</h3>
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
            <h2 className="text-4xl font-bold mb-4 text-red-500">Security Deployments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protecting commercial, industrial, and residential clients across Limpopo
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
            <h2 className="text-4xl font-bold mb-4 text-red-500">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses and communities across Limpopo
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
                    <span key={i} className="text-red-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.content}&quot;</p>
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
              <h2 className="text-4xl font-bold mb-4 text-red-500">Security in Action</h2>
              <p className="text-xl text-gray-300">
                See how our integrated security solutions protect what matters most
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
            <h2 className="text-4xl font-bold mb-6 text-red-500">Secure Your Property Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Request a free security assessment and customized protection plan
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:+27152911087" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Emergency: 015 291 1087
              </a>
              <a href="mailto:security@malenglegacy.co.za" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-all">
                Email: security@malenglegacy.co.za
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


