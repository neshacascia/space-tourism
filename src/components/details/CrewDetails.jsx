import React from 'react';
import CrewNavbar from '../navbars/CrewNavbar';

export default function CrewDetails({ crew }) {
  return (
    <div className="h-screen flex flex-col items-center px-6 sm:flex-col-reverse sm:h-auto">
      <div>
        <img
          src={crew.images.png}
          className="w-crew h-crew object-contain sm:w-auto sm:h-tabletCrew sm:object-cover"
        />
      </div>

      <hr className="w-full border border-gray sm:hidden" />

      <CrewNavbar />

      <div className="flex flex-col items-center sm:mt-14">
        <span className="text-lightGray font-h1 text-base mb-2 sm:text-2xl">
          {crew.role.toUpperCase()}
        </span>
        <h1 className="text-white font-h1 text-2xl mb-4 sm:text-4xl">
          {crew.name.toUpperCase()}
        </h1>
        <p className="text-lightBlue font-body leading-6 text-center">
          {crew.bio}
        </p>
      </div>
    </div>
  );
}
