import React from 'react';
import DestinationNavbar from '../navbars/DestinationNavbar';

export default function DestinationDetails({ destination }) {
  return (
    <div className="w-screen flex flex-col items-center md:flex-col lg:flex-row lg:justify-center lg:gap-60 lg:mr-40">
      <div>
        <img
          src={destination.images.png}
          className="w-planet h-planet object-contain mb-7 sm:w-tabletPlanet sm:h-tabletPlanet sm:my-14 lg:w-desktopPlanet lg:h-desktopPlanet lg:ml-56"
        />
      </div>

      <div className="mb-20 lg:flex-col lg:w-desktopPlanetText">
        <DestinationNavbar />

        <div className="flex flex-col items-center px-6 lg:items-start lg:px-0">
          <h1 className="text-white font-h1 text-planetH1 leading-10 text-center sm:text-tabletPlanetH1 sm:my-8">
            {destination.name.toUpperCase()}
          </h1>
          <p className="text-lightBlue font-body text-center leading-6 pt-4 pb-8 sm:w-tabletText lg:text-left lg:text-lg">
            {destination.description}
          </p>
          <hr className="w-full border border-gray" />
          <div className="flex flex-col items-center gap-8 pt-8 sm:flex-row sm:gap-16">
            <div className="">
              <h4 className="text-lightBlue font-h2 leading-5 tracking-wider text-center mb-3 lg:text-left">
                AVG. DISTANCE
              </h4>
              <span className="text-white font-h1 text-3xl text-center">
                {destination.distance.toUpperCase()}
              </span>
            </div>

            <div>
              <h4 className="text-lightBlue font-h2 leading-5 tracking-wider text-center mb-3 lg:text-left">
                EST. TRAVEL TIME
              </h4>
              <span className="text-white font-h1 text-3xl text-center mb-14">
                {destination.travel.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
