import React from 'react'
import ClubComponent from '../Components/ClubComponent';
import ClubInfo from './ClubInfo';
import LatestEventComponent from '../Components/LatestEvents'



export default function Hero() {
  return (
    <>
   
    <ClubInfo />
    <ClubComponent/>
    <LatestEventComponent />
  </>
  )
}
