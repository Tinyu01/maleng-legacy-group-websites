import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <span className="text-accent font-bold text-sm">READY TO START</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform <br />
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Talk to our team about enterprise-grade technology solutions, digital transformation, and 24/7 support.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
          >
            <a
              href="mailto:tech@malenglegacy.co.za"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-dark font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95"
            >
              Email Us
              <FaArrowRight />
            </a>
            <a
              href="tel:+27738847449"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent text-accent hover:bg-accent/10 font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95"
            >
              Call +27 73 884 7449
              <FaArrowRight />
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 pt-12 border-t border-primary/30"
          >
            <p className="text-sm text-gray-400 mb-6">Free consultation • 24/7 support • Enterprise-grade delivery</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-accent mb-1">150+</div>
                <div className="text-xs text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">50+</div>
                <div className="text-xs text-gray-400">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">98%</div>
                <div className="text-xs text-gray-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                <div className="text-xs text-gray-400">Support Available</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
    </section>
  );
}
