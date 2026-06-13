import React from "react";
import SkeletonGrid from "../../atoms/SkeletonParts/SkeletonGrid";
import SkeletonHeader from "../../atoms/SkeletonParts/SkeletonHeader";
import SkeletonText from "../../atoms/SkeletonParts/SkeletonText";
export default function SkeletonTemplate({ pageTitle, height }) {
  return (
    <>
      <SkeletonText />

      <SkeletonHeader />
      <SkeletonGrid />
    </>
  );
}
