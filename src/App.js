import React from 'react';
import './App.css';
import ClubComponent from './Components/ClubComponent';
import EventComponent from './Components/LatestEvents';

function App() {
  return (
    <div className='h-32'>
      <ClubComponent />
      <EventComponent />
    </div>
  );
}

export default App;
