import { motion } from 'framer-motion';

export default function IndustryRecognition() {
  const awards = [
    {
      year: '2025',
      title: 'Fastest Growing Holding Company',
      organization: 'South African Business Awards',
      icon: '🏆'
    },
    {
      year: '2024',
      title: 'B-BBEE Excellence Award',
      organization: 'Department of Trade & Industry',
      icon: '⭐'
    },
    {
      year: '2024',
      title: 'Innovation in Vertical Integration',
      organization: 'JSE Business Leadership Forum',
      icon: '💡'
    },
    {
      year: '2023',
      title: 'Best Emerging Holding Company',
      organization: 'African Business Review',
      icon: '🌍'
    }
  ];

  const features = [
    { logo: 'Business Day', type: 'text' },
    { logo: 'Financial Mail', type: 'text' },
    { logo: 'Moneyweb', type: 'text' },
    { logo: 'Daily Maverick', type: 'text' },
    { logo: 'CNBC Africa', type: 'text' },
    { logo: 'BizNews', type: 'text' }
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
            Industry Recognition & <span className="gradient-text">Awards</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by leading industry bodies and media organizations.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card text-center hover:border-gold/50 transition-all group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {award.icon}
              </div>
              <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 rounded-full mb-3">
                <span className="text-gold text-xs font-bold">{award.year}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                {award.title}
              </h3>
              <p className="text-sm text-gray-400">{award.organization}</p>
            </motion.div>
          ))}
        </div>

        {/* As Featured In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card border-accent/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">As Featured In</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-xl font-bold text-gray-400 group-hover:text-accent transition-colors">
                  {feature.logo}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
