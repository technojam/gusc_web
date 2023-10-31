import React from "react";
import "./App.css";
// import ClubComponent from "./Components/ClubComponent";
// import ClubInfo from "./Pages/ClubInfo";
// import LatestEventComponent from "./Components/LatestEvents";
// import Core from "./Components/CoreTeam";
import Footer from "./Components/Footer";
// import Hero from "./Pages/Hero";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import Achievements from "./Components/Achievements";
import Clubs from "./Components/Clubs";
import Main from "./Components/Main";
function App() {
  return (
    <div className="h-32">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="clubs" element={<Clubs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
