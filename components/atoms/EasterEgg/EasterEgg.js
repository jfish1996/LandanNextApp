import React from "react";

export default function EasterEgg({ imgSrc, text }) {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        position: "relative",
        zIndex: -1,
        bottom: "120%",
        // right: "50%",
        // transform: "translate(-50%, -50%)",
      }}
    >
      {imgSrc ? (
        <img src={imgSrc} style={{ objectFit: "contain" }} />
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
}
