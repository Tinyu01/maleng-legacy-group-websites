import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="mb-16 py-12 text-center"
  >
    <h2 className="text-4xl font-bold text-gold-accent mb-12">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/80 p-8 rounded-xl shadow-lg"
      >
        <div className="text-4xl mb-4">📧</div>
        <h3 className="text-xl font-bold text-earth-brown mb-2">Email</h3>
        <a 
          href="mailto:ceo@malenglegacy.co.za" 
          className="text-earth-green hover:text-gold-accent font-semibold break-all"
        >
          ceo@malenglegacy.co.za
        </a>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/80 p-8 rounded-xl shadow-lg"
      >
        <div className="text-4xl mb-4">📱</div>
        <h3 className="text-xl font-bold text-earth-brown mb-2">Phone</h3>
        <a 
          href="tel:+27738847449" 
          className="text-earth-green hover:text-gold-accent font-semibold"
        >
          +27 73 884 7449
        </a>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/80 p-8 rounded-xl shadow-lg"
      >
        <div className="text-4xl mb-4">📍</div>
        <h3 className="text-xl font-bold text-earth-brown mb-2">Location</h3>
        <p className="text-gray-700">Gauteng, South Africa</p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/80 p-8 rounded-xl shadow-lg"
      >
        <div className="text-4xl mb-4">🚀</div>
        <h3 className="text-xl font-bold text-earth-brown mb-2">Status</h3>
        <p className="text-gray-700">Phase 1 Activation</p>
        <p className="text-sm text-earth-green font-semibold">Professional & Operations Clusters</p>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="mt-12 bg-gradient-to-r from-earth-brown/20 to-earth-green/20 p-8 rounded-xl max-w-2xl mx-auto"
    >
      <p className="text-lg text-gray-800">
        <strong>Ready to partner with us?</strong> We're building sustainable economic legacies. Reach out to discuss opportunities, investments, or partnerships.
      </p>
    </motion.div>
  </motion.section>
);

export default Contact;
