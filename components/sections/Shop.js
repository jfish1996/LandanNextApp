import React, { useEffect, useState, useRef } from "react";
import SkeletonTemplate from "../molecules/SkeletonTemplate/SkeletonTemplate";
import Header from "../atoms/List-Items/Header";
import PostBar from "../molecules/PostBar/PostBar";
import Filterbar from "../molecules/Filterbar.js/Filterbar";
import RichTextParagraph from "../atoms/RichTextParagraph/RichTextParagraph";
import { portfolioPostToRender } from "../../lib/ternary-helper-functions";
import { returnPosts } from "../../lib/returnposts";
import { useIntersectionArray } from "../../hooks/useIntersectionArray";
import {
  returnFilteredCategory,
  returnFilteredData,
} from "../../lib/returnData";
import {
  TOP_NAV_HEIGHT,
  TOP_PARAGRAPH_SECTION_PADDING,
} from "../../styles/constants";

export default function ShopPage({
  fetching,
  feedView,
  currentId,
  pageTitle,
  pageMarkup,
  posts,
}) {
  const CATEGORY_NAME = pageTitle;

  const ref = useRef([]);
  const addToRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };
  //
  const [elementToShow, setElementToShow] = useState();
  const [clickToElement, setClickToElement] = useState(true);
  useEffect(() => {
    if (
      feedView.feedViewProp &&
      ref.current &&
      clickToElement &&
      elementToShow
    ) {
      const scrollElement = ref.current.findIndex(
        (el) => el.id === elementToShow
      );
      ref.current[scrollElement].scrollIntoView({ block: "center" });
      setClickToElement(false);
    }
  }, [feedView, clickToElement]);
  //
  useIntersectionArray(ref, feedView, currentId.setCurrentIdInView);
  return (
    <>
      <Header
        textAlign={"left"}
        fontWeight={"700"}
        color={"black"}
        padding={`${TOP_PARAGRAPH_SECTION_PADDING}px 0 0 0`}
        bigScreenPadding={0}
      >
        {CATEGORY_NAME.toUpperCase()}
      </Header>
      <PostBar
        gridRow={4}
        gridRowDesktop={3}
        feedView={feedView}
        posts={posts}
        currentId={currentId.currentIdInView}
        topMobile={`${TOP_NAV_HEIGHT}px`}
        topDesktop={0}
        clickToElement={clickToElement}
        setClickToElement={setClickToElement}
        elementToShow={elementToShow}
      />
      <RichTextParagraph markup={pageMarkup} />
      {returnPosts(posts, feedView, addToRefs, setElementToShow, true)}
    </>
  );
}
