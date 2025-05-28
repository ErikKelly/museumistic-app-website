import React, { useState } from "react";
import Slideshow from "./Slideshow";
import searchData from "../data/searching.json";
import searchImage from "/assets/screenshots/search.jpg";
import searchWiki from "/assets/screenshots/search-wiki.jpg";
import searchAudio from "/assets/screenshots/search-audioguide.jpg";
import searchDept from "/assets/screenshots/search-departments.jpg";

export default function Visiting() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 8000,
  };

  const options = ["searching", "bio", "geo", "ai", "timeline", "comments"];
  const optionLabels = {
    searching: "Searching",
    bio: "Artist Bio",
    geo: "Geolocation",
    ai: "AI",
    timeline: "Timeline",
    comments: "Comments",
  };

  const [selectedContent, setSelectedContent] = useState(options[0]);

  const currentContent = searchData[selectedContent] || [];

  const imageMap = {
    searchImage: searchImage,
    searchWiki: searchWiki,
    searchAudio: searchAudio,
    searchDept: searchDept,
  };

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

        {currentContent.length > 0 ? (
          <Slideshow
            currentContent={currentContent}
            selectedContent={selectedContent}
            imageMap={imageMap}
          />
        ) : (
          <p>No content available for {selectedContent}</p>
        )}
      </div>
    </>
  );
}
