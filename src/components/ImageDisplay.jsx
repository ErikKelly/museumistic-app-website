import React, { useState } from "react";

export default function ImageDisplay({ imageFile, alt, index }) {
  return (
    <>
      <div className="image-display">
        <img src={`/assets/screenshots/${imageFile}`} alt={`${alt} ${index}`} />
      </div>
    </>
  );
}
