import React from 'react';
import { NavLink } from 'react-router-dom';

import { planetsNavBarArr } from '../../navbarData';

export default function DestinationNavbar() {
  const activeStyle = {
    borderBottom: 'solid white 4px',
  };

  const planetsNavLinks = planetsNavBarArr.map(planet => (
    <li>
      <NavLink
        to={planet.path}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className="hover:border-b-4 hover:border-gray active:border-gray pb-2"
        key={planet.id}
        end
      >
        {planet.name}
      </NavLink>
    </li>
  ));

  return (
    <ul className="text-lightBlue font-h2 text-base font-normal leading-5 tracking-wider flex items-center justify-center gap-6 mb-8 lg:justify-start">
      {planetsNavLinks}
    </ul>
  );
}
