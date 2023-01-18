import React, { useContext } from 'react';
import logo from '../assets/shared/logo.svg';
import hamburgerMenu from '../assets/shared/icon-hamburger.svg';
import { Context } from './Context';

export default function Navbar(props) {
  const { openModal } = useContext(Context);

  return (
    <nav className="flex justify-between items-center p-6 h-24">
      <img src={logo} className="w-10 h-10" />
      <div></div>
      <button onClick={openModal}>
        <img src={hamburgerMenu} className="w-6 h-5" />
      </button>
    </nav>
  );
}
