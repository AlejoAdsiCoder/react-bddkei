import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';
import Inicio from './pages/Inicio';
import AcercaDeMi from './pages/AcercaDeMi';
import Portafolio from './pages/Portafolio';
import Contacto from './pages/Contacto';

const App = () => {
  return (
    <Router>
      <div className="app">
        <SidebarMenu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/acerca" element={<AcercaDeMi />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
