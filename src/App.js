import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './Components/login';
import Home from './Components/Register';
import LivingRoom from './Components/Living/Living';
import { LandingPage } from './Components/Landing/Landing';
import { HomePage } from './Components/Home';
import Bathroom from './Components/Bathroom/Bathroom'
import Kitchen from './Components/Kitchen/Kitchen'
import Light from './Components/Light/Light';
function App() {
  return (
   <> 
 <Router>
      <div>
        <Routes>
          <Route path="/living-room" element={<LivingRoom />} />
          <Route path="/bathroom" element={<Bathroom />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/" element={<HomePage />} />
           <Route path='/light' element={<Light/>}/>
        </Routes>
      </div>
    </Router>
   </>
  );
}

export default App;
