import React from "react";

function Achievements() {
  return (
    <>
      <h1 className="A-Text text-white">Our Achievements</h1>
      <div style={{ marginTop: "55px" }}>
        <div className="container mx-5 my-8">
          <div className="row">
            <div className="col-sm">
              <div
                className="card"
                style={{
                  width: "15.5rem",
                  height: "13rem",
                  backgroundColor: "#A51828",
                }}
              >
                <div className="card-body">
                  <h1>30+</h1>
                  <h2>CLUBS</h2>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div
                className="card"
                style={{
                  width: "15.5rem",
                  height: "13rem",
                  backgroundColor: "#A51828",
                }}
              >
                <div className="card-body">
                  <h1>250+</h1>
                  <h2>EVENTS</h2>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div
                className="card"
                style={{
                  width: "15.5rem",
                  height: "13rem",
                  backgroundColor: "#A51828",
                }}
              >
                <div className="card-body">
                  <h1>12000+</h1>
                  <h2>REGISTRATIONS</h2>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div
                className="card"
                style={{
                  width: "15.5rem",
                  height: "13rem",
                  backgroundColor: "#A51828",
                }}
              >
                <div className="card-body">
                  <h1>5000+</h1>
                  <h2>MEMBERS</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achievements;
