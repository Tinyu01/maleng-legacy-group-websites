import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ParallaxHero from '../../components/ParallaxHero';
import ParallaxSection from '../../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaCalendarAlt, FaMusic, FaGlassCheers, FaPlay } from 'react-icons/fa';

export default function Events() {
  const stats = [
    { value: "450+", label: "Events Delivered", suffix: "" },
    { value: "65K+", label: "Attendees Served", suffix: "" },
    { value: "99%", label: "Client Satisfaction", suffix: "" },
    { value: "24/7", label: "Event Support", suffix: "" }
  ];

  const whyChooseUs = [
    {
      icon: <FaCalendarAlt className="text-4xl text-accent" />,
      title: "End-to-End Management",
      description: "From concept to cleanup – venue sourcing, logistics, vendor coordination, staffing, and onsite execution."
    },
    {
      icon: <FaMusic className="text-4xl text-accent" />,
      title: "Full Production Capability",
      description: "AV equipment, staging, lighting, sound systems, video walls, and technical crew for professional events."
    },
    {
      icon: <FaGlassCheers className="text-4xl text-accent" />,
      title: "Integrated Services",
      description: "Leverage our catering, media, and facility management subsidiaries for seamless, cost-effective event delivery."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-accent" />,
      title: "Proven Track Record",
      description: "450+ successful events from intimate boardroom sessions to 5,000+ guest conferences and festivals."
    }
  ];

  const services = [
    {
      title: "Corporate Events",
      description: "Conferences, product launches, AGMs, team building, and awards ceremonies with professional planning and execution.",
      features: ["Conference management", "Product launches", "Team building events", "Awards galas"]
    },
    {
      title: "Weddings & Private Celebrations",
      description: "Complete wedding planning, traditional ceremonies, birthday parties, and family celebrations with personalized service.",
      features: ["Wedding coordination", "Traditional ceremonies", "Birthday celebrations", "Anniversary events"]
    },
    {
      title: "Event Production & AV",
      description: "Professional audio-visual production including staging, lighting, sound, LED screens, and live streaming capabilities.",
      features: ["Staging & rigging", "Sound systems", "LED video walls", "Live streaming"]
    },
    {
      title: "Venue Sourcing & Management",
      description: "Identifying and securing ideal venues, negotiating contracts, and managing venue relationships for seamless events.",
      features: ["Venue sourcing", "Contract negotiation", "Site visits", "Venue liaison"]
    }
  ];

  const portfolio = [
    {
      title: "Limpopo Business Summit 2025",
      category: "Conference",
      description: "3-day conference for 1,200 delegates with simultaneous translation, exhibition, gala dinner, and networking.",
      stats: "1,200 delegates | R4.2M budget | 98% satisfaction"
    },
    {
      title: "Traditional Wedding - 850 Guests",
      category: "Wedding",
      description: "Full coordination of 2-day traditional and white wedding including decor, catering, entertainment, and logistics.",
      stats: "850 guests | 2-day event | Zero issues"
    },
    {
      title: "Mining Company Anniversary Gala",
      category: "Corporate Gala",
      description: "Black-tie awards ceremony for 400 guests with live band, 4-course dinner, video production, and trophies.",
      stats: "400 guests | R850K budget | Standing ovation"
    }
  ];

  const testimonials = [
    {
      name: "Limpopo Chamber of Commerce",
      role: "CEO",
      content: "Maleng Legacy Events managed our flagship conference for 3 years running. Professionalism, attention to detail, and problem-solving are unmatched.",
      rating: 5
    },
    {
      name: "Bride & Groom",
      role: "Polokwane",
      content: "Our wedding was perfect. They handled everything – from venue to decor to entertainment. We enjoyed our day stress-free. Highly recommended!",
      rating: 5
    },
    {
      name: "Mining Corporation",
      role: "HR Director",
      content: "Our annual awards gala was flawless. The AV production was broadcast-quality and the event coordination was seamless. Worth every cent.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Maleng Legacy Event Management | Corporate & Private Event Planning</title>
        <meta name="description" content="Professional event management services for conferences, weddings, corporate functions, and private celebrations across Limpopo." />
      </Head>

      <Navigation isSubsidiary={true} subsidiaryName="Events & Conferencing" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-gray-900 to-amber-800 opacity-85"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920")',
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
                <span className="text-amber-500 font-bold text-sm">🎉 EVENT MANAGEMENT</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maleng Legacy <span className="gradient-text">Events & Conferencing</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Creating Unforgettable Experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Plan Your Event
                </Link>
                <a href="#services" className="btn-secondary">
                  View Venues
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
            <h2 className="text-4xl font-bold mb-4 text-amber-500">Why Choose Maleng Legacy Event Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering exceptional events with meticulous planning, flawless execution, and integrated group services
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
      <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80">
        <div className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-amber-400">Our Event Services</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Complete event solutions from intimate gatherings to large-scale conferences
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
            <h2 className="text-4xl font-bold mb-4 text-amber-500">Recent Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering world-class events across corporate, wedding, and gala sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-accent font-semibold mb-2">{event.category}</div>
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <p className="text-sm text-gray-500 border-t pt-4">{event.stats}</p>
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
            <h2 className="text-4xl font-bold mb-4 text-amber-500">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by corporations, couples, and organizations across Limpopo
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
              <h2 className="text-4xl font-bold mb-4 text-amber-500">Events Showcase</h2>
              <p className="text-xl text-gray-300">
                Experience the magic we create at every event we manage
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
            <h2 className="text-4xl font-bold mb-6 text-amber-500">Plan Your Next Event With Us</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss your event vision and receive a detailed proposal
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:+27152911087" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Call: 015 291 1087
              </a>
              <a href="mailto:events@malenglegacy.co.za" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-all">
                Email: events@malenglegacy.co.za
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

