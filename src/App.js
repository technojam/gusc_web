import React from 'react';
import './App.css';
import ClubComponent from './Components/ClubComponent';
import ClubInfo from './Pages/ClubInfo';
import LatestEventComponent from './Components/LatestEvents'
import Hero from './Pages/Hero';
import Navbar from './Components/Navbar';
import {
  Routes,
  Route
} from "react-router-dom";
import Achievements from './Components/Achievements';

function App() {
  return (
    <div className='h-32'>
      {/* <ClubComponent /> */}
      <Navbar/>
      <Hero/>
      <Achievements/>
      <ClubInfo />
      <LatestEventComponent />
    </div>
  );
}

export default App;
