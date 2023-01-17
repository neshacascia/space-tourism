import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import hamburgerMenu from '../assets/shared/icon-hamburger.svg';

export default function Navbar(props) {
  function handleClick() {
    return (
      <ul className="bg-white w-4">
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
    );
  }
  return (
    <nav className="flex justify-between items-center p-6 h-24">
      <img src={logo} className="w-10 h-10" />
      <div></div>
      <button onClick={handleClick}>
        <img src={hamburgerMenu} className="w-6 h-5" />
      </button>
    </nav>
  );
}
