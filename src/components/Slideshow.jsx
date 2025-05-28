import React, { useState } from "react";
import Slider from "react-slick";
import VideoPlayer from "./VideoPlayer";
import ImageDisplay from "./ImageDisplay";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slideshow({ currentContent, selectedContent }) {
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

  return (
    <>
      <div className="slideshow">
        {currentContent.length > 0 ? (
          <Slider {...settings}>
            {currentContent.map((item, index) => (
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
            ))}
          </Slider>
        ) : (
          <p>No content available for {selectedContent}</p>
        )}
      </div>
    </>
  );
}
