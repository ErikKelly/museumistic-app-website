import React, { useState } from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="questions">
          Questions or Comments, please email{" "}
          <a href="mailto:mail@museumistic.app">mail@museumistic.app</a>
        </div>
        <div className="privacy-policy">
          <a href="https://museumistic.app/privacy/" target="_blank">
            here
          </a>{" "}
          to view the privacy policy.
        </div>
      </div>
    </>
  );
}
