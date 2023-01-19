import React from 'react';
import { NavLink } from 'react-router-dom';

import { planetsNavBarArr } from '../../navbarData';

export default function DestinationNavbar() {
  const planetsNavLinks = planetsNavBarArr.map(planet => (
    <li>
      <NavLink
        to={planet.path}
        className="hover:border-b-4 hover:border-gray focus:border-b-4 active:border-gray pb-2"
        key={planet.id}
      >
        {planet.name}
      </NavLink>
    </li>
  ));

  return (
    <ul className="text-lightBlue font-h2 text-base font-normal leading-5 tracking-wider flex gap-6 items-center justify-center mb-8 lg:justify-start">
      {planetsNavLinks}
    </ul>
  );
}
