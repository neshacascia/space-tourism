import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import { Context } from './components/Context';
import MobileMenuModal from './components/navbars/MobileMenuModal';
import './App.css';

function App() {
  const { toggleMenu } = useContext(Context);

  return (
    <div className="App">
      <section>
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
