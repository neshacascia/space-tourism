import React from 'react';
import { NavLink } from 'react-router-dom';

export default function DestinationNavbar() {
  return (
    <ul className="text-lightBlue font-h2 text-base font-normal leading-5 tracking-wider flex gap-6 items-center justify-center mb-8 lg:justify-start">
      <li>
        <NavLink
          to="/destination/moon"
          className="hover:border-b-4 hover:border-gray focus:border-b-4 pb-2"
        >
          MOON
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/destination/mars"
          className="hover:border-b-4 hover:border-gray focus:border-b-4 pb-2"
        >
          MARS
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/destination/europa"
          className="hover:border-b-4 hover:border-gray focus:border-b-4 pb-2"
        >
          EUROPA
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/destination/titan"
          className="hover:border-b-4 hover:border-gray focus:border-b-4 pb-2"
        >
          TITAN
        </NavLink>
      </li>
    </ul>
  );
}
