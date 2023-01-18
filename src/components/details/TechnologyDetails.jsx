import React from 'react';
import TechnologyNavbar from '../navbars/TechnologyNavbar';

export default function TechnologyDetails({ tech }) {
  return (
    <div className="flex flex-col items-center h-screen">
      <img
        src={tech.images.portrait}
        className="w-tech h-tech object-cover object-center sm:w-screen sm:h-tabletTech  sm:mb-12"
      />

      <TechnologyNavbar />

      <div className="flex flex-col justify-center items-center px-6">
        <span className="text-lightBlue font-h2 text-base tracking-wider mb-2 sm:mb-4">
          THE TERMINOLOGY...
        </span>
        <h1 className="text-white font-h1 text-2xl mb-4 sm:text-4xl">
          {tech.name.toUpperCase()}
        </h1>
        <p className="text-lightBlue font-body text-center">
          {tech.description}
        </p>
      </div>
    </div>
  );
}
