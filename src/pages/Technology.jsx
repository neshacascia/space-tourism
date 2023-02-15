import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from '../components/context/Context';
import Navbar from '../components/navbars/Navbar';
import TechnologyDetails from '../components/details/TechnologyDetails';

import data from '../../data.json';

export default function Technology() {
  const { closeModal } = useContext(Context);

  return (
    <div className="bg-technology bg-no-repeat bg-cover min-h-full sm:bg-tabletTechnology lg:bg-desktopTechnology">
      <Navbar />
      <section
        onClick={closeModal}
        className="flex flex-col items-center sm:block lg:ml-40"
      >
        <div className="text-white font-h2 text-base leading-5 tracking-widest pb-8 sm:text-xl sm:mt-10 sm:ml-10 lg:text-2xl lg:pb-2 lg:mt-14">
          <h2>
            <span className="text-gray font-bold pr-2.5 lg:mr-7">03</span>
            SPACE LAUNCH 101
          </h2>
        </div>

        <div className="technology-right">
          <Routes>
            <Route
              exact
              path="/"
              element={<TechnologyDetails tech={data.technology[0]} />}
            ></Route>

            <Route
              exact
              path="/launch-vehicle"
              element={<TechnologyDetails tech={data.technology[0]} />}
            ></Route>

            <Route
              exact
              path="/spaceport"
              element={<TechnologyDetails tech={data.technology[1]} />}
            ></Route>

            <Route
              exact
              path="/space-capsule"
              element={<TechnologyDetails tech={data.technology[2]} />}
            ></Route>
          </Routes>
        </div>
      </section>
    </div>
  );
}
