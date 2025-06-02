import { useState, useEffect, useRef } from "react";

export default function AnimatePageName({ pageName }) {
  const [currentName, setCurrentName] = useState(pageName);
  const [previousName, setPreviousName] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (pageName !== currentName) {
      setIsAnimating(true);
      setPreviousName(currentName); // This is the old name

      // Update displayName immediately to the new name
      setCurrentName(pageName);

      // Stop animation after duration
      setTimeout(() => {
        setIsAnimating(false);
        setPreviousName("");
      }, 500); // Match your CSS duration
    }
  }, [pageName]);

  return (
    <>
      <div className={`page-name previous ${isAnimating ? "animate-out" : ""}`}>
        {previousName}
      </div>

      {/* Current name - animates in */}
      <div className={`page-name current ${isAnimating ? "animate-in" : ""}`}>
        {currentName}
      </div>
    </>
  );
}
