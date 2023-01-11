import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CrewNavbar() {
  return (
    <ul className="crew-navbar">
      <li>
        <NavLink to="/crew/douglas" className="crew-nav-link"></NavLink>
      </li>
      <li>
        <NavLink to="/crew/mark" className="crew-nav-link"></NavLink>
      </li>
      <li>
        <NavLink to="/crew/victor" className="crew-nav-link"></NavLink>
      </li>
      <li>
        <NavLink to="/crew/anousheh" className="crew-nav-link"></NavLink>
      </li>
    </ul>
  );
}
