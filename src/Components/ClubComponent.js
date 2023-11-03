import React, { useState } from 'react';
import clubsData from '../data/clubData.json';

function ClubInfo({ club }) {
  return (
    <div style={{ background: "white" }} className="w-screen h-screen flex-col gap-32 flex justify-center items-center bg-white-">
    <div className="w-full flex flex-col bg-white rounded-lg p-4">
      <div className="flex justify-evenly items-center text-gray-600 mb-4">
        <img src={club.clubImage} alt="Club Logo" className="w-16 h-16 object-contain" />
        <h1 className="text-5xl font-semibold text-gray-800 text-center">
          {club.team}
        </h1>
        <div className='flex items-center flex-col gap-2'>
          <h3 className='font-bold'>Club Heads</h3>
          <div className='flex gap-10'>
            <img alt='Club Head' src={club.head1Image} className="w-16 h-16 rounded-full object-contain" />
            <img alt='Club Head' src={club.head2Image} className="w-16 h-16 rounded-full object-contain" />
          </div>
          <div className='flex text-sm gap-2'>
            <p>{club.club1Head}</p>||
            <p>{club.club2Head}</p>
          </div>
        </div>
      </div>
      <div className="flex ml-10 items-center">
        <div className="w-1/2 p-2 text-gray-600 mr-4">
          {Array.isArray(club.description) ? (
            club.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>{club.description}</p>
          )}
        </div>
        <div className="w-1/3 p-2">
          <img
            src={club.clubImage}
            alt={club.team}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
    <div className="h-[2px] w-[70%] bg-slate-900 mx-[20%]"></div>
  </div>
  );
}

function ClubComponent() {
  const [selectedClub, setSelectedClub] = useState(clubsData.clubs[0]);

  return (
    <div className="w-screen h-screen">
      <div className="bg-red-700 p-12 text-center text-white">
        <p className="text-4xl">Galgotias University Student Clubs</p>
        <p className="text-7xl font-bold mt-2">CLUBS</p>
      </div>
      <div className="flex justify-center mb-4">
        <div className="w-12" style={{ position: 'relative' }}>
          <select
            onChange={(e) => setSelectedClub(clubsData.clubs[e.target.value])}
            value={clubsData.clubs.indexOf(selectedClub)}
            className="text-center p-1 bg-red-500 text-white text-lg font-semibold"
            style={{ borderRadius: "20px", width: '220px', position: 'absolute', right: 400, top: 20 }}
          >
            {clubsData.clubs.map((club, index) => (
              <option key={index} value={index}>
                {club.team}
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
