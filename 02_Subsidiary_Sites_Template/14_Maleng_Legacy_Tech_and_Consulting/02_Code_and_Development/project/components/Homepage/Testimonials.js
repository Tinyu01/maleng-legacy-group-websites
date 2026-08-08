import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import testimonials from '../../data/testimonials.json';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const featured = testimonials.homepage || [];

  useEffect(() => {
    if (!autoPlay || featured.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featured.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, featured.length]);

  if (featured.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featured.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featured.length) % featured.length);
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-primary/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-full mb-6">
            <span className="text-accent font-bold text-sm">CLIENT SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hear from clients who've transformed their businesses with us
          </h2>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div className="grid md:grid-cols-2 gap-6 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {[currentIndex, (currentIndex + 1) % featured.length].map((index) => {
                const testimonial = featured[index];
                const isVisible = index === currentIndex;
                return (
                  <motion.div
                    key={`${index}-${testimonial.author}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className={`hidden md:block ${isVisible ? 'md:col-span-1' : 'md:col-span-1'}`}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </motion.div>
                );
              })}
              {featured.length > 0 && (
                <motion.div
                  key={`mobile-${currentIndex}-${featured[currentIndex].author}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="md:hidden col-span-1"
                >
                  <TestimonialCard testimonial={featured[currentIndex]} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {featured.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 transition-all ${
                    index === currentIndex
                      ? 'bg-accent w-8'
                      : 'bg-gray-500 hover:bg-gray-400 w-2'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-accent/50 rounded-lg transition-all text-accent"
              >
                <FaChevronLeft size={20} />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-accent/20 backdrop-blur-sm border border-accent/50 rounded-lg transition-all text-accent"
              >
                <FaChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full flex flex-col hover:border-accent/50 transition-all duration-300">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-accent" size={16} />
          ))}
        </div>

        <p className="text-lg text-gray-200 mb-6 flex-grow leading-relaxed">
          "{testimonial.quote}"
        </p>

        <div className="border-t border-white/10 pt-4">
          <div className="font-bold text-white">{testimonial.author}</div>
          <div className="text-sm text-gray-400">
            {testimonial.role} {testimonial.company && `• ${testimonial.company}`}
          </div>
        </div>
      </div>
    </motion.div>
  );
}