import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../context/Context';

import logo from '/assets/shared/logo.svg';
import hamburgerMenu from '/assets/shared/icon-hamburger.svg';

import { navBarArr } from '../../navbarData';

export default function Navbar(props) {
  const { openModal } = useContext(Context);

  const activeStyle = {
    borderBottom: 'solid white 3px',
  };

  const navLinks = navBarArr.map(nav => (
    <NavLink
      to={nav.path}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      className="hover:border-b-4 hover:border-lightGray active:border-white focus:border-white focus:border-b-4 h-full flex items-center pb"
      key={nav.id}
    >
      <span className="hidden font-bold pr-3 lg:inline">{nav.num}</span>
      {nav.name}
    </NavLink>
  ));

  return (
    <nav className="h-24 flex justify-between items-center pl-6 lg:pt-10">
      <img src={logo} className="w-10 h-10 lg:ml-14 lg:mr-14" />
      <hr className="hidden w-navBorder border border-gray lg:inline " />
      <ul className="hidden sm:text-white sm:font-h2 tracking-widest sm:bg-mobileMenu sm:backdrop-blur-mobileMenu sm:w-tabletNav sm:h-tabletNav sm:flex sm:justify-center sm:items-center sm:gap-8 lg:w-desktopNav lg:justify-start lg:gap-12 lg:pl-28 ">
        {navLinks}
      </ul>

      <button onClick={openModal} className="pr-6 sm:hidden">
        <img src={hamburgerMenu} className="w-6 h-5" />
      </button>
    </nav>
  );
}
