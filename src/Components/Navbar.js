import React from 'react'
import gusc from "../images/GU Council logo.png"
import {
    Link
  } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav style={{zindex:"-1"}} className="navbar font-semibold navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand " to="/"><img className='ml-20' width={170} src={gusc}/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="navbar-nav mr-auto">

          </div>
          <span className="nav-item active">
            <Link className="nav-link" to="/">Homepage <span className="sr-only">(current)</span></Link>
          </span>
          <span className="nav-item">
            <Link className="nav-link" to="/clubs">Clubs</Link>
          </span>
          <span className="nav-item">
            <Link className="nav-link" to="/events">Events</Link>
          </span>
          <span className="nav-item">
            <Link  className="nav-link" to="/teampage">Team</Link>
          </span>
          <span className="nav-item">
            <Link className="nav-link" to="/gallery">Photo Gallery</Link>
          </span>
          </div>
      </nav>
    </>
  )
}

export default Navbar
