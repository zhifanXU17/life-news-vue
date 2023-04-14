/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        LXGWWenKai: ['LXGWWenKai', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'darkMode-Button': 'button-show 0.5s ease-in-out',
        'link-animation': 'link-bounce 0.5s ease-in-out',
      },
      keyframes: {
        'button-show': {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'link-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20%)' },
        },
      },
    },
  },
  plugins: [],
}
