/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#093D80',
          dark: '#040333',
        },
        secondary: {
          DEFAULT: '#0461D0',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #093D80 0%, #040333 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #0461D0 0%, #093D80 100%)',
      },
    },
  },
  plugins: [],
};