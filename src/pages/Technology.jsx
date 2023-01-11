import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TechnologyDetails from '../components/TechnologyDetails';
import TechnologyNavbar from '../components/TechnologyNavbar';

import data from '../../data.json';

export default function Technology() {
  return (
    <section>
      <div className="technology-left">
        <h2>
          <span>03</span>SPACE LAUNCH 101
        </h2>
      </div>

      <div className="technology-right">
        <TechnologyNavbar />
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
  );
}
