import React from 'react';
import { NavLink } from 'react-router-dom';
import { crewNavBarArr } from '../../navbarData';

export default function CrewNavbar() {
  const crewNavLinks = crewNavBarArr.map(crew => (
    <NavLink
      to={crew.path}
      className="bg-gray rounded-full w-2.5 h-2.5 hover:bg-lightGray focus:bg-white lg:w-4 lg:h-4"
      key={crew.id}
    ></NavLink>
  ));
  return <ul className="flex gap-4 py-8">{crewNavLinks}</ul>;
}
