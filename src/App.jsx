import { useState, useEffect } from "react";
import "./App.css";
import "./Animations.css";
import Splash from "./components/Splash";
import About from "./components/About";
import Learning from "./components/Learning";
import Searching from "./components/Searching";
import Visiting from "./components/Visiting";
import Footer from "./components/Footer";
import appicon from "./assets/appicon.png";
import corner from "./assets/corner.png";
import appstore from "./assets/App_Store_Badge_US-UK_RGB_wht_092917.svg";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState(0);

  const components = [
    { name: "About", component: <About /> },
    { name: "Searching", component: <Searching /> },
    { name: "Visiting", component: <Visiting /> },
    { name: "Learning", component: <Learning /> },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <>
      <div className="home-nav">
        <div className="header-icon">
          <img src={appicon} alt="Museumistic Icon" />
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
          <img src={corner} alt="Decorative Corner" />
        </div>
      </div>

      <div className="appstore">
        <a
          href="https://apps.apple.com/us/app/museumistic/id6503719551"
          target="_blank"
        >
          <img src={appstore} alt="App Store Image" />
        </a>
      </div>

      <div className="main-content">
        {components[selectedComponent].component}
      </div>

      <Footer />
      <div className="page-name">{components[selectedComponent].name}</div>

      <div className="copyright">© 2025 Erik Kelly. All rights reserved.</div>
    </>
  );
}

export default App;
