import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from '../components/Context';
import Navbar from '../components/Navbar';
import CrewDetails from '../components/CrewDetails';

import data from '../../data.json';

export default function Crew() {
  const { closeModal } = useContext(Context);

  return (
    <div className="bg-crew bg-no-repeat bg-cover h-full">
      <Navbar />
      <section onClick={closeModal} className="flex flex-col items-center">
        <div className="text-white font-h2 text-base leading-5 tracking-wider pb-8">
          <h2>
            <span className="text-gray font-bold pr-2.5">02</span>MEET YOUR CREW
          </h2>
        </div>

        <div className="crew-right">
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
