import { motion } from 'framer-motion';
import { FaStar, FaShieldAlt, FaTachometerAlt, FaLock } from 'react-icons/fa';

export default function HighlightGrid() {
  const highlights = [
    {
      icon: FaStar,
      title: 'Enterprise Expertise',
      description: 'Proven track record delivering mission-critical systems for Fortune 500 and government clients',
      metric: '50+ Enterprise Clients',
    },
    {
      icon: FaTachometerAlt,
      title: 'Rapid Deployment',
      description: 'Agile methodology ensures faster time-to-market without compromising quality',
      metric: '40% Faster Delivery',
    },
    {
      icon: FaLock,
      title: 'Security First',
      description: 'ISO 27001 certified processes with enterprise-grade security built into every solution',
      metric: '100% Secure',
    },
    {
      icon: FaShieldAlt,
      title: 'Cost Effective',
      description: 'Competitive pricing with flexible engagement models for fixed price, T&M and dedicated teams',
      metric: '30% Cost Savings',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-full mb-6">
            <span className="text-accent font-bold text-sm">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Maleng <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Tech & Consulting</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Enterprise-grade solutions that combine technology, security, and strategic delivery for measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center transition hover:border-accent/50 hover:bg-white/10">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-accent/10 text-accent transition group-hover:bg-accent/20">
                    <Icon className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">{item.description}</p>
                  <div className="text-sm font-semibold text-accent">{item.metric}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}