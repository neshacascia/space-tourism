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
        tabletHome: "url('./src/assets/home/background-home-tablet.jpg')",
        tabletDestination:
          "url('./src/assets/destination/background-destination-tablet.jpg')",
        tabletCrew: "url('./src/assets/crew/background-crew-tablet.jpg')",
        tabletTechnology:
          "url('./src/assets/technology/background-technology-tablet.jpg')",
        desktopHome: "url('./src/assets/home/background-home-desktop.jpg')",
        desktopDestination:
          "url('./src/assets/destination/background-destination-desktop.jpg')",
        desktopTechnology:
          "url('./src/assets/technology/background-technology-desktop.jpg')",
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
        tabletH1: '9.375rem',
        button: '1.25rem',
        planetH1: '3.5rem',
        tabletPlanetH1: '5rem',
      },
      width: {
        tabletNav: '28.125rem',
        desktopNav: '51.875rem',
        homeText: '20.4375rem',
        desktopHomeText: '27.8125rem',
        button: '9.375rem',
        tabletButton: '15.125rem',
        hoverButton: '28.125rem',
        planet: '10.625rem',
        tabletPlanet: '18.75rem',
        desktopPlanet: '27.8125rem',
        tabletPlanetText: '35.8125rem',
        desktopPlanetText: '27.8125rem',
        crew: '20.4375rem',
        desktopCrew: '35.504375rem',
        tabletText: '28.625rem',
        desktopCrewText: '30.53125rem',
        desktopCrewPara: '27.75rem',
        tech: '23.4375rem',
        desktopTech: '32.1875rem',
        techNavButton: '3.75rem',
        desktopTechNav: '5rem',
        desktopTechText: '29.375rem',
      },
      height: {
        tabletNav: '6rem',
        homeText: '7.8125rem',
        button: '9.375rem',
        tabletButton: '15.125rem',
        desktopPlanet: '27.8125rem',
        crew: '13.9375rem',
        desktopCrew: '35.504375rem',
        tabletCrew: '35.75rem',
        tech: '10.625rem',
        desktopTech: '32.9375rem',
        tabletTech: '19.275rem',
        techNavButton: '3.75rem',
        desktopTechNav: '5rem',
      },
      backdropBlur: {
        mobileMenu: '40.7742px',
      },
    },
  },
  plugins: [],
};
