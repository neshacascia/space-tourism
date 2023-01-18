import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './Context';

export default function MobileMenuModal() {
  const { closeModal } = useContext(Context);

  return (
    <div>
      <ul className="bg-mobileMenu backdrop-blur-mobileMenu h-screen fixed z-10 right-0 w-64 flex flex-col gap-8 pl-8 pt-28 text-white font-h2 font-normal text-base leading-5 tracking-wider">
        <li>
          <Link to="/" onClick={closeModal}>
            <span className="font-bold pr-2.5">00</span> HOME
          </Link>
        </li>
        <li>
          <Link to="/destination" onClick={closeModal}>
            <span className="font-bold pr-2.5">01</span> DESTINATION
          </Link>
        </li>
        <li>
          <Link to="/crew" onClick={closeModal}>
            <span className="font-bold pr-2.5">02</span> CREW
          </Link>
        </li>
        <li>
          <Link to="/technology" onClick={closeModal}>
            <span className="font-bold pr-2.5">03</span> TECHNOLOGY
          </Link>
        </li>
      </ul>
    </div>
  );
}
