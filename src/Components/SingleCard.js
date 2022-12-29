import React from 'react';

const SingleCard = ({ club }) => {
    return (
        <div className="card rounded w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title mb-2">{club.title}</h2>
                <p>{club.description}</p>
                <div className="card-actions flex justify-between text-sm text-justify">
                    <button>Event Count: {club.eventCount}</button>
                    <button>Students Count: {club.studentsCount}</button>
                </div>
                <a href={club.registerLink} className="font-bold mt-3">Register Now</a>
            </div>
        </div>
    );
};

export default SingleCard;