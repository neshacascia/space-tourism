import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TechnologyNavbar() {
  return (
    <ul className="flex gap-4 my-8 sm:mb-11">
      <li className="w-10 h-10 sm:w-techNavButton sm:h-techNavButton">
        <NavLink
          to="/technology/launch-vehicle"
          className="text-white bg-transparent outline outline-gray outline-1 rounded-full w-full h-full flex justify-center items-center hover:outline-white focus:bg-white focus:text-darkBlue sm:text-2xl"
        >
          1
        </NavLink>
      </li>

      <li className="w-10 h-10 sm:w-techNavButton sm:h-techNavButton">
        <NavLink
          to="/technology/spaceport"
          className="text-white bg-transparent outline outline-gray outline-1 rounded-full w-full h-full flex justify-center items-center hover:outline-white focus:bg-white focus:text-darkBlue sm:text-2xl"
        >
          2
        </NavLink>
      </li>

      <li className="w-10 h-10 sm:w-techNavButton sm:h-techNavButton">
        <NavLink
          to="/technology/space-capsule"
          className="text-white bg-transparent outline outline-gray outline-1 rounded-full w-full h-full flex justify-center items-center hover:outline-white focus:bg-white focus:text-darkBlue sm:text-2xl"
        >
          3
        </NavLink>
      </li>
    </ul>
  );
}
