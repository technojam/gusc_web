import React from 'react'
import { Outlet, Link } from "react-router-dom";

const CoreSCPage = () => {
  return (
    <>
    <div>CoreSCPage</div>
    <Link className="nav-link" to="/clubPage">
      ClubTeam
    </Link>
    </>
  )
}

export default CoreSCPage