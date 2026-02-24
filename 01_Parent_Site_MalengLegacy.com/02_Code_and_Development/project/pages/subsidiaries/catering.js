import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ParallaxHero from '../../components/ParallaxHero';
import ParallaxSection from '../../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaUtensils, FaGlassCheers, FaTruck, FaPlay } from 'react-icons/fa';

export default function Catering() {
  const stats = [
    { value: "850+", label: "Events Catered", suffix: "" },
    { value: "120K+", label: "Meals Served Annually", suffix: "" },
    { value: "98%", label: "Client Satisfaction", suffix: "" },
    { value: "24Hr", label: "Equipment Rental", suffix: "" }
  ];

  const whyChooseUs = [
    {
      icon: <FaUtensils className="text-4xl text-accent" />,
      title: "Mopani Protein™ Cuisine",
      description: "Exclusive catering featuring Mopani Protein™ dishes – traditional mopani worms reimagined for modern fine dining."
    },
    {
      icon: <FaGlassCheers className="text-4xl text-accent" />,
      title: "Full-Service Catering",
      description: "From intimate dinners to 1,000+ guest events with menu planning, staffing, equipment, and onsite coordination."
    },
    {
      icon: <FaTruck className="text-4xl text-accent" />,
      title: "Equipment Rental",
      description: "Comprehensive event equipment hire including tents, tables, chairs, linen, cutlery, glassware, and kitchen equipment."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-accent" />,
      title: "Health & Safety",
      description: "Fully certified commercial kitchen, HACCP compliance, and food safety training for all catering staff."
    }
  ];

  const services = [
    {
      title: "Corporate Catering",
      description: "Conferences, boardroom lunches, product launches, and training events with professional service and menu variety.",
      features: ["Breakfast meetings", "Lunch buffets", "Cocktail events", "Tea/coffee stations"]
    },
    {
      title: "Private Events",
      description: "Weddings, birthday parties, anniversaries, and family celebrations with customized menus and full event coordination.",
      features: ["Wedding packages", "Birthday celebrations", "Traditional ceremonies", "Family gatherings"]
    },
    {
      title: "Equipment & Decor Rental",
      description: "Complete event equipment hire from marquee tents to cutlery, with delivery, setup, and collection services.",
      features: ["Tents & gazebos", "Tables & chairs", "Linen & decor", "Cutlery & glassware"]
    },
    {
      title: "Mopani Protein™ Catering",
      description: "Unique catering showcasing sustainable Mopani Protein™ in upscale presentations for adventurous corporate and private clients.",
      features: ["Mopani tapas", "Fusion dishes", "Traditional preparations", "Educational tastings"]
    }
  ];

  const packages = [
    {
      title: "Essential Package - From R180pp",
      category: "Budget-Friendly",
      description: "Perfect for corporate lunches and casual events. Buffet-style service with 3 mains, 2 sides, and dessert.",
      stats: "Min 30 guests | Buffet service"
    },
    {
      title: "Premium Package - From R350pp",
      category: "Most Popular",
      description: "Plated meals, waitstaff service, and premium ingredients for weddings and upscale corporate events.",
      stats: "Min 50 guests | Plated service | Waitstaff"
    },
    {
      title: "Luxury Package - From R650pp",
      category: "Exclusive",
      description: "5-course fine dining with Mopani Protein™ specialty dishes, sommelier service, and full event coordination.",
      stats: "Min 80 guests | Fine dining | Full coordination"
    }
  ];

  const testimonials = [
    {
      name: "Corporate Client",
      role: "HR Director, Limpopo Manufacturing",
      content: "Catered our annual conference for 240 delegates. The Mopani Protein™ tasting session was a highlight – innovative and delicious. Flawless execution.",
      rating: 5
    },
    {
      name: "Wedding Couple",
      role: "Polokwane",
      content: "Our wedding catering was exceptional. 180 guests, plated 3-course meal, professional waitstaff, and the food was restaurant-quality. Worth every cent.",
      rating: 5
    },
    {
      name: "Event Planner",
      role: "Limpopo Event Solutions",
      content: "We use them for all our corporate events. Reliable, professional, and their equipment rental makes event planning so much easier.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Maleng Legacy Catering & Supplies | Event Catering & Equipment Rental</title>
        <meta name="description" content="Professional catering services and event equipment rental featuring Mopani Protein™ cuisine for corporate and private events across Limpopo." />
      </Head>

      <Navigation isSubsidiary={true} subsidiaryName="Catering & Events" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-gray-900 to-green-800 opacity-85"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1555244162-803834f70033?w=1920")',
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
                <span className="text-green-700 font-bold text-sm">🍽️ CATERING & HOSPITALITY</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maleng Legacy <span className="gradient-text">Catering & Events</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Exceptional Culinary Experiences for Every Occasion
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Plan Event
                </Link>
                <a href="#services" className="btn-secondary">
                  View Menu
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
            <h2 className="text-4xl font-bold mb-4 text-green-700">Why Choose Maleng Legacy Catering</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative cuisine, professional service, and comprehensive event support for memorable occasions
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
      <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80">
        <div className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-green-600">Our Catering Services</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Complete catering and event support from menu design to cleanup
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

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-green-700">Catering Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible packages to suit every event and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-accent font-semibold mb-2">{pkg.category}</div>
                <h3 className="text-xl font-bold mb-3">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <p className="text-sm text-gray-500 border-t pt-4">{pkg.stats}</p>
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
            <h2 className="text-4xl font-bold mb-4 text-green-700">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by corporate clients and families across Limpopo
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
              <h2 className="text-4xl font-bold mb-4 text-green-700">Events We've Catered</h2>
              <p className="text-xl text-gray-300">
                See our catering team in action delivering exceptional events
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
            <h2 className="text-4xl font-bold mb-6 text-green-700">Plan Your Next Event</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Request a customized catering quote or equipment rental list for your upcoming event
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:+27152911087" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Call: 015 291 1087
              </a>
              <a href="mailto:catering@malenglegacy.co.za" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-all">
                Email: catering@malenglegacy.co.za
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


