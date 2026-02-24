import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ParallaxHero from '../../components/ParallaxHero';
import ParallaxSection from '../../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaSeedling, FaEgg, FaTractor, FaPlay } from 'react-icons/fa';

export default function Agri() {
  const stats = [
    { value: "500Ha", label: "Farming Land", suffix: "" },
    { value: "2.5M", label: "Mopani Worms/Year", suffix: "" },
    { value: "450K", label: "Eggs Monthly", suffix: "" },
    { value: "R18M", label: "Annual Revenue", suffix: "" }
  ];

  const whyChooseUs = [
    {
      icon: <FaSeedling className="text-4xl text-accent" />,
      title: "Mopani Protein™ Innovation",
      description: "First commercial mopani worm farm in Limpopo, producing sustainable high-protein food products for domestic and export markets."
    },
    {
      icon: <FaEgg className="text-4xl text-accent" />,
      title: "Free-Range Poultry",
      description: "Ethical, antibiotic-free poultry farming producing premium eggs and broiler chickens for health-conscious consumers."
    },
    {
      icon: <FaTractor className="text-4xl text-accent" />,
      title: "Sustainable Farming",
      description: "Regenerative agriculture practices, water conservation, and solar-powered infrastructure reducing environmental impact."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-accent" />,
      title: "Agri-Tourism",
      description: "Farm tours, educational programmes, and farm-to-table restaurant showcasing sustainable agriculture to visitors."
    }
  ];

  const services = [
    {
      title: "Mopani Worm Farming",
      description: "Commercial farming of mopani worms (masonja) with processing into dried, canned, and powdered protein products.",
      features: ["2.5M worms annually", "Powder & whole products", "Export certification", "Mopani Protein™ brand"]
    },
    {
      title: "Poultry Production",
      description: "Free-range layer hens and broiler chickens raised on organic feed, producing premium eggs and chicken meat.",
      features: ["450K eggs monthly", "Free-range layers", "Broiler chickens", "Organic feed programme"]
    },
    {
      title: "Crop Farming",
      description: "Maize, vegetables, and fodder crops using precision agriculture and drip irrigation for optimal yields.",
      features: ["150 hectares maize", "50 hectares vegetables", "Drip irrigation", "Soil conservation"]
    },
    {
      title: "Agri-Tourism & Education",
      description: "Farm tours, school educational visits, and farm-to-table restaurant promoting agricultural awareness.",
      features: ["Guided farm tours", "School programmes", "Farm restaurant", "Agricultural workshops"]
    }
  ];

  const products = [
    {
      title: "Mopani Protein™ Powder",
      category: "Processed Products",
      description: "High-protein superfood powder (68% protein) from dried mopani worms - perfect for smoothies and cooking.",
      stats: "R180/250g | Exported to EU & Asia"
    },
    {
      title: "Free-Range Eggs",
      category: "Poultry",
      description: "Premium extra-large eggs from free-range hens fed organic grain and raised in spacious outdoor paddocks.",
      stats: "450K eggs/month | Supplied to 45 retailers"
    },
    {
      title: "Farm-to-Table Restaurant",
      category: "Agri-Tourism",
      description: "On-site restaurant serving meals made exclusively from farm produce and locally sourced ingredients.",
      stats: "Seats 80 | 1,200+ monthly visitors"
    }
  ];

  const testimonials = [
    {
      name: "European Health Foods Importer",
      role: "Procurement Manager",
      content: "Mopani Protein™ is a game-changer in sustainable protein. Quality is exceptional and their farming practices meet our strict ethical standards.",
      rating: 5
    },
    {
      name: "Polokwane Retail Chain",
      role: "Fresh Produce Buyer",
      content: "We've stocked their free-range eggs for 3 years. Customers love the quality and the eggs sell out faster than battery cage eggs.",
      rating: 5
    },
    {
      name: "Local School",
      role: "Science Teacher",
      content: "The farm tour and educational programme was outstanding. Students learned about sustainable farming and food security firsthand.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Maleng Legacy Agri | Mopani Farms & Poultry Production</title>
        <meta name="description" content="Sustainable agriculture including mopani worm farming, free-range poultry, crop production, and agri-tourism experiences." />
      </Head>

      <Navigation isSubsidiary={true} subsidiaryName="Agri & Farming" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-gray-900 to-green-800 opacity-85"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920")',
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
              <div className="inline-block px-4 py-2 bg-green-700/10 border border-green-700/30 rounded-full mb-6">
                <span className="text-green-700 font-bold text-sm">🌾 AGRICULTURE & FARMING</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maleng Legacy <span className="gradient-text">Agri & Farming</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Sustainable Farming for Food Security
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Visit Farm
                </Link>
                <a href="#services" className="btn-secondary">
                  Our Products
                </a>
              </div>
            </motion.div>
          </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-r from-green-900 to-green-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-green-500 mb-2">{stat.value}</div>
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
            <h2 className="text-4xl font-bold mb-4 text-green-700">Why Maleng Legacy Agri</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering sustainable, ethical agriculture with innovative protein production and regenerative farming
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
      <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80">
        <div className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-green-600">Our Farming Operations</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Diverse agricultural production delivering sustainable, high-quality food products
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
                  <h3 className="text-2xl font-bold mb-4 text-green-600">{service.title}</h3>
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

      {/* Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-green-700">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium agricultural products from our sustainable farming operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-accent font-semibold mb-2">{product.category}</div>
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-sm text-gray-500 border-t pt-4">{product.stats}</p>
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
            <h2 className="text-4xl font-bold mb-4 text-green-700">Customer & Partner Feedback</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by retailers, exporters, and communities across Limpopo
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
                    <span key={i} className="text-green-700 text-xl">★</span>
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
              <h2 className="text-4xl font-bold mb-4 text-green-700">Farm Life at Mopani Farms</h2>
              <p className="text-xl text-gray-300">
                Explore our sustainable farming operations from mopani worms to free-range poultry
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
            <h2 className="text-4xl font-bold mb-6 text-green-700">Visit Our Farm or Order Products</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book a farm tour, visit our restaurant, or inquire about wholesale Mopani Protein™ and egg supply
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:+27152911087" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Call: 015 291 1087
              </a>
              <a href="mailto:agri@malenglegacy.co.za" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-all">
                Email: agri@malenglegacy.co.za
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


