import React from 'react';
import './App.css';
import ClubComponent from './Components/ClubComponent';
import LatestEventComponent from './Components/LatestEvents';

function App() {
  return (
    <div className='h-32'>
      <ClubComponent />
      <LatestEventComponent />
    </div>
  );
}

export default App;
