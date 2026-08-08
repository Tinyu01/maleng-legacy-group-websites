import { motion } from 'framer-motion';
import { FaArrowRight, FaLaptopCode, FaCloud, FaRocket, FaShieldAlt } from 'react-icons/fa';

const serviceHighlights = [
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Strategic technology advisory for digital transformation and infrastructure optimization.',
    features: ['Technology Roadmapping', 'Infrastructure Audits', 'Cloud Migration Strategy', 'Cybersecurity Assessment'],
    icon: FaLaptopCode,
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Custom enterprise applications, web platforms, and mobile solutions.',
    features: ['Web Applications', 'Mobile Apps (iOS/Android)', 'Enterprise Systems', 'API Integration'],
    icon: FaRocket,
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'End-to-end digitization of business processes and customer experiences.',
    features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Innovation Workshops'],
    icon: FaCloud,
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure design, migration, and managed services.',
    features: ['AWS/Azure/GCP', 'Cloud Architecture', 'DevOps Services', 'Managed Hosting'],
    icon: FaShieldAlt,
  },
];

export default function ServiceCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-transparent to-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <span className="text-accent font-bold text-sm">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive technology solutions tailored to your business needs
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From strategic IT consulting to custom software, cloud architecture and digital transformation, we design solutions for enterprise scale.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {serviceHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group"
              >
                <div className="h-full rounded-3xl border border-primary/20 bg-white/5 p-8 shadow-xl shadow-primary/5 transition hover:border-accent/40 hover:bg-white/10">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-accent/10 text-accent transition group-hover:bg-accent/20">
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-6">{item.description}</p>
                  <div className="space-y-2 mb-8">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-accent">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-accent font-semibold">
                    Learn More
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
