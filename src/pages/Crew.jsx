import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CrewDetails from '../components/CrewDetails';
import CrewNavbar from '../components/CrewNavbar';

import data from '../../data.json';

export default function Crew() {
  return (
    <section>
      <div className="crew-left">
        <h2>
          <span>02</span>MEET YOUR CREW
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
        <CrewNavbar />
      </div>
    </section>
  );
}
