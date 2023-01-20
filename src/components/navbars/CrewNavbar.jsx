import React from 'react';
import { NavLink } from 'react-router-dom';
import { crewNavBarArr } from '../../navbarData';

export default function CrewNavbar() {
  const activeStyle = {
    background: 'white',
  };

  const notActiveStyle = {
    backgroundColor: 'rgb(72, 74, 80)',
  };

  const crewNavLinks = crewNavBarArr.map(crew => (
    <NavLink
      to={crew.path}
      style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
      className="rounded-full w-2.5 h-2.5 hover:bg-lightGray lg:w-4 lg:h-4"
      key={crew.id}
      end
    ></NavLink>
  ));
  return <ul className="flex gap-4 py-8">{crewNavLinks}</ul>;
}
