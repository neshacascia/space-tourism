/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./src/assets/home/background-home-mobile.jpg')",
        destination:
          "url('./src/assets/destination/background-destination-mobile.jpg')",
        crew: "url('./src/assets/crew/background-crew-mobile.jpg')",
        technology:
          "url('./src/assets/technology/background-technology-mobile.jpg')",
      },
      colors: {
        lightBlue: '#D0D6F9',
        darkBlue: '#0B0D17',
        mobileMenu: 'rgba(255, 255, 255, 0.04)',
        gray: 'rgb(72, 74, 80)',
        lightGray: 'rgb(145, 147, 152)',
      },
      fontFamily: {
        h1: ['Bellefair'],
        h2: ['Barlow Condensed'],
        body: ['Barlow'],
      },
      fontSize: {
        h1: '5rem',
        button: '1.25rem',
        planetH1: '3.5rem',
      },
      width: {
        button: '9.375rem',
        planet: '10.625rem',
        crew: '20.4375rem',
        tech: '23.4375rem',
      },
      height: {
        button: '9.375rem',
        crew: '13.9375rem',
        tech: '10.625rem',
      },
      backdropBlur: {
        mobileMenu: '40.7742px',
      },
    },
  },
  plugins: [],
};
