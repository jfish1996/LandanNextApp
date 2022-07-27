import React, { useRef, useState, useEffect } from "react";
import { returnPosts } from "../../lib/returnposts";
import { returnCategoryData } from "../../lib/returnData";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import Header from "../../components/atoms/List-Items/Header";
import PostBar from "../../components/molecules/PostBar/PostBar";
import { useIntersectionArray } from "../../hooks/useIntersectionArray";
import { TOP_NAV_HEIGHT } from "../../styles/constants";
import SkeletonTemplate from "../../components/molecules/SkeletonTemplate/SkeletonTemplate";
export default function NoContent({ pageTitle, pageMarkup }) {
  const CATEGORY_NAME = pageTitle;

  return (
    <>
      <Header textAlign={"left"} fontWeight={"700"} color={"black"}>
        {CATEGORY_NAME.toUpperCase()}
      </Header>

      <RichTextParagraph markup={pageMarkup} />
    </>
  );
}
