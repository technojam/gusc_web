import React from "react";

function ClubMember({ member }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-3xl p-4 bg-white rounded-lg shadow-md">
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h2 className="text-2xl font-semibold text-center mt-4">
          {member.name}
        </h2>
        <p className="text-lg text-center ">{member.role}</p>
        <p className="text-lg text-center ">Email: {member.email}</p>
        <p className="text-lg text-center">Phone: {member.phone}</p>
        <p className="text-gray-700">{member.statement.join("\n\n")}</p>
      </div>
    </div>
  );
}

function TeamPage({ member }) {
  return (
    <div>
      <div className="bg-red-700 p-12 text-center text-white">
        <p className="text-4xl">Galgotias University Student Council</p>
        <p className="text-7xl font-bold mt-2">The Team</p>
      </div>
      {member.map((member, index) => (
        <ClubMember key={index} member={member} />
      ))}
    </div>
  );
}

export default TeamPage;
