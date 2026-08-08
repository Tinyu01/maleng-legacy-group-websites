import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-gradient-to-br from-soft to-surface border border-white/10 rounded-xl p-6 hover:border-highlight/50 transition-all duration-300">
        {/* Quote mark */}
        <div className="text-4xl text-highlight/20 mb-2">❝</div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <FaStar
              key={i}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-gray-300 text-sm mb-6 leading-relaxed italic">
          "{testimonial.quote}"
        </p>

        {/* Author info */}
        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
          {testimonial.image && (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-highlight to-accent flex items-center justify-center text-xl font-bold text-white">
              {testimonial.image}
            </div>
          )}
          <div>
            <p className="text-white font-semibold text-sm">{testimonial.client}</p>
            <p className="text-gray-400 text-xs">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
