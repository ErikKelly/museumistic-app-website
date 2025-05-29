import React, { useState, useEffect } from "react";
import Slideshow from "./Slideshow";

export default function ContentPage({ dataSource }) {
  const [searchData, setSearchData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedContent, setSelectedContent] = useState(""); // Initialize first

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await import(`../data/${dataSource}.json`);
        setSearchData(data.default);
        // Set initial content after data loads
        const firstKey = Object.keys(data.default)[0];
        setSelectedContent(firstKey || "");
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [dataSource]);

  if (loading) return <div>Loading...</div>;

  const options = Object.keys(searchData);
  const currentContent = searchData[selectedContent] || [];

  return (
    <>
      {/* Top Nav */}
      <div className="searching">
        <div className="nav-buttons">
          {Object.entries(searchData).map(([sectionKey, sectionItems]) => (
            <button
              key={sectionKey}
              className={`nav-btn ${
                selectedContent === sectionKey ? "active" : ""
              }`}
              onClick={() => setSelectedContent(sectionKey)}
            >
              {sectionItems[0]?.title || sectionKey}
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
