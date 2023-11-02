import React from "react";
import img from "../images/event-image.png";

export const Event = () => {
  return (
    <div className="event-section">
      {/* Header Section Starts */}
      <div
        className="header"
        style={{
          backgroundColor: "#AA0A1D",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontFamily: "Poppins",
            fontWeight: "300",
            fontSize: "34px",
            lineHeight: "50px",
            letterSpacing: "1.5",
            marginBottom: "4px",
          }}
        >
          Galgotias University Student Council
        </h1>
        <h1
          style={{
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "66px",
            lineHeight: "60px",
            letterSpacing: "0.015rem",
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}
        >
          Events
        </h1>
      </div>

      {/* Header Section Ends */}

      {/* Title Section Starts  */}

      <section className="event-title-section">
        <h1 className="event-name"> Event Name </h1>
        <h1 className="event-date"> Date </h1>
      </section>

      {/* Title Section Ends  */}

      {/* Event Content Section Starts */}

      <div className="event-content">
        <div className="event-content-row">
          <div className="event-column left" style={{ width: "50%" }}>
            <img className="event-image" src={img} alt="imag" />
          </div>
          <div className="event-column right" style={{ width: "50%" }}>
            <p className="event-content-description" >Event Description</p>
          </div>
        </div>
      </div>

      {/* Event Content Section Ends */}

      <hr className="event-hr" />
    </div>
  );
};
