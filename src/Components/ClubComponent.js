import React from 'react';
import SingleCard from './SingleCard';

const clubsInfo = [
    {
        image: '',
        title: 'Graphex',
        description: 'It the design club of GUSC. Every creative required for GUSC is made by Graphex',
        eventCount: 12,
        studentsCount: 95,
        registerLink: ''
    },
    {
        image: '',
        title: 'Graphex',
        description: 'It the design club of GUSC. Every creative required for GUSC is made by Graphex',
        eventCount: 12,
        studentsCount: 95,
        registerLink: ''
    },
    {
        image: '',
        title: 'Graphex',
        description: 'It the design club of GUSC. Every creative required for GUSC is made by Graphex',
        eventCount: 12,
        studentsCount: 95,
        registerLink: ''
    },
];

function ClubComponent() {
    return (
        <div className='bg-red-700 p-20'>

            <div className='flex justify-between'>
                <p className="text-2xl font-semibold text-white">Our Clubs</p>
                <button className='bg-white text-red-700 font-bold py-2 px-4 border rounded'>
                    Browse All Clubs
                </button>
            </div>

            <div className="mt-12 carousel w-full">
                <div id="item1" className="carousel-item w-full gap-12 flex flex-col md:flex-row">
                    {clubsInfo.map((club, index) => (
                        <SingleCard club={club} key={index} />
                    ))}

                </div>
                <div id="item2" className="carousel-item w-full gap-12 flex flex-col md:flex-row">
                    {clubsInfo.map((club, index) => (
                        <SingleCard club={club} key={index} />
                    ))}
                </div>
                <div id="item3" className="carousel-item w-full gap-12 flex flex-col md:flex-row">
                    {clubsInfo.map((club, index) => (
                        <SingleCard club={club} key={index} />
                    ))}
                </div>
            </div>

            <div className="flex justify-center w-full py-2 gap-2 mt-4">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>

        </div>
    );
}

export default ClubComponent;