import React from 'react';
import CrewNavbar from '../navbars/CrewNavbar';

export default function CrewDetails({ crew }) {
  return (
    <div className="h-screen flex flex-col items-center px-6 sm:h-auto sm:flex-col-reverse md:px-20 lg:flex-row-reverse lg:justify-end lg:items-start lg:gap-32">
      <div>
        <img
          src={crew.images.png}
          className="w-crew h-crew object-contain sm:w-auto sm:h-tabletCrew sm:object-cover lg:w-desktopCrew lg:object-contain"
        />
      </div>

      <hr className="w-full border border-gray sm:hidden" />

      <div className="flex flex-col sm:w-tabletCrewText sm:flex-col-reverse items-center lg:flex lg:flex-col-reverse lg:items-start lg:mt-10">
        <CrewNavbar />

        <div className="flex flex-col items-center sm:mt-14 lg:w-desktopCrewPara lg:items-start">
          <span className="text-lightGray font-h1 text-base mb-2 sm:text-2xl lg:text-3xl lg:mb-4">
            {crew.role.toUpperCase()}
          </span>
          <h1 className="text-white font-h1 text-2xl mb-4 sm:text-4xl lg:text-5xl lg:mb-7">
            {crew.name.toUpperCase()}
          </h1>
          <p className="text-lightBlue font-body leading-6 text-center lg:text-left lg:mb-14 lg:text-lg">
            {crew.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
