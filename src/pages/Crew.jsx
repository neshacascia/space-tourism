import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from '../components/context/Context';
import Navbar from '../components/navbars/Navbar';
import CrewDetails from '../components/details/CrewDetails';

import data from '../../data.json';

export default function Crew() {
  const { closeModal } = useContext(Context);

  return (
    <div className="bg-crew bg-no-repeat bg-cover min-h-screen sm:bg-tabletCrew lg:bg-desktopCrew">
      <Navbar />
      <section
        onClick={closeModal}
        className="flex flex-col items-center sm:flex"
      >
        <div className="text-white font-h2 text-base leading-5 tracking-widest pb-8 sm:text-xl sm:self-start sm:mt-10 sm:ml-10 lg:text-2xl lg:pb-2 lg:mt-14 lg:ml-80">
          <h2>
            <span className="text-gray font-bold pr-2.5 lg:mr-7">02</span>
            MEET YOUR CREW
          </h2>
        </div>
        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={<CrewDetails crew={data.crew[0]} />}
            ></Route>

            <Route
              exact
              path="/douglas"
              element={<CrewDetails crew={data.crew[0]} />}
            ></Route>

            <Route
              exact
              path="/mark"
              element={<CrewDetails crew={data.crew[1]} />}
            ></Route>

            <Route
              exact
              path="/victor"
              element={<CrewDetails crew={data.crew[2]} />}
            ></Route>

            <Route
              exact
              path="/anousheh"
              element={<CrewDetails crew={data.crew[3]} />}
            ></Route>
          </Routes>
        </div>
      </section>
    </div>
  );
}
