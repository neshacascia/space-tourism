import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CrewNavbar() {
  return (
    <ul className="flex gap-4 py-8">
      <NavLink
        to="/crew/douglas"
        className="bg-gray rounded-full w-2.5 h-2.5 hover:bg-lightGray focus:bg-white lg:w-4 lg:h-4"
      ></NavLink>

      <NavLink
        to="/crew/mark"
        className="bg-gray rounded-full w-2.5 h-2.5 hover:bg-lightGray focus:bg-white lg:w-4 lg:h-4"
      ></NavLink>

      <NavLink
        to="/crew/victor"
        className="bg-gray rounded-full w-2.5 h-2.5 hover:bg-lightGray focus:bg-white lg:w-4 lg:h-4"
      ></NavLink>

      <NavLink
        to="/crew/anousheh"
        className="bg-gray rounded-full w-2.5 h-2.5 hover:bg-lightGray focus:bg-white lg:w-4 lg:h-4"
      ></NavLink>
    </ul>
  );
}
