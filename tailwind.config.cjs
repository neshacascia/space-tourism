/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./src/assets/home/background-home-mobile.jpg')",
      },
      colors: {
        lightBlue: '#D0D6F9',
        darkBlue: '#0B0D17',
      },
      fontFamily: {
        h1: ['Bellefair'],
        h2: ['Barlow Condensed'],
        body: ['Barlow'],
      },
      fontSize: {
        h1: '5rem',
        button: '1.25rem',
      },
      width: {
        button: '9.375rem',
      },
      height: {
        button: '9.375rem',
      },
    },
  },
  plugins: [],
};
