import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
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
          </div>
        </div>
        <div className="features">
          <div className="features-video">
            <VideoPlayer videoFile="search.mp4" />
          </div>
          <div className="features-copy">
            <div className="slide-title">Features Include:</div>
            <div className="dot-item">
              A variety of ways to explore The Met's collection.
            </div>
            <div className="dot-item">
              Use GPS to see your relationship and distance to any artwork on
              display, including a compass to guide you.{" "}
            </div>
            <div className="dot-item">
              Use AI to dig deeper into the times a work was created.
            </div>
            <div className="dot-item">
              Try one of the many curations, or even create your own.
            </div>
            <div className="dot-item">
              Leave and read comments about artworks.
            </div>
            <div className="dot-item">
              Try the daily art quiz or weekly drawing challenge.
            </div>
            <div className="dot-item">
              See which artists were both on this date.
            </div>
            <div className="dot-item">And much, much more!</div>
          </div>
        </div>
      </div>
    </>
  );
}
