import { motion } from 'framer-motion';

// Tech-themed background images for each category
const categoryImages = {
  // Default / Tech & Consulting
  default: {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    overlay: 'from-black/70 via-black/50 to-black/70',
    pattern: 'circuits',
  },
  
  // Software & Digital Solutions
  'software-solutions': {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80',
    overlay: 'from-blue-900/70 via-blue-900/50 to-indigo-900/70',
    pattern: 'code',
  },
  
  // Managed Hosting & Infrastructure
  'hosting-infrastructure': {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    overlay: 'from-cyan-900/70 via-cyan-900/50 to-teal-900/70',
    pattern: 'server',
  },
  
  // Consulting Services
  'consulting': {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
    overlay: 'from-amber-900/70 via-amber-900/50 to-orange-900/70',
    pattern: 'strategy',
  },
  
  // Connectivity Services
  'connectivity': {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
    overlay: 'from-red-900/70 via-red-900/50 to-rose-900/70',
    pattern: 'network',
  },
  
  // Security & Surveillance
  'security-surveillance': {
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80',
    overlay: 'from-purple-900/70 via-purple-900/50 to-violet-900/70',
    pattern: 'shield',
  },
  
  // Design & Creative Services
  'design-creative': {
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1920&q=80',
    overlay: 'from-pink-900/70 via-pink-900/50 to-rose-900/70',
    pattern: 'creative',
  },
  
  // About Page
  about: {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
    overlay: 'from-primary/80 via-primary/60 to-primary/80',
    pattern: 'dots',
  },
  
  // Contact Page
  contact: {
    image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80',
    overlay: 'from-primary/80 via-primary/60 to-primary/80',
    pattern: 'dots',
  },
  
  // Careers Page
  careers: {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
    overlay: 'from-primary/80 via-primary/60 to-primary/80',
    pattern: 'dots',
  },
  
  // Blog Page
  blog: {
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80',
    overlay: 'from-primary/80 via-primary/60 to-primary/80',
    pattern: 'dots',
  },
  
  // Security Page
  security: {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
    overlay: 'from-primary/80 via-primary/60 to-primary/80',
    pattern: 'shield',
  },
  
  // Pricing Page
  pricing: {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
    overlay: 'from-primary/80 via-primary/60 to-primary/80',
    pattern: 'circuits',
  },
};

export default function ImageBackground({ category = 'default', page = null, variant = 'hero' }) {
  // Determine which image set to use
  let imageKey = category;
  if (page && categoryImages[page]) {
    imageKey = page;
  } else if (categoryImages[category]) {
    imageKey = category;
  } else {
    imageKey = 'default';
  }
  
  const bg = categoryImages[imageKey];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${bg.image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bg.overlay}`} />
      
      {/* Animated Gradient Overlay - creates moving light effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Tech Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L40 20 L30 30 L20 20 Z' fill='none' stroke='rgba(255,255,255,0.15)' stroke-width='1'/%3E%3Ccircle cx='30' cy='20' r='2' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Dynamic Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0], 
              y: [-20, -100],
              x: [0, (Math.random() - 0.5) * 50]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: Math.random() * 4
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Scanning Line Effect */}
      <motion.div 
        className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/5 to-transparent"
        animate={{ top: ['-20%', '100%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}