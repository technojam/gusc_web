import React, { useRef } from 'react';
import { useState, useEffect } from 'react';


function ClubInfo({ clubs }) {
  const cardWidth = 300; // Adjust the card width as needed
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
    <div className=" py-8"  style={{ backgroundColor: '#AA0A1D' }}>
      <div style={{ marginBottom:"60px"}} className="max-w-5xl  mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white mb-4">Our Clubs</h1>
        <a href='/clubs' className='bg-white text-red-700 font-bold py-2 px-4 border rounded'>
            Browse All Clubs
       </a>
      </div>
      <div className="max-w-6xl flex flex-col flex-wrap mx-auto">
        <div className="carousel-container" ref={containerRef}>
          {clubs.map((club, index) => (
            <div key={index} className="carousel-card">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">{club.title}</h2>
                <p className="text-gray-700">
                  {club.description.length > 150 
                    ? `${club.description.slice(0, 150)}...`
                    : club.description
                  }
                </p>
              </div>
            </div>
          ))}
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
    </div>
  );
}

export default ClubInfo;
