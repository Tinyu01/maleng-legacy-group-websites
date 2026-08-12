import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ParallaxHero from '../../components/ParallaxHero';
import ParallaxSection from '../../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaCertificate, FaUsers, FaChartLine, FaPlay } from 'react-icons/fa';

export default function Training() {
  const stats = [
    { value: "5,000+", label: "Learners Trained", suffix: "" },
    { value: "45+", label: "Accredited Courses", suffix: "" },
    { value: "95%", label: "Placement Rate", suffix: "" },
    { value: "12", label: "SETA Accreditations", suffix: "" }
  ];

  const whyChooseUs = [
    {
      icon: <FaCertificate className="text-4xl text-accent" />,
      title: "SETA Accredited",
      description: "Registered training provider with multiple SETA accreditations ensuring nationally recognized qualifications."
    },
    {
      icon: <FaUsers className="text-4xl text-accent" />,
      title: "Expert Facilitators",
      description: "Industry practitioners with 10+ years experience delivering practical, workplace-relevant training."
    },
    {
      icon: <FaChartLine className="text-4xl text-accent" />,
      title: "95% Placement Rate",
      description: "Strong employer network and job placement assistance ensuring learners transition into meaningful employment."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-accent" />,
      title: "Skills Development Funding",
      description: "Assistance accessing SETA grants, WSP/ATR submissions, and discretionary funding for corporate training."
    }
  ];

  const services = [
    {
      title: "Learnership Programmes",
      description: "NQF-aligned learnerships combining theoretical knowledge with practical workplace experience and guaranteed certification.",
      features: ["Engineering trades", "Business administration", "Hospitality & tourism", "Agriculture & farming"]
    },
    {
      title: "Skills Programmes",
      description: "Short-course skills training addressing specific competency gaps with immediate workplace application.",
      features: ["Heavy equipment operation", "First aid & safety", "Computer literacy", "Supervisory management"]
    },
    {
      title: "Corporate Training",
      description: "Customized in-house training solutions aligned with organizational goals and compliance requirements.",
      features: ["Leadership development", "Technical upskilling", "Compliance training", "Team building"]
    },
    {
      title: "Apprenticeships",
      description: "Trade apprenticeships in partnership with industry employers, from recruitment through trade testing and certification.",
      features: ["Electrician", "Plumber", "Fitter & Turner", "Boilermaker"]
    }
  ];

  const programmes = [
    {
      title: "Construction Learnership Programme",
      category: "Learnership",
      description: "18-month NQF Level 4 learnership producing qualified bricklayers, plasterers, and construction supervisors.",
      stats: "450 graduates | 92% employed"
    },
    {
      title: "Corporate Skills Development Initiative",
      category: "Corporate",
      description: "Upskilled 240 employees for Limpopo Manufacturing Group across technical and soft skills competencies.",
      stats: "240 learners | R4.2M SETA funding"
    },
    {
      title: "Hospitality Training Academy",
      category: "Skills Programme",
      description: "Training chefs, waiters, and hospitality managers for Limpopo's growing tourism sector.",
      stats: "180 graduates | 88% placement"
    }
  ];

  const testimonials = [
    {
      name: "Limpopo Manufacturing Ltd",
      role: "HR Director",
      content: "Maleng Legacy Training Institute delivered exceptional learnership programmes that transformed our workforce capabilities. Their SETA funding support saved us millions.",
      rating: 5
    },
    {
      name: "Thabo Mokoena",
      role: "Apprentice Electrician Graduate",
      content: "I completed my apprenticeship through their programme and now have a permanent job with a major contractor. Life-changing opportunity.",
      rating: 5
    },
    {
      name: "Polokwane Hotel Group",
      role: "General Manager",
      content: "Their hospitality training programmes delivered work-ready staff who hit the ground running. Professional, effective, and great value.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Maleng Legacy Training Institute | SETA Accredited Skills Development</title>
        <meta name="description" content="Leading SETA-accredited training provider offering learnerships, skills programmes, apprenticeships, and corporate training across Limpopo." />
        <meta name="keywords" content="Maleng Legacy Training Institute, SETA accredited training, learnerships South Africa, apprenticeships, skills development, corporate training" />
      </Head>

      <Navigation isSubsidiary={true} subsidiaryName="Training & Development" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-gray-900 to-cyan-800 opacity-85"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920")',
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
                <span className="text-cyan-500 font-bold text-sm">🎓 SKILLS DEVELOPMENT</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maleng Legacy <span className="gradient-text">Training & Development Institute</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Empowering Careers Through Quality Training
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Browse Courses
                </Link>
                <a href="#services" className="btn-secondary">
                  Our Programs
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
            <h2 className="text-4xl font-bold mb-4 text-cyan-500">Why Train With Maleng Legacy Institute</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming lives through quality, accredited training that leads to real employment opportunities
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
      <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80">
        <div className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-cyan-400">Our Training Solutions</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Comprehensive training programmes from entry-level to advanced professional development
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

      {/* Programmes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-cyan-500">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven track record delivering high-quality training that changes lives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programmes.map((programme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-accent font-semibold mb-2">{programme.category}</div>
                <h3 className="text-xl font-bold mb-3">{programme.title}</h3>
                <p className="text-gray-600 mb-4">{programme.description}</p>
                <p className="text-sm text-gray-500 border-t pt-4">{programme.stats}</p>
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
            <h2 className="text-4xl font-bold mb-4 text-cyan-500">What Our Learners Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by individuals, corporates, and government across Limpopo
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
              <h2 className="text-4xl font-bold mb-4 text-cyan-500">See Our Impact</h2>
              <p className="text-xl text-gray-300">
                Watch how we're building a skilled workforce that drives Limpopo's economic growth
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
            <h2 className="text-4xl font-bold mb-6 text-cyan-500">Ready to Invest in Skills Development?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Enquire about individual training, corporate programmes, or SETA funding assistance
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:+27152911087" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Call: 015 291 1087
              </a>
              <a href="mailto:training@malenglegacy.co.za" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-all">
                Email: training@malenglegacy.co.za
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

