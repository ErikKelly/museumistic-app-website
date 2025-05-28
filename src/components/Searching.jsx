import React, { useState } from "react";
import Slideshow from "./Slideshow";
import searchData from "../data/searching.json";

export default function Searching() {
  const options = ["searching", "artwork", "bio", "ai", "timeline", "comments"];
  const optionLabels = {
    searching: "Searching",
    artwork: "Artwork",
    bio: "Artist Info",
    ai: "AI",
    timeline: "Timeline",
    comments: "Comments",
  };

  const [selectedContent, setSelectedContent] = useState(options[0]);

  const currentContent = searchData[selectedContent] || [];

  return (
    <>
      <div className="searching">
        <div className="nav-buttons">
          {options.map((option) => (
            <button
              key={option}
              className={`nav-btn ${
                selectedContent === option ? "active" : ""
              }`}
              onClick={() => setSelectedContent(option)}
            >
              {optionLabels[option] || option}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="page-content">
          {currentContent.length > 0 ? (
            <Slideshow
              currentContent={currentContent}
              selectedContent={selectedContent}
            />
          ) : (
            <p>No content available for {selectedContent}</p>
          )}
        </div>
      </div>
    </>
  );
}
