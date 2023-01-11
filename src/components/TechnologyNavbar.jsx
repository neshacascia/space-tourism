import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TechnologyNavbar() {
  return (
    <ul className="tech-navbar">
      <li>
        <NavLink to="/technology/launch-vehicle" className="tech-nav-link">
          1
        </NavLink>
      </li>
      <li>
        <NavLink to="/technology/spaceport" className="tech-nav-link">
          2
        </NavLink>
      </li>
      <li>
        <NavLink to="/technology/space-capsule" className="tech-nav-link">
          3
        </NavLink>
      </li>
    </ul>
  );
}
