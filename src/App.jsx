import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/destination/*" element={<Destination />}></Route>
        <Route path="/crew/*" element={<Crew />}></Route>
        <Route path="/technology/*" element={<Technology />}></Route>
      </Routes>
    </div>
  );
}

export default App;
