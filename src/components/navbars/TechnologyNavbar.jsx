import React from 'react';
import { NavLink } from 'react-router-dom';
import { techNavBarArr } from '../../navbarData';

export default function TechnologyNavbar() {
  const techNavLinks = techNavBarArr.map(tech => (
    <li className="w-10 h-10 sm:w-techNavButton sm:h-techNavButton lg:w-desktopTechNav lg:h-desktopTechNav">
      <NavLink
        to={tech.path}
        className="text-white bg-transparent outline outline-gray outline-1 rounded-full w-full h-full flex justify-center items-center hover:outline-white focus:bg-white focus:text-darkBlue sm:text-2xl lg:text-3xl"
        key={tech.id}
      >
        {tech.num}
      </NavLink>
    </li>
  ));
  return (
    <ul className="flex gap-4 my-8 sm:mb-11 lg:flex-col lg:gap-8">
      {techNavLinks}
    </ul>
  );
}
