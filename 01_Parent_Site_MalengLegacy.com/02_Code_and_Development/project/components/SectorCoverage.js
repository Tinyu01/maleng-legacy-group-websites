import { motion } from 'framer-motion';

export default function SectorCoverage() {
  const clusters = [
    {
      name: 'Infrastructure & Built Environment',
      icon: '🏗️',
      color: 'from-accent to-gold',
      subsidiaries: ['Property Development', 'Construction Services', 'Property Management'],
      coverage: '85%',
      provinces: ['Gauteng', 'Limpopo', 'Mpumalanga']
    },
    {
      name: 'Professional Services & Technology',
      icon: '💼',
      color: 'from-secondary to-accent',
      subsidiaries: ['IT Solutions', 'Consulting', 'Financial Services', 'Legal Advisory'],
      coverage: '92%',
      provinces: ['National Coverage', 'All 9 Provinces']
    },
    {
      name: 'Protection & Security Services',
      icon: '🛡️',
      color: 'from-primary to-secondary',
      subsidiaries: ['Security Services', 'Risk Management', 'Fire Safety'],
      coverage: '78%',
      provinces: ['Gauteng', 'North West', 'Free State']
    },
    {
      name: 'Agri-Consumer & Events',
      icon: '🌾',
      color: 'from-success to-accent',
      subsidiaries: ['Catering Services', 'Event Management', 'Agricultural Solutions'],
      coverage: '88%',
      provinces: ['Gauteng', 'Limpopo', 'Mpumalanga']
    }
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
            Comprehensive <span className="gradient-text">Sector Coverage</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four integrated clusters delivering end-to-end solutions across South Africa's key economic sectors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {clusters.map((cluster, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:border-accent/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl group-hover:scale-110 transition-transform">
                  {cluster.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {cluster.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: cluster.coverage }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`h-full bg-gradient-to-r ${cluster.color}`}
                      />
                    </div>
                    <span className="text-accent font-bold text-sm">{cluster.coverage}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-400 mb-2">Key Services:</div>
                <div className="flex flex-wrap gap-2">
                  {cluster.subsidiaries.map((sub, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-surface border border-gray-700 rounded-full text-xs text-gray-300"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-700 pt-3">
                <div className="text-sm font-semibold text-gray-400 mb-1">Geographic Reach:</div>
                <div className="text-sm text-gray-300">
                  {cluster.provinces.join(' • ')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* South Africa Coverage Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card border-accent/30 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">National Presence</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {['Gauteng', 'Limpopo', 'Mpumalanga', 'North West', 'Free State'].map((province, idx) => (
              <div key={idx} className="p-3 bg-surface rounded-lg border border-gray-700">
                <div className="text-accent font-bold mb-1">✓</div>
                <div className="text-xs text-gray-300">{province}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Expanding to Western Cape, Eastern Cape, KZN & Northern Cape in 2026-2027
          </p>
        </motion.div>
      </div>
    </section>
  );
}
