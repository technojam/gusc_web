import React from 'react';
import './App.css';
import ClubComponent from './Components/ClubComponent';
import ClubInfo from './Pages/ClubInfo';
import LatestEventComponent from './Components/LatestEvents'

function App() {
  return (
    <div className='h-32'>
      {/* <ClubComponent /> */}
      <ClubInfo />
      <LatestEventComponent />
    </div>
  );
}

export default App;
