/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['oranienbaum', 'sans-serif'],
        body: ['rota', 'sans-serif'],
        'rota': ['Rota Regular', 'sans-serif'], // Add Rota Regular font
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #333333 1px, transparent 1px), linear-gradient(to bottom, #333333 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
      colors: {
        black: '#000000',
      },
      fontSize: {
        '7xl': '5rem',      // 80px
        '3xl': '1.875rem',  // 30px
        'xl': '1.25rem',    // 20px
        'lg': '1.125rem',   // 18px
        'base': '1rem',     // 16px
        'sm': '0.875rem',  // 14px
        'xs': '0.75rem',   // 12px
        '2xs': '0.625rem', // 10px
        '3xs': '0.5rem',   // 8px
      },
    },
  },
  plugins: [],
}

