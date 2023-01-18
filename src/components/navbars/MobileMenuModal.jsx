import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import closeButton from '../../assets/shared/icon-close.svg';

export default function MobileMenuModal() {
  const { closeModal } = useContext(Context);

  return (
    <div>
      <img
        src={closeButton}
        className="absolute right-0 z-20 pt-8 pr-7 cursor-pointer"
        onClick={closeModal}
      />

      <ul className="bg-mobileMenu backdrop-blur-mobileMenu h-screen fixed z-10 right-0 w-64 flex flex-col gap-8 pl-8 pt-28 text-white font-h2 font-normal text-base leading-5 tracking-wider sm:hidden">
        <li>
          <Link
            to="/"
            onClick={closeModal}
            className="hover:border-b-4 hover:border-lightGray focus:border-b-4 pb-2"
          >
            <span className="font-bold pr-2.5">00</span> HOME
          </Link>
        </li>

        <li>
          <Link
            to="/destination"
            onClick={closeModal}
            className="hover:border-b-4 hover:border-lightGray focus:border-b-4 pb-2"
          >
            <span className="font-bold pr-2.5">01</span> DESTINATION
          </Link>
        </li>

        <li>
          <Link
            to="/crew"
            onClick={closeModal}
            className="hover:border-b-4 hover:border-lightGray focus:border-b-4 pb-2"
          >
            <span className="font-bold pr-2.5">02</span> CREW
          </Link>
        </li>

        <li>
          <Link
            to="/technology"
            onClick={closeModal}
            className="hover:border-b-4 hover:border-lightGray focus:border-b-4 pb-2"
          >
            <span className="font-bold pr-2.5">03</span> TECHNOLOGY
          </Link>
        </li>
      </ul>
    </div>
  );
}
