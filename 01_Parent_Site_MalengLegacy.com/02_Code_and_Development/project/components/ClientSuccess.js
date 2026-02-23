import { motion } from 'framer-motion';

export default function ClientSuccess() {
  const testimonials = [
    {
      quote: "Maleng Legacy Group's integrated approach transformed our procurement strategy. Their B-BBEE Level 1 status helped us meet compliance while delivering exceptional service quality.",
      author: "Sarah Johnson",
      role: "Procurement Director",
      company: "Major Mining Corporation",
      sector: "Mining & Resources"
    },
    {
      quote: "From property development to IT infrastructure, having one trusted partner streamlined our operations significantly. The vertical integration is a game-changer.",
      author: "Thabo Mthembu",
      role: "Chief Operations Officer",
      company: "Government Agency",
      sector: "Public Sector"
    },
    {
      quote: "Their professional services cluster delivered beyond expectations. The combination of consulting expertise and execution capability is rare in the South African market.",
      author: "Amanda van der Merwe",
      role: "CEO",
      company: "Financial Services Firm",
      sector: "Financial Services"
    }
  ];

  const metrics = [
    { value: '98%', label: 'Client Retention Rate', icon: '🎯' },
    { value: '4.9/5', label: 'Average Client Rating', icon: '⭐' },
    { value: '500+', label: 'Active Partnerships', icon: '🤝' },
    { value: '24/7', label: 'Support Availability', icon: '💬' }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it — hear from partners who've experienced the Maleng Legacy difference.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="text-4xl mb-3">{metric.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="card hover:border-accent/30 transition-all"
            >
              <div className="mb-4 text-accent text-4xl">"</div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                {item.quote}
              </p>
              <div className="border-t border-gray-700 pt-4">
                <div className="font-bold text-white">{item.author}</div>
                <div className="text-sm text-gray-400">{item.role}</div>
                <div className="text-xs text-accent mt-1">{item.sector}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
