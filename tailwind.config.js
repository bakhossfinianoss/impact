/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'], // Change from 'purge' to 'content'
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue': '#0883a6',
        'lightBlue': '#cee8f2',
        'darkGray': '#555454',
        'mediumGray': '#4b4f58',
        'lightGray': '#d3d3d361',
        'orange': '#f37e2a',
        'gray': "#808080"
      },
        screens: {
          'md-sm': '650px',
          'md-md': '770px',
          'md-768': '768px',
          'md-640': '640px',
          'below-1030': { max: '1030px' },
          'above-1030': '1030px'
        }
    },
  },
  plugins: [],
};
