import React, { useContext } from 'react';
import Navbar from '../components/navbars/Navbar';
import { Context } from '../components/Context';

export default function Home(props) {
  const { closeModal } = useContext(Context);

  return (
    <div className="bg-home bg-no-repeat bg-cover h-screen sm:bg-tabletHome sm:h-full lg:bg-desktopHome lg:h-screen">
      <Navbar />
      <section
        onClick={closeModal}
        className="px-6 flex flex-col justify-center items-center gap-20 text-lightBlue mt-12 sm:mt-24 lg:flex-row lg:mx-60 lg:mt-32 lg:justify-between"
      >
        <div className="left w-homeText flex flex-col gap-4 text-center sm:w-desktopHomeText lg:items-start lg:w-96">
          <h2 className="font-h2 text-base font-normal sm:text-xl lg:text-3xl">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className="font-h1 text-h1 sm:text-tabletH1">SPACE</h1>
          <p className="h-homeText font-body text-base leading-6 sm:w-desktopHomeText lg:text-left lg:text-lg lg:mb-32">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div>
          <button className="bg-white font-h1 text-darkBlue text-button h-button w-button rounded-full sm:w-tabletButton sm:h-tabletButton sm:text-3xl sm:mb-20">
            EXPLORE
          </button>
        </div>
      </section>
    </div>
  );
}
