import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ParallaxHero from '../components/ParallaxHero';
import ParallaxSection from '../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaCar, FaUtensils, FaTint, FaPlay } from 'react-icons/fa';

export default function Carwash() {
  const stats = [
    { value: "12K+", label: "Vehicles Washed Monthly", suffix: "" },
    { value: "3", label: "Locations", suffix: "" },
    { value: "98%", label: "Customer Satisfaction", suffix: "" },
    { value: "24", label: "Fleet Contracts", suffix: "" }
  ];

  const whyChooseUs = [
    {
      icon: <FaCar className="text-4xl text-accent" />,
      title: "Premium Carwash Services",
      description: "State-of-the-art touchless systems, hand detailing, and eco-friendly products delivering showroom-quality results."
    },
    {
      icon: <FaUtensils className="text-4xl text-accent" />,
      title: "Full-Service Grill",
      description: "Quality grilled meals, fresh salads, and grab-and-go options perfect for busy professionals and travelers."
    },
    {
      icon: <FaTint className="text-4xl text-accent" />,
      title: "Water Recycling System",
      description: "Environmentally responsible operations with 70% water recycling reducing consumption and environmental impact."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-accent" />,
      title: "Fleet Solutions",
      description: "Corporate fleet washing contracts with monthly billing, priority service, and dedicated account management."
    }
  ];

  const services = [
    {
      title: "Carwash Services",
      description: "From quick exterior wash to full valet detailing including interior shampooing, waxing, and engine bay cleaning.",
      features: ["Touchless automatic wash", "Hand wash & wax", "Interior vacuuming", "Engine detailing"]
    },
    {
      title: "Grill & Restaurant",
      description: "Freshly grilled meals, burgers, wraps, salads, and breakfast options with dine-in, takeaway, and drive-through service.",
      features: ["Flame-grilled burgers", "Breakfast platters", "Fresh salads & wraps", "Coffee & beverages"]
    },
    {
      title: "Fleet Washing Contracts",
      description: "Dedicated fleet services for corporate clients with priority lanes, monthly invoicing, and customized washing schedules.",
      features: ["Priority service", "Monthly billing", "Dedicated account manager", "Vehicle tracking reports"]
    },
    {
      title: "Valet & Detailing",
      description: "Premium detailing services including ceramic coating, paint correction, upholstery shampooing, and odor elimination.",
      features: ["Paint correction", "Ceramic coating", "Upholstery shampooing", "Odor treatment"]
    }
  ];

  const locations = [
    {
      title: "Polokwane Flagship - N1 North",
      category: "Flagship Location",
      description: "8-bay automatic wash, hand detailing bays, 60-seat grill restaurant, and convenience store.",
      stats: "Open 6AM-10PM | 3,500+ monthly customers"
    },
    {
      title: "Tzaneen Branch",
      category: "Regional Site",
      description: "4-bay wash facility with takeaway grill and fuel station partnership serving R71 corridor traffic.",
      stats: "Open 7AM-8PM | 1,800+ monthly customers"
    },
    {
      title: "Mokopane Service Center",
      category: "Express Site",
      description: "Express wash and grab-and-go food service targeting commuters and mining fleet vehicles.",
      stats: "Open 6AM-7PM | 2,200+ monthly customers"
    }
  ];

  const testimonials = [
    {
      name: "Limpopo Logistics Fleet",
      role: "Fleet Manager",
      content: "We wash 45 vehicles monthly through their fleet contract. Always spotless, great pricing, and their reporting makes reconciliation easy.",
      rating: 5
    },
    {
      name: "Sarah Ndlovu",
      role: "Regular Customer",
      content: "Best carwash in Polokwane. My car always looks brand new, and the grill makes amazing burgers. One-stop shop for car care and lunch!",
      rating: 5
    },
    {
      name: "Mining Company",
      role: "Operations Manager",
      content: "Their Mokopane location handles our light vehicle fleet washing. Professional service, competitive rates, and convenient location.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Maleng Legacy Carwash & Grill | Premium Carwash & Restaurant Services</title>
        <meta name="description" content="Premium carwash and grill restaurant services across Limpopo offering automatic wash, hand detailing, fleet contracts, and quality meals." />
      </Head>

      <Navigation isSubsidiary={true} subsidiaryName="Car Wash & Detailing" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-gray-900 to-red-800 opacity-85"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920")',
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
                <span className="text-red-500 font-bold text-sm">🚗 CAR CARE SERVICES</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maleng Legacy <span className="gradient-text">Executive Car Wash</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Premium Auto Detailing & Valeting Services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Book Now
                </Link>
                <a href="#services" className="btn-secondary">
                  View Packages
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
            <h2 className="text-4xl font-bold mb-4 text-red-500">Why Choose Maleng Legacy Carwash & Grill</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining premium carwash services with quality food in a convenient, customer-focused environment
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
      <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80">
        <div className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-red-400">Our Services</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Everything you need for a clean car and a great meal
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

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-red-500">Our Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located across Limpopo's major routes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-accent font-semibold mb-2">{location.category}</div>
                <h3 className="text-xl font-bold mb-3">{location.title}</h3>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <p className="text-sm text-gray-500 border-t pt-4">{location.stats}</p>
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
            <h2 className="text-4xl font-bold mb-4 text-red-500">Customer Reviews</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by individual car owners and fleet managers across Limpopo
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
              <h2 className="text-4xl font-bold mb-4 text-red-500">Experience the Difference</h2>
              <p className="text-xl text-gray-300">
                See our premium carwash and grill facilities in action
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
            <h2 className="text-4xl font-bold mb-6 text-red-500">Visit Us Today or Inquire About Fleet Contracts</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Enjoy premium carwash services and delicious grilled meals at any of our locations
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:+27152911087" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Call: 015 291 1087
              </a>
              <a href="mailto:carwash@malenglegacy.co.za" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-all">
                Email: carwash@malenglegacy.co.za
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


