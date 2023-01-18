import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/assets/shared/logo.svg';
import hamburgerMenu from '../../../public/assets/shared/icon-hamburger.svg';
import { Context } from '../Context';

export default function Navbar(props) {
  const { openModal } = useContext(Context);

  return (
    <nav className="flex justify-between items-center h-24 pl-6 lg:pt-10">
      <img src={logo} className="w-10 h-10 lg:ml-14 lg:mr-14" />
      <hr className="w-navBorder border border-gray hidden lg:inline" />
      <ul className="hidden sm:text-white sm:font-h2 tracking-widest sm:flex sm:justify-center sm:items-center sm:gap-8 sm:w-tabletNav sm:h-tabletNav sm:bg-mobileMenu sm:backdrop-blur-mobileMenu lg:w-desktopNav lg:justify-start lg:pl-28 lg:gap-12">
        <NavLink
          to="/"
          className="hover:border-b-4 hover:border-lightGray focus:border-b-4 pb"
        >
          <span className="font-bold pr-3 hidden lg:inline">00</span>HOME
        </NavLink>
        <NavLink
          to="/destination"
          className="hover:border-b-4 hover:border-lightGray focus:border-b-4 pb"
        >
          <span className="font-bold pr-3 hidden lg:inline">01</span>DESTINATION
        </NavLink>
        <NavLink
          to="/crew"
          className="hover:border-b-4 hover:border-lightGray focus:border-b-4 pb"
        >
          <span className="font-bold pr-3 hidden lg:inline">02</span>CREW
        </NavLink>
        <NavLink
          to="/technology"
          className="hover:border-b-4 hover:border-lightGray focus:border-b-4 pb"
        >
          <span className="font-bold pr-3 hidden lg:inline">03</span>TECHNOLOGY
        </NavLink>
      </ul>

      <button onClick={openModal} className="pr-6 sm:hidden">
        <img src={hamburgerMenu} className="w-6 h-5" />
      </button>
    </nav>
  );
}
