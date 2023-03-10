import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

import closeButton from '../../../public/assets/shared/icon-close.svg';

import { navBarArr } from '../../navbarData';

export default function MobileMenuModal() {
  const { closeModal } = useContext(Context);

  const navLinks = navBarArr.map(item => (
    <li key={item.id}>
      <Link
        to={item.path}
        onClick={closeModal}
        className="hover:border-b-4 hover:border-lightGray focus:border-b-4 pb-2"
      >
        <span className="font-bold pr-2.5">{item.num}</span> {item.name}
      </Link>
    </li>
  ));

  return (
    <div>
      <img
        src={closeButton}
        className="absolute right-0 z-20 pt-8 pr-7 cursor-pointer"
        onClick={closeModal}
      />

      <ul className="text-white bg-mobileMenu backdrop-blur-mobileMenu font-h2 font-normal text-base leading-5 tracking-wider w-64 h-screen flex flex-col gap-8 fixed z-10 right-0 pl-8 pt-28 sm:hidden">
        {navLinks}
      </ul>
    </div>
  );
}
