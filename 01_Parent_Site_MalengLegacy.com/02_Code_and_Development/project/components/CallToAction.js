import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(233, 69, 96, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(15, 52, 96, 0.1) 0%, transparent 50%)'
      }}></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card border-accent/30 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your <span className="gradient-text">Legacy</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're seeking strategic partnerships, investment opportunities, or integrated business solutions — let's start the conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Schedule Consultation
            </Link>
            <Link href="/investor-relations" className="btn-secondary w-full sm:w-auto">
              Investor Information
            </Link>
            <a href="mailto:partnerships@malenglegacy.co.za" className="btn-outline w-full sm:w-auto">
              Partnership Inquiries
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-700">
            <div>
              <div className="text-3xl mb-2">📞</div>
              <div className="text-sm text-gray-400 mb-1">Call Us</div>
              <a href="tel:+27738847449" className="text-accent hover:underline font-semibold">
                +27 73 884 7449
              </a>
            </div>
            <div>
              <div className="text-3xl mb-2">✉️</div>
              <div className="text-sm text-gray-400 mb-1">Email Us</div>
              <a href="mailto:info@malenglegacy.co.za" className="text-accent hover:underline font-semibold">
                info@malenglegacy.co.za
              </a>
            </div>
            <div>
              <div className="text-3xl mb-2">📍</div>
              <div className="text-sm text-gray-400 mb-1">Visit Us</div>
              <div className="text-white font-semibold">Gauteng, South Africa</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
