import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DestinationNavbar from '../components/DestinationNavbar';
import DestinationDetails from '../components/DestinationDetails';

import data from '../../data.json';

export default function Destination(props) {
  return (
    <section>
      <div className="destination-left">
        <h2>
          <span>01</span>PICK YOUR DESTINATION
        </h2>
      </div>

      <div className="destination-right">
        <DestinationNavbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<DestinationDetails destination={data.destinations[0]} />}
          ></Route>

          <Route
            path="/moon"
            element={<DestinationDetails destination={data.destinations[0]} />}
          ></Route>

          <Route
            path="/mars"
            element={<DestinationDetails destination={data.destinations[1]} />}
          ></Route>

          <Route
            path="/europa"
            element={<DestinationDetails destination={data.destinations[2]} />}
          ></Route>

          <Route
            path="/titan"
            element={<DestinationDetails destination={data.destinations[3]} />}
          ></Route>
        </Routes>
      </div>
    </section>
  );
}
