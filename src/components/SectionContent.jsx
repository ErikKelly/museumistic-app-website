import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import ImageDisplay from "./ImageDisplay";

export default function SectionContent({ currentContent, selectedContent }) {
  return (
    <>
      <div className="slideshow">
        {currentContent.length > 0 ? (
          currentContent.map((item, index) => (
            <div key={index} className={`slideshow-items`}>
              <div className="slideshow-text">
                {item.text.map((textItem, textIndex) => (
                  <div key={textIndex} className={textItem.className}>
                    {textItem.copy}
                  </div>
                ))}
              </div>

              <div className="slideshow-media">
                {item.video && <VideoPlayer videoFile={item.video} />}
                {item.image && !item.video && (
                  <ImageDisplay
                    imageFile={item.image}
                    alt={item.alt}
                    index={index}
                  />
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No content available for {selectedContent}</p>
        )}
      </div>
    </>
  );
}
