import React from 'react';
import { NavLink } from 'react-router-dom';

export default function DestinationNavbar() {
  return (
    <ul className="text-lightBlue font-h2 text-base font-normal leading-5 tracking-wider flex gap-6 items-center justify-center mb-8">
      <li>
        <NavLink to="/destination/moon" className="focus:border-b-4 pb-2">
          MOON
        </NavLink>
      </li>
      <li>
        <NavLink to="/destination/mars" className="focus:border-b-4 pb-2">
          MARS
        </NavLink>
      </li>
      <li>
        <NavLink to="/destination/europa" className="focus:border-b-4 pb-2">
          EUROPA
        </NavLink>
      </li>
      <li>
        <NavLink to="/destination/titan" className="focus:border-b-4 pb-2">
          TITAN
        </NavLink>
      </li>
    </ul>
  );
}
