import React from "react";
import { Outlet, Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav
        style={{ zindex: "-1" }}
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <Link className="navbar-brand" to="/">
          Galgotias University Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="navbar-nav mr-auto"></div>
          <span className="nav-item active">
            <Link className="nav-link" to="/">
              Homepage <span className="sr-only">(current)</span>
            </Link>
          </span>
          <span className="nav-item">
            <Link className="nav-link" to="/clubs">
              Clubs
            </Link>
          </span>
          <span className="nav-item">
            <Link className="nav-link" to="events">
              Events
            </Link>
          </span>
          <span className="nav-item">
            <Link className="nav-link" to="corePage">
              Team
            </Link>
          </span>
          <span className="nav-item">
            <Link className="nav-link" to="clubPage">
              Photo Gallery
            </Link>
          </span>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
