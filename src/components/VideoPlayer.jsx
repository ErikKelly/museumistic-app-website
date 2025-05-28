import React, { useState } from "react";

export default function VideoPlayer({ videoFile }) {
  return (
    <>
      <div className="video-player">
        <video
          key={videoFile}
          muted
          loop
          controls
          playsInline
          width="300"
          style={{ maxWidth: "100%", height: "auto" }}
        >
          <source src={"/assets/videos/" + videoFile} type="video/mp4" />
          Your browser doesn't support video playback.
        </video>
      </div>{" "}
    </>
  );
}
