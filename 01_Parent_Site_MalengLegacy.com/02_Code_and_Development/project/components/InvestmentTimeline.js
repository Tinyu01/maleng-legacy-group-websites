import { motion } from 'framer-motion';

export default function InvestmentTimeline() {
  const milestones = [
    {
      year: '2020',
      quarter: 'Q4',
      title: 'Foundation Established',
      description: 'Maleng Legacy Group incorporated with initial 4 subsidiaries',
      metrics: ['R50M Initial Capital', '4 Subsidiaries', '150 Employees'],
      status: 'completed'
    },
    {
      year: '2021',
      quarter: 'Q2',
      title: 'Cluster Expansion',
      description: 'Launched Professional Services cluster with 3 new acquisitions',
      metrics: ['R120M Portfolio Value', '7 Subsidiaries', '350 Employees'],
      status: 'completed'
    },
    {
      year: '2022',
      quarter: 'Q3',
      title: 'Geographic Growth',
      description: 'Expanded operations to Limpopo and Mpumalanga provinces',
      metrics: ['R200M Revenue Run Rate', '11 Subsidiaries', '650 Employees'],
      status: 'completed'
    },
    {
      year: '2023',
      quarter: 'Q4',
      title: 'B-BBEE Level 1',
      description: 'Achieved B-BBEE Level 1 status, major government contracts secured',
      metrics: ['R350M Annual Revenue', '14 Subsidiaries', '950 Employees'],
      status: 'completed'
    },
    {
      year: '2024',
      quarter: 'Q2',
      title: 'Vertical Integration',
      description: 'Completed end-to-end integration across all four clusters',
      metrics: ['R450M Portfolio Cap', '16 Subsidiaries', '1.2K Employees'],
      status: 'completed'
    },
    {
      year: '2025',
      quarter: 'Q4',
      title: 'Market Leadership',
      description: 'Named fastest growing holding company, 18 subsidiaries operational',
      metrics: ['R600M+ Revenue', '18 Subsidiaries', '1.5K+ Employees'],
      status: 'completed'
    },
    {
      year: '2026',
      quarter: 'Q1',
      title: 'National Expansion',
      description: 'Current: Expanding to Western Cape and KZN, 3 new acquisitions pending',
      metrics: ['R750M Target', '21 Subsidiaries (Target)', 'National Footprint'],
      status: 'current'
    },
    {
      year: '2027',
      quarter: 'Q4',
      title: 'Continental Vision',
      description: 'Planned: Regional expansion into SADC countries, digital transformation',
      metrics: ['R1B+ Revenue Goal', '25+ Subsidiaries', 'Regional Presence'],
      status: 'planned'
    },
    {
      year: '2030',
      quarter: 'Q4',
      title: 'Legacy Milestone',
      description: 'Vision: Africa\'s premier diversified holding company',
      metrics: ['R2.5B Revenue Vision', '35+ Subsidiaries', 'Continental Leader'],
      status: 'planned'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Growth <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From startup to market leader — tracking our trajectory from 2020 to our 2030 vision.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent via-gold to-success"></div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="card hover:border-accent/50 transition-all group">
                    <div className="flex items-start gap-3 mb-3">
                      {index % 2 !== 0 && (
                        <div className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full shrink-0">
                          <span className="text-accent text-xs font-bold">{milestone.quarter}</span>
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{milestone.description}</p>
                      </div>
                      {index % 2 === 0 && (
                        <div className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full shrink-0">
                          <span className="text-accent text-xs font-bold">{milestone.quarter}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {milestone.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-surface border border-gray-700 rounded-full text-xs text-gray-300"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Year Circle */}
                <div className="shrink-0">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center font-bold text-xl shadow-lg ${
                    milestone.status === 'completed' ? 'bg-gradient-to-br from-success to-accent text-white' :
                    milestone.status === 'current' ? 'bg-gradient-to-br from-accent to-gold text-white animate-pulse' :
                    'bg-gradient-to-br from-gray-700 to-gray-600 text-gray-300'
                  }`}>
                    {milestone.year}
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card border-accent/30 mt-16"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold">6-Year Growth Overview</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">350%</div>
              <div className="text-sm text-gray-400">Revenue Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">450%</div>
              <div className="text-sm text-gray-400">Subsidiary Expansion</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">900%</div>
              <div className="text-sm text-gray-400">Employee Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">1200%</div>
              <div className="text-sm text-gray-400">Portfolio Valuation</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
