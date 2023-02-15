import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbars/Navbar';
import { Context } from '../components/context/Context';

export default function Home(props) {
  const { closeModal } = useContext(Context);

  return (
    <div className="bg-home bg-no-repeat bg-cover min-h-full sm:bg-tabletHome lg:bg-desktopHome">
      <Navbar />
      <section
        onClick={closeModal}
        className="text-lightBlue flex flex-col justify-center items-center gap-20 px-6 mt-10 sm:mt-24 lg:flex-row lg:gap-96 lg:mx-60 lg:mt-24"
      >
        <div className="left text-center w-homeText flex flex-col gap-4 sm:w-desktopHomeText lg:items-start lg:w-96">
          <h2 className="font-h2 text-base font-normal sm:text-xl lg:text-3xl">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className="font-h1 text-h1 sm:text-tabletH1">SPACE</h1>
          <p className="font-body text-base leading-6 h-homeText sm:w-desktopHomeText lg:text-left lg:text-lg lg:mb-32">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div>
          <Link to="/destination">
            <button className="bg-white text-darkBlue font-h1 text-button h-button w-button rounded-full sm:w-tabletButton sm:h-tabletButton sm:text-3xl sm:mb-20 z-10 relative hvr-ripple-out">
              EXPLORE
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
