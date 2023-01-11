import React from 'react';
import { NavLink } from 'react-router-dom';

export default function DestinationNavbar() {
  return (
    <ul className="destination-navbar">
      <li>
        <NavLink to="/destination/moon">MOON</NavLink>
      </li>
      <li>
        <NavLink to="/destination/mars">MARS</NavLink>
      </li>
      <li>
        <NavLink to="/destination/europa">EUROPA</NavLink>
      </li>
      <li>
        <NavLink to="/destination/titan">TITAN</NavLink>
      </li>
    </ul>
  );
}
