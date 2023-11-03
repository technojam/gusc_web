import React, { useState } from "react";
import data from "../data/team-heads.json"

function ClubMember({ member }) {
  return (
    <div className="w-screen h-screen font-poppins flex-wrap flex flex-col justify-center items-center bg-blue-50">
      <div
        style={{ paddingLeft: "150px" }}
        className="w-full h-full flex gap-5 mt-10 bg-blue-50"
      >
        <div className="w-112 h-full flex items-center">
          <div style={{ marginBottom: "280px" }} className="w-96 h-96">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-1/2 p-3">
          <h2 className="text-4xl text-left">{member.name}</h2>
          <p style={{ color: "#A4041D" }} className="text-md text-left">
            {member.role}
          </p>
          <p style={{ color: "#A4041D" }} className="text-md font-medium text-left">
            Email: {member.email}
          </p>
          <p style={{ color: "#A4041D" }} className="text-md font-medium text-left">
            Phone: {member.phone}
          </p>
          <p className="text-sm font-medium">{member.statement.join("\n\n")}</p>
          <div className="flex justify-center">
            <hr className="h-1 w-100 bg-slate-900 mx-auto my-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamMember({ member }) {
  return (
    <div className="flex justify-evenly gap-5 items-center my-6">
      <img
        src={member.image}
        alt={member.name}
        className="w-20 h-20 rounded-full mr-4"
      />
      <div>
        <h2 className="text-xl font-bold">{member.name}</h2>
        <p className="text-sm text-gray-700">
          Program: {member.program}
        </p>
        <p className="text-sm text-gray-700">
          Phone: {member["phone-number"]}
        </p>
        <p className="text-sm text-gray-700">
          Email: {member.email}
        </p>
        <p className="text-sm bg-black text-white text-gray-700">
          Insta: {member.account}
        </p>
      </div>
    </div>
  );
}

function Team({ team }) {
  return (<>
    <div className="flex flex-col gap-4">
      <div className="text-4xl font-bold  text-center">{team.team}</div>
      <div className="bg-white rounded ">
        <div className="flex flex-wrap justify-evenly items-center">
          {team.members.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </div><div className="h-[2px] mb-12 w-[70%]  mx-[20%]"></div></>
  );
}


function TeamPage({ member }) {
  const [showCurrentJSX, setShowCurrentJSX] = useState(true);

  const toggleJSX = () => {
    setShowCurrentJSX(!showCurrentJSX);
  };

  return (
    <div className="w-screen h-screen">
    <div className="bg-red-700 p-12 text-center text-white">
      <p className="text-4xl">Galgotias University Student Council</p>
      <p className="text-7xl font-bold mt-2">THE TEAM</p>
    </div>
    <div className="text-center flex justify-center bg-white p-10">
      <a
        onClick={toggleJSX}
        className={`cursor-pointer font-bold rounded-full px-4 py-2 w-80  ${
          showCurrentJSX ? "bg-red-500 text-white" : "bg-gray-200 text-red-800"
        }`}
      >
        Core Team
      </a>
      <a
        onClick={toggleJSX}
        className={`cursor-pointer font-bold rounded-full px-4 py-2 w-80 ${
          !showCurrentJSX ? "bg-red-500  text-white" : "bg-gray-200 text-red-800"
        }`}
        style={{ marginLeft: "-30px" }}
      >
        Team Leads
      </a>
    </div>
    {showCurrentJSX ? (
      member.map((member, index) => <ClubMember key={index} member={member} />)
    ) : (
      /* Render the empty JSX here when the button is clicked */
      <div className=" font-poppins bg-blue-50  flex flex-col justify-center items-center">
        <div className="w-full max-w-screen-xl mx-auto p-6">
          {data.team.map((team, index) => (
            <><Team key={index} team={team} /><div className="h-[2px] mb-20 w-[100%] bg-slate-900 "></div></>
          ))}
        </div>
      </div>
    )}
  </div>
  );
}

export default TeamPage;
