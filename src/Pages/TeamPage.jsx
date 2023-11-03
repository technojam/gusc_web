import React from "react";

function ClubMember({ member }) {
  return (
    <>
      <div className="w-screen h-screen flex  justify-center items-center bg-blue-50">
        <div
          style={{ paddingLeft: "150px" }}
          className="w-full h-full flex   bg-white rounded-lg shadow-md"
        >
          <div className="w-112 h-full flex items-center">
            <div style={{ marginBottom: "200px" }} className="w-96 h-96">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-semibold text-left">{member.name}</h2>
            <p style={{ color: "#A4041D" }} className="text-md  text-left">
              {member.role}
            </p>
            <p style={{ color: "#A4041D" }} className="text-md font-medium text-left">
              Email: {member.email}
            </p>
            <p style={{ color: "#A4041D" }} className="text-md font-medium text-left">
              Phone: {member.phone}
            </p>
            <p className="text-sm font-medium">{member.statement.join("\n\n")}</p>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%", borderTop: "3px solid " }} />
    </>
  );
}

function TeamPage({ member }) {
  return (
    <div className="w-screen h-screen">
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
