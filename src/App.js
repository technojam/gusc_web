import React from 'react';
import './App.css';
import ClubComponent from './Components/ClubComponent';
import ClubInfo from './Pages/ClubInfo';
import LatestEventComponent from './Components/LatestEvents'
import Core from './Components/CoreTeam'
import Hero from './Pages/Hero';
function App() {
  return (
    <div className='h-32'>
      {/* <ClubComponent /> */}
      <ClubInfo />
      <LatestEventComponent />
      <Core/>
      <Hero/>
    </div>
  );
}

export default App;

