import React from 'react';
import './App.css';
import ClubComponent from './Components/ClubComponent';
import ClubInfo from './Pages/ClubInfo';
import LatestEventComponent from './Components/LatestEvents'
import Core from './Components/CoreTeam'
import Footer from './Components/Footer';

function App() {
  return (
    <div className='h-32'>
      {/* <ClubComponent /> */}
      <ClubInfo />
      <LatestEventComponent />
      <Core/>
      <Footer/>
    </div>
  );
}

export default App;
