import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg';
import hamburgerMenu from '../../assets/shared/icon-hamburger.svg';
import { Context } from '../Context';

export default function Navbar(props) {
  const { openModal } = useContext(Context);

  return (
    <nav className="flex justify-between items-center h-24 pl-6">
      <img src={logo} className="w-10 h-10" />
      <div></div>
      <ul className="hidden sm:text-white sm:font-h2 tracking-wider sm:flex sm:justify-center sm:items-center sm:gap-8 sm:w-tabletNav sm:h-tabletNav sm:bg-mobileMenu sm:backdrop-blur-mobileMenu">
        <NavLink
          to="/"
          className="hover:border-b-4 hover:border-lightGray focus:border-b-4 pb"
        >
          HOME
        </NavLink>
        <NavLink
          to="/destination"
          className="hover:border-b-4 hover:border-lightGray focus:border-b-4 pb"
        >
          DESTINATION
        </NavLink>
        <NavLink
          to="/crew"
          className="hover:border-b-4 hover:border-lightGray focus:border-b-4 pb"
        >
          CREW
        </NavLink>
        <NavLink
          to="/technology"
          className="hover:border-b-4 hover:border-lightGray focus:border-b-4 pb"
        >
          TECHNOLOGY
        </NavLink>
      </ul>

      <button onClick={openModal} className="pr-6 sm:hidden">
        <img src={hamburgerMenu} className="w-6 h-5" />
      </button>
    </nav>
  );
}
