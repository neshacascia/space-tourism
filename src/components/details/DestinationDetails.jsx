import React from 'react';
import DestinationNavbar from '../navbars/DestinationNavbar';

export default function DestinationDetails({ destination }) {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img src={destination.images.png} className="w-planet h-planet mb-7" />
      </div>

      <DestinationNavbar />

      <div className="flex flex-col items-center px-6">
        <h1 className="text-white font-h1 text-planetH1 leading-10 text-center">
          {destination.name.toUpperCase()}
        </h1>
        <p className="text-lightBlue font-body text-center leading-6 pt-4 pb-8">
          {destination.description}
        </p>
        <hr className="w-full border border-gray" />
        <div className="flex flex-col items-center gap-8 pt-8">
          <div className="">
            <h4 className="text-lightBlue font-h2 leading-5 tracking-wider text-center mb-3">
              AVG. DISTANCE
            </h4>
            <span className="text-white font-h1 text-3xl text-center">
              {destination.distance.toUpperCase()}
            </span>
          </div>

          <div className="travel-time">
            <h4 className="text-lightBlue font-h2 leading-5 tracking-wider text-center mb-3">
              EST. TRAVEL TIME
            </h4>
            <span className="text-white font-h1 text-3xl text-center mb-14">
              {destination.travel.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}