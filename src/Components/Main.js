import React from 'react'
import "../App.css";
import ClubComponent from "./ClubComponent";
import ClubInfo from "../Pages/ClubInfo";
import LatestEventComponent from "./LatestEvents";
import Core from "./CoreTeam";
import Hero from "../Pages/Hero";
import Achievements from "./Achievements";


const Main = () => {
  return (
      <>
    <Hero />
    <Achievements />
    <LatestEventComponent />
    <Core />
    <ClubInfo />
    <ClubComponent />
  </>
  )
}

export default Main