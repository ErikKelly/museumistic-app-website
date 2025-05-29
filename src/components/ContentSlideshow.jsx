import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import SectionContent from "./SectionContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ContentSlideshow({ dataSource }) {
  const [searchData, setSearchData] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await import(`../data/${dataSource}.json`);
        setSearchData(data.default);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [dataSource]);

  if (loading) return <div>Loading...</div>;

  const sectionKeys = Object.keys(searchData);

  const settings = {
    dots: false,
    fade: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
    accessibility: true,
  };

  const goToSlide = (sectionKey) => {
    const index = sectionKeys.indexOf(sectionKey);
    if (index !== -1) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <>
      {/* Top Nav */}
      <div className="searching">
        <div className="nav-buttons">
          {sectionKeys.map((sectionKey, index) => (
            <button
              key={sectionKey}
              onClick={() => goToSlide(sectionKey)}
              className={`tab-button ${activeSlide === index ? "active" : ""}`}
            >
              {searchData[sectionKey][0]?.title || sectionKey}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="page-content">
          <Slider ref={sliderRef} {...settings}>
            {sectionKeys.map((sectionKey) => (
              <div key={sectionKey} className="slide-content">
                <SectionContent
                  currentContent={searchData[sectionKey]}
                  selectedContent={sectionKey}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
