import React from 'react'
import { Outlet, Link } from "react-router-dom";

const CoreSCPage = () => {
  return (
    <>
    <div>teams page</div>
    <Link className="nav-link" to="/coreSCPage">
      CoreSCTeam
    </Link>
    <Link className="nav-link" to="/clubPage">
      ClubTeam
    </Link>
    </>
  )
}

export default CoreSCPage