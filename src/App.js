import React from 'react';
import './App.css';
import ClubInfo from './Components/ClubInfo';
import LatestEventComponent from './Components/LatestEvents';
import Core from './Components/CoreTeam';
import Footer from './Components/Footer';
import Hero from './Pages/Hero';
import Navbar from './Components/Navbar';

import clubsData from "./data/clubhome.json"

import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Achievements from './Components/Achievements';

import TeamPage from './Pages/TeamPage';

import member from "./data/core-team.json"
import ClubComponent from './Pages/ClubsPage';
import EventPage from './Pages/EventPage';
import Gallery from './Pages/Gallery';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={  
            <>
              <Navbar />
              <Hero />
              <Achievements />
              <LatestEventComponent />
              <Core />
              <ClubInfo clubs={clubsData.clubs}/>
              <Footer />
            </>
          } />

          <Route path='/teamPage' element={<TeamPage member={member.members}/>} /> 
          <Route path='/clubs' element={<ClubComponent/>} /> 
          <Route path='/events' element={<EventPage/>} /> 
          <Route path='/gallery' element={<Gallery/>} /> 
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
