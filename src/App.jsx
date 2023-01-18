import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import { Context } from './components/Context';
import MobileMenuModal from './components/MobileMenuModal';
import './App.css';

function App() {
  const { toggleMenu, closeModal } = useContext(Context);

  return (
    <div className="App">
      <Navbar />
      <section onClick={closeModal}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/destination/*" element={<Destination />}></Route>
          <Route path="/crew/*" element={<Crew />}></Route>
          <Route path="/technology/*" element={<Technology />}></Route>
        </Routes>
      </section>

      {toggleMenu &&
        ReactDOM.createPortal(
          <MobileMenuModal />,
          document.getElementById('overlay-root')
        )}
    </div>
  );
}

export default App;
