import { motion } from 'framer-motion';

export default function StrategicPartners() {
  const partners = [
    { name: 'Department of Public Works', sector: 'Government' },
    { name: 'Eskom Holdings', sector: 'Energy' },
    { name: 'Transnet SOC Ltd', sector: 'Logistics' },
    { name: 'Anglo American', sector: 'Mining' },
    { name: 'Sasol Limited', sector: 'Chemicals' },
    { name: 'Standard Bank Group', sector: 'Financial Services' },
    { name: 'City of Johannesburg', sector: 'Municipal' },
    { name: 'Gauteng Provincial Govt', sector: 'Government' },
    { name: 'MTN Group', sector: 'Telecommunications' },
    { name: 'Shoprite Holdings', sector: 'Retail' },
    { name: 'Bidvest Group', sector: 'Diversified Services' },
    { name: 'Imperial Logistics', sector: 'Supply Chain' }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proud to serve South Africa's most respected organizations across public and private sectors.
          </p>
        </motion.div>

        <div className="card mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center p-4 rounded-lg border border-gray-700 hover:border-accent/50 transition-all group"
              >
                <div className="font-bold text-white mb-1 group-hover:text-accent transition-colors text-sm">
                  {partner.name}
                </div>
                <div className="text-xs text-gray-400">{partner.sector}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm">
            * Representative client list. Full portfolio available upon request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
