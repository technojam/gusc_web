import React, { useState } from 'react';
import clubsData from '../data/clubData.json';

function ClubInfo({ club }) {
  return (
    <div style={{background:"white"}}  className="w-screen h-screen flex justify-center items-center bg-white-">
      <div className="w-full flex flex-col bg-white rounded-lg p-4">
        <div className="flex justify-evenly text-gray-600 mb-4">
          <img src='fvf'/>
          <h1 className="text-5xl font-semibold text-gray-800 text-center">
            {club.title}
          </h1>
          <div className=' flex items-center flex-col gap-2'>
            <h3 className='font-bold'>Club Heads</h3>
            <div className='flex gap-3'>
            <img alt='image' src=''/>
          <img alt='image' src=''/>
          </div>
          <div className='flex gap-3'>
          <p>Head Name</p>
          <p >Head Name </p>
          </div>

          </div>
        </div>
        <div className="flex ml-10 items-center">
          <div className="w-1/2 p-2 text-gray-600 mr-4">
            <p>{club.description}</p>
          </div>
          <div className="w-1/3 p-2">
            <img
              src={club.image}
              alt={club.title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ClubComponent() {
  const [selectedClub, setSelectedClub] = useState(clubsData.clubs[0]);

  return (
    <div className=" w-screen h-screen">
      <div className="bg-red-700 p-12 text-center text-white">
        <p className="text-4xl">Galgotias University Student Clubs</p>
        <p className="text-7xl font-bold mt-2">CLUBS</p>
      </div>
      <div className="flex justify-center mb-4">
        <div className="w-12" style={{ position: 'relative' }}>
          <select placeholder='Select Club'
            onChange={(e) => setSelectedClub(clubsData.clubs[e.target.value])}
            value={clubsData.clubs.indexOf(selectedClub)}
            className=" w-full p-2 bg-red-500 text-white text-lg font-semibold"
            style={{   borderRadius:"20px" , width: '250px', position: 'absolute', right: 440, top: 20 }}
          >
            {clubsData.clubs.map((club, index) => (
              <option key={index} value={index}>
                {club.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ClubInfo club={selectedClub} />
    </div>
  );
}

export default ClubComponent;
