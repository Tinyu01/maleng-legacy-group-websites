module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#04132a',
        secondary: '#0f4a82',
        accent: '#f4b41a',
        highlight: '#14d2d1',
        gold: '#d4af37',
        success: '#20d8c9',
        surface: '#071224',
        soft: '#0d1b34',
        // B2B 2026 Professional Colors
        'b2b-primary': '#003366',
        'b2b-secondary': '#00A896',
        'b2b-accent': '#00D084',
        'b2b-dark': '#1A1A1A',
        'b2b-light': '#F5F5F5',
        'b2b-alert': '#E74C3C',
      },
      fontSize: {
        'display': '44px',
        'h1': '32px',
        'h2': '24px',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'Open Sans', 'sans-serif'],
      },
      animation: {
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
