import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TechnologyNavbar() {
  return (
    <ul className="flex gap-4 my-8 sm:mb-11 lg:flex-col lg:gap-8">
      <li className="w-10 h-10 sm:w-techNavButton sm:h-techNavButton lg:w-desktopTechNav lg:h-desktopTechNav">
        <NavLink
          to="/technology/launch-vehicle"
          className="text-white bg-transparent outline outline-gray outline-1 rounded-full w-full h-full flex justify-center items-center hover:outline-white focus:bg-white focus:text-darkBlue sm:text-2xl lg:text-3xl"
        >
          1
        </NavLink>
      </li>

      <li className="w-10 h-10 sm:w-techNavButton sm:h-techNavButton lg:w-desktopTechNav lg:h-desktopTechNav">
        <NavLink
          to="/technology/spaceport"
          className="text-white bg-transparent outline outline-gray outline-1 rounded-full w-full h-full flex justify-center items-center hover:outline-white focus:bg-white focus:text-darkBlue sm:text-2xl lg:text-3xl"
        >
          2
        </NavLink>
      </li>

      <li className="w-10 h-10 sm:w-techNavButton sm:h-techNavButton lg:w-desktopTechNav lg:h-desktopTechNav">
        <NavLink
          to="/technology/space-capsule"
          className="text-white bg-transparent outline outline-gray outline-1 rounded-full w-full h-full flex justify-center items-center hover:outline-white focus:bg-white focus:text-darkBlue sm:text-2xl lg:text-3xl"
        >
          3
        </NavLink>
      </li>
    </ul>
  );
}
