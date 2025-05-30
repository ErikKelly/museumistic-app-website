import React, { useState } from "react";
import appicon from "/assets/appicon.png";

export default function Splash() {
  return (
    <>
      <div className="splashIcon">
        <img src={appicon} alt="Museumistic Icon" />
      </div>
      <div className="splashLetters fade-sequence ">
        <span className="letter 1 fade-sequence" style={{ "--delay": ".2s" }}>
          M
        </span>
        <span className="letter 2 fade-sequence" style={{ "--delay": ".4s" }}>
          U
        </span>
        <span className="letter 3 fade-sequence" style={{ "--delay": ".6s" }}>
          S
        </span>
        <span className="letter 4 fade-sequence" style={{ "--delay": ".8s" }}>
          E
        </span>
        <span className="letter 5 fade-sequence" style={{ "--delay": "1.0s" }}>
          U
        </span>
        <span className="letter 6 fade-sequence" style={{ "--delay": "1.2s" }}>
          M
        </span>
        <span className="letter 7 fade-sequence" style={{ "--delay": "1.4s" }}>
          I
        </span>
        <span className="letter 8 fade-sequence" style={{ "--delay": "1.6s" }}>
          S
        </span>
        <span className="letter 9 fade-sequence" style={{ "--delay": "1.8s" }}>
          T
        </span>
        <span className="letter 10 fade-sequence" style={{ "--delay": "2.0s" }}>
          I
        </span>
        <span className="letter 11 fade-sequence" style={{ "--delay": "2.2s" }}>
          C
        </span>
      </div>
    </>
  );
}
