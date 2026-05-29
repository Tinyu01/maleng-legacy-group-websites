module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a1a2e',      // Dark navy (modern)
        'secondary': '#0f3460',    // Deep blue
        'accent': '#e94560',       // Modern coral/red
        'gold': '#d4af37',         // Premium gold
        'success': '#00d084',      // Modern green
        'surface': '#16213e',      // Cards background
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
      },
      spacing: {
        'section': '120px',
        'section-sm': '80px',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.3)',
        'btn': '0 4px 15px rgba(233, 69, 96, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)',
        'gradient-accent': 'linear-gradient(135deg, #e94560 0%, #ff6b7a 100%)',
      },
    },
  },
  plugins: [],
};
