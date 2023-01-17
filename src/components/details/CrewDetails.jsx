import React from 'react';
import CrewNavbar from '../navbars/CrewNavbar';

export default function CrewDetails({ crew }) {
  return (
    <div className="h-screen flex flex-col items-center px-6">
      <div>
        <img src={crew.images.png} className="w-crew h-crew object-contain" />
      </div>

      <hr className="w-full border border-gray" />

      <CrewNavbar />

      <div className="flex flex-col items-center">
        <span className="text-lightGray font-h1 text-base mb-2">
          {crew.role.toUpperCase()}
        </span>
        <h1 className="text-white font-h1 text-2xl mb-4">
          {crew.name.toUpperCase()}
        </h1>
        <p className="text-lightBlue font-body leading-6 text-center">
          {crew.bio}
        </p>
      </div>
    </div>
  );
}
