import React from "react";

const Clubs = () => {
  return (
    <>
      <header>
        <i>Galgotias University Student Council</i>
        CLUBS
      </header>
      <button className="dropdown" onClick={()=>{}}>Dropdown</button>
      <div className="club-content">
        <div className="club_top">
          <div className="galgotias_logo">galgotia logo</div>
          <h1>GU Management Team</h1>
          <div className="other_logos">Other logos</div>
        </div>
        <div className="club_main">
          <div className="desc">Description</div>
          <div><img></img>Image</div>
        </div>
      </div>
    </>
  );
};

export default Clubs;
