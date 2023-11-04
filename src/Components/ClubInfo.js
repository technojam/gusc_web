import React, { useRef } from 'react';
import { useState, useEffect } from 'react';

function ClubInfo({ clubs }) {
  const cardWidth = 400; // Adjust the card width as needed
  const containerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const updateActiveDot = () => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const active = Math.round(scrollLeft / cardWidth);
    setActiveDot(active);
  };

  const scrollToCard = (cardIndex) => {
    const container = containerRef.current;
    container.scrollLeft = cardIndex * cardWidth;
  };

  useEffect(() => {
    updateActiveDot();

    // Add scroll event listener to update the active dot
    const container = containerRef.current;
    container.addEventListener('scroll', updateActiveDot);

    return () => {
      container.removeEventListener('scroll', updateActiveDot);
    };
  }, []);

  return (
    <div className="py-8" style={{ backgroundColor: '#AA0A1D' }}>
      <div style={{ marginBottom: "60px" }} className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white mb-4">Our Clubs</h1>
        <a href='/clubs' style={{ backgroundColor: 'white' }} className="text-red font-semibold py-2 px-4">
          Browse Clubs
        </a>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="carousel-container" ref={containerRef}>
          {clubs.map((club, index) => (
            <div key={index} className="carousel-card">
              <div className="bg-white  rounded-lg" style={{ height: '300px' }}>
                <img src={club.image} alt={club.team} className="w-full h-36 object-cover mb-4 rounded-t-lg" />
                <h2 className="text-xl font-bold mb-2">{club.team}</h2>
                <p className="text-gray-700">
                  {club.description}
                </p>
                <div className="mt-4"><div className='flex justify-between'>
                  <p className="text-gray-700">Events Count: {club.eventCount}</p>
                  <p className="text-gray-700 mb-3">Students Count: {club.studentsCount}</p></div>
                  <a href="/" className="text-black-700 text-xl  font-bold hover:underline">
                    {club.register}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-dots">
        {clubs.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === activeDot ? 'active' : ''}`}
            onClick={() => scrollToCard(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ClubInfo;
