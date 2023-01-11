import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav>
      <img />
      <div></div>
      <ul>
        <Link to="/">
          <span>00</span> Home
        </Link>
        <Link to="/destination">
          <span>01</span> Destination
        </Link>
        <Link to="/crew">
          <span>02</span> Crew
        </Link>
        <Link to="/technology">
          <span>03</span> Technology
        </Link>
      </ul>
    </nav>
  );
}
