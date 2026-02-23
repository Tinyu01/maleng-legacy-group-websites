import { motion } from 'framer-motion';

export default function ValueProposition() {
  const benefits = [
    {
      step: '1',
      title: 'Strategic Consultation',
      description: 'Deep-dive analysis of your business needs across all operational areas',
      icon: '🎯',
      outcomes: ['Needs Assessment', 'Risk Analysis', 'ROI Projection']
    },
    {
      step: '2',
      title: 'Solution Design',
      description: 'Tailored solutions leveraging our multi-sector expertise and subsidiaries',
      icon: '🔧',
      outcomes: ['Custom Strategy', 'Resource Allocation', 'Timeline Planning']
    },
    {
      step: '3',
      title: 'Integrated Execution',
      description: 'Seamless deployment across relevant subsidiaries with centralized oversight',
      icon: '⚡',
      outcomes: ['Project Management', 'Quality Assurance', 'Real-time Reporting']
    },
    {
      step: '4',
      title: 'Continuous Support',
      description: 'Ongoing optimization, maintenance, and strategic partnership growth',
      icon: '🔄',
      outcomes: ['24/7 Support', 'Performance Reviews', 'Innovation Updates']
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One Partner, <span className="gradient-text">Multiple Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From consulting to execution — our integrated model delivers complete business solutions under one roof.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="card h-full hover:border-accent/50 transition-all group">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                  {benefit.step}
                </div>
                
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-xs font-semibold text-gray-500 mb-2">Key Deliverables:</div>
                  <ul className="space-y-1">
                    {benefit.outcomes.map((outcome, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {index < benefits.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <div className="text-accent text-2xl">→</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card border-accent/30"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold">Why Our Integrated Model Works</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-bold mb-2">Cost Efficiency</h4>
              <p className="text-sm text-gray-400">Single vendor reduces overhead, streamlines procurement, and eliminates coordination costs</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⏱️</div>
              <h4 className="font-bold mb-2">Speed to Market</h4>
              <p className="text-sm text-gray-400">Pre-integrated services mean faster deployment and reduced project timelines</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold mb-2">Single Accountability</h4>
              <p className="text-sm text-gray-400">One point of contact, unified SLAs, and centralized reporting for peace of mind</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
