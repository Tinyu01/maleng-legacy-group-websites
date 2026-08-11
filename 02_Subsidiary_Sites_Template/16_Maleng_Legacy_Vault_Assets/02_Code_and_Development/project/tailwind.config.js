module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a2e',
        secondary: '#0f3460',
        accent: '#e94560',
        gold: '#d4af37',
        success: '#00d084',
        surface: '#16213e',
      },
      fontSize: {
        'display-lg': '44px',
        'display-md': '36px',
      },
      boxShadow: {
        'btn': '0 4px 15px rgba(229, 69, 96, 0.3)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
