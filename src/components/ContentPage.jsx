import { useState, useEffect } from "react";
import "../App.css";
import "../Animations.css";
import Splash from "./Splash";
import About from "./About";
import ContentSlideshow from "./ContentSlideshow";
import Footer from "./Footer";

export default function ContentPage() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState(0);

  const components = [
    { name: "About", component: <About /> },
    { name: "Searching", component: <ContentSlideshow dataSource="search" /> },
    { name: "Visiting", component: <ContentSlideshow dataSource="visiting" /> },
    { name: "Learning", component: <ContentSlideshow dataSource="learning" /> },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Add class when component mounts
    document.body.classList.add("no-scroll");

    // Remove class when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <>
      <div className="content-page fade-in">
        <div className="home-nav">
          <div className="header-icon">
            <img src={`/assets/appicon.png`} alt="Museumistic Icon" />
          </div>
          <div className="header-title">MUSEUMISTIC</div>
          <div className="header-buttons">
            {components.map((comp, index) => (
              <button
                key={index}
                onClick={() => setSelectedComponent(index)}
                className={`componentButton btn${index} ${
                  selectedComponent === index ? "active" : ""
                }`}
              >
                {comp.name}
              </button>
            ))}
          </div>
          <div className="tagline">
            A free iPhone app to help learn about art, artists and culture
          </div>
          <div className="sq-top"></div>
          <div className="sq-bottom"></div>
          <div className="corner-image">
            <img src={`/assets/corner.png`} alt="Decorative Corner" />
          </div>
        </div>

        <div className="appstore">
          <a
            href="https://apps.apple.com/us/app/museumistic/id6503719551"
            target="_blank"
          >
            <img
              src={`/assets/App_Store_Badge_US-UK_RGB_wht_092917.svg`}
              alt="App Store Image"
            />
          </a>
        </div>

        <div className="main-content">
          {components[selectedComponent].component}
        </div>

        <div className="page-name">{components[selectedComponent].name}</div>

        <div className="copyright">© 2025 Erik Kelly. All rights reserved.</div>
        <Footer />
      </div>
    </>
  );
}
