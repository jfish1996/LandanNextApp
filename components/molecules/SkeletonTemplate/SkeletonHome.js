import React from "react";
import Header from "../../atoms/List-Items/Header";
import SkeletonHeader from "../../atoms/SkeletonParts/SkeletonHeader";
import SkeletonImage from "../../atoms/SkeletonParts/SkeletonImage";
export default function SkeletonHome({ pageTitle, height }) {
  return (
    <>
      <Header textAlign={"left"} fontWeight={"700"} color={"black"}>
        {pageTitle.toUpperCase()}
      </Header>

      <SkeletonHeader height={height} />
      <SkeletonImage />
    </>
  );
}
