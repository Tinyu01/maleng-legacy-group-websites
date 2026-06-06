import { motion } from 'framer-motion';
import { FaCompass, FaSlidersH, FaRocket } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: FaCompass,
      title: 'Explore Solutions',
      description: 'Browse our five service categories and 24+ specialized services tailored for enterprise needs',
    },
    {
      number: '02',
      icon: FaSlidersH,
      title: 'Customize & Quote',
      description: 'Select your service, choose the pricing tier (Starter → Enterprise), and get an instant quote',
    },
    {
      number: '03',
      icon: FaRocket,
      title: 'Deploy & Support',
      description: 'Launch with our expert team and enjoy 24/7 support throughout your implementation',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/10 to-transparent">
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
            <span className="text-accent font-bold text-sm">SIMPLE PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Works</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-gradient-to-br from-primary/40 to-primary/10 border border-primary/30 rounded-xl p-8 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent text-dark rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 pt-4">
                    <div className="inline-block p-4 bg-accent/10 group-hover:bg-accent/20 rounded-lg transition-all duration-300 transform group-hover:scale-110">
                      <Icon className="text-3xl text-accent" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-accent to-secondary opacity-50" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-300 mb-6">
            Get started with enterprise solutions in three simple steps. Our team is ready to assist you.
          </p>
          <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-dark font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}
