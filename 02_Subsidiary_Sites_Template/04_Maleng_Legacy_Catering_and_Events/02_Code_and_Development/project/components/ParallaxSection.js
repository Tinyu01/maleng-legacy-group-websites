import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxSection({ children, backgroundImage, backgroundColor = 'transparent', videoUrl = null }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background Layer */}
      {(backgroundImage || videoUrl) && (
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          {videoUrl ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          )}
          <div className={`absolute inset-0 ${backgroundColor}`}></div>
        </motion.div>
      )}

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
