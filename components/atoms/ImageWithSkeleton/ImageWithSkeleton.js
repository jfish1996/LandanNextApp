import React, { useEffect, useState } from "react";
import Image from "next/image";
import SkeletonBlock from "../SkeletonParts/SkeletonBlock";

export default function ImageWithSkeleton({ onLoad, style, src, ...props }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  const handleLoad = (event) => {
    setLoaded(true);
    onLoad?.(event);
  };

  return (
    <>
      {!loaded && <SkeletonBlock />}
      <Image
        src={src}
        {...props}
        onLoad={handleLoad}
        style={{
          ...style,
          opacity: loaded ? 1 : 0,
          transition: "opacity 200ms ease-in-out",
        }}
      />
    </>
  );
}
