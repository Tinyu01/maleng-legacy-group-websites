import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: '🏆',
      title: 'Proven Track Record',
      description: 'Successfully managing a diversified portfolio of 18+ companies across 4 strategic clusters since 2020.',
      stat: '100% Growth YoY'
    },
    {
      icon: '🤝',
      title: 'B-BBEE Level 1 Partner',
      description: 'Unlock maximum procurement recognition points. We help corporate clients achieve transformation targets.',
      stat: '135% Recognition'
    },
    {
      icon: '🔄',
      title: 'Vertical Integration',
      description: 'End-to-end solutions from consulting to execution. One partner for multiple business needs.',
      stat: '4 Core Clusters'
    },
    {
      icon: '💼',
      title: 'Enterprise Solutions',
      description: 'Serving Fortune 500 companies, government entities, and SMEs with tailored professional services.',
      stat: '500+ Clients'
    },
    {
      icon: '⚡',
      title: 'Rapid Deployment',
      description: 'Scalable solutions deployed efficiently. Our integrated model ensures speed to market.',
      stat: '48hr Response'
    },
    {
      icon: '📊',
      title: 'Financial Stability',
      description: 'Strong balance sheet, audited financials, and transparent governance for peace of mind.',
      stat: 'ISO 9001:2015'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Partner With <span className="gradient-text">Maleng Legacy</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just a holding company — we're your strategic growth partner delivering integrated solutions across multiple sectors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full">
                    <span className="text-accent text-xs font-semibold">{item.stat}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
