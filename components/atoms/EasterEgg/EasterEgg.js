import React from "react";
import RichTextParagraph from "../RichTextParagraph/RichTextParagraph";

export default function EasterEgg({ imgSrc, text }) {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        position: "relative",
        zIndex: 0,
        bottom: "200%",
        right: "-100%",
        // transform: "translate(-50%, -50%)",
      }}
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          style={{ objectFit: "contain", width: "100px", height: "100px" }}
        />
      ) : (
        <RichTextParagraph markup={text} />
      )}
    </div>
  );
}
