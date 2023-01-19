import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from '../components/Context';
import Navbar from '../components/navbars/Navbar';
import DestinationDetails from '../components/details/DestinationDetails';

import data from '../../data.json';

export default function Destination(props) {
  const { closeModal } = useContext(Context);

  return (
    <div className="bg-destination bg-no-repeat bg-cover h-full sm:bg-tabletDestination lg:bg-desktopDestination">
      <Navbar />
      <section
        onClick={closeModal}
        className="flex flex-col items-center pb-14 sm:block"
      >
        <div className="text-white font-h2 text-base leading-5 tracking-widest pb-8 sm:text-xl sm:mt-10 sm:ml-10 lg:text-3xl lg:ml-40 lg:mt-16">
          <h2 className="text-left">
            <span className="text-gray font-bold pr-2.5 lg:mr-7">01</span>
            PICK YOUR DESTINATION
          </h2>
        </div>

        <div className="destination-right">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <DestinationDetails destination={data.destinations[0]} />
              }
            ></Route>

            <Route
              path="/moon"
              element={
                <DestinationDetails destination={data.destinations[0]} />
              }
            ></Route>

            <Route
              path="/mars"
              element={
                <DestinationDetails destination={data.destinations[1]} />
              }
            ></Route>

            <Route
              path="/europa"
              element={
                <DestinationDetails destination={data.destinations[2]} />
              }
            ></Route>

            <Route
              path="/titan"
              element={
                <DestinationDetails destination={data.destinations[3]} />
              }
            ></Route>
          </Routes>
        </div>
      </section>
    </div>
  );
}
