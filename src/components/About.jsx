import React, { useState } from "react";
import ek from "/assets/ek.jpg";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="section-detail">
          <div className="text-container">
            <div className="about-image">
              <div className="about-box"></div>
              <img src={ek} alt="EK Image" className="floating-image" />
            </div>

            <p>
              Museumistic, a free app for the iPhone, was conceived by an avid
              museum-goer who wanted to create a useful app for enjoying museums
              and learning about art, artists, and cultures from around the
              world and throughout history.
            </p>
            <p>
              The artwork content for this app is currently limited to the
              artwork of The Metroplitian Museum of Art.
            </p>
            <p>
              Many thanks to The Metropolitan Museum of Art for being such a
              constant inspiration and for offering the public APIs that made
              this app possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
