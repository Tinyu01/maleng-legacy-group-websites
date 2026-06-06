import { motion } from 'framer-motion';

// Tech-themed background images for each service category
const serviceImages = {
    default: {
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
        overlay: 'from-black/70 via-black/50 to-black/70',
    },
    'software-solutions': {
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80',
        overlay: 'from-blue-900/75 via-blue-900/50 to-indigo-900/75',
    },
    'hosting-infrastructure': {
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
        overlay: 'from-cyan-900/75 via-cyan-900/50 to-teal-900/75',
    },
    'consulting': {
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
        overlay: 'from-amber-900/75 via-amber-900/50 to-orange-900/75',
    },
    'connectivity': {
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
        overlay: 'from-red-900/75 via-red-900/50 to-rose-900/75',
    },
    'security-surveillance': {
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80',
        overlay: 'from-purple-900/75 via-purple-900/50 to-violet-900/75',
    },
    'design-creative': {
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1920&q=80',
        overlay: 'from-pink-900/75 via-pink-900/50 to-rose-900/75',
    },
};

export default function ServiceBackground({ category, variant = 'hero' }) {
    const bg = serviceImages[category?.id] || serviceImages.default;

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                style={{ backgroundImage: `url(${bg.image})` }}
            />

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${bg.overlay}`} />

            {/* Tech Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5 L25 15 L20 25 L15 15 Z' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3Ccircle cx='20' cy='15' r='2' fill='rgba(255,255,255,0.08)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Animated Circuit Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M0 200 L100 200 L150 150 L250 150"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <motion.path
                    d="M400 300 L500 300 L550 250 L650 250"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
                />
            </svg>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-white/40"
                        animate={{
                            y: [0, -30, -60],
                            opacity: [0, 0.6, 0],
                            x: [0, (Math.random() - 0.5) * 40],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 3,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatDelay: Math.random() * 5,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Bottom Fade for smoother transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
        </div>
    );
}