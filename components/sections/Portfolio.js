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

const PortfolioPage = ({
  fetching,
  feedView,
  currentId,
  pageTitle,
  pageMarkup,
  posts,
  category,
}) => {
  const CATEGORY_NAME = pageTitle;
  const [currentSubSection, setCurrentSubSection] = useState("");

  const [filtering, setFiltering] = useState(false);
  const { filteredPosts } = category
    ? returnFilteredCategory(currentSubSection)
    : returnFilteredData(pageTitle, currentSubSection);
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
  useIntersectionArray(
    ref,
    feedView,
    currentId.setCurrentIdInView,
    filtering,
    filteredPosts
  );

  return fetching ? (
    <SkeletonTemplate pageTitle={CATEGORY_NAME || "PORTFOLIO"} />
  ) : (
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
        feedView={feedView}
        topMobile={`${TOP_NAV_HEIGHT + 40}px`}
        topDesktop={"40px"}
        filtering={filtering}
        posts={filtering ? filteredPosts : posts}
        withFilter={true}
        currentId={currentId.currentIdInView}
        gridRowDesktop={4}
        //
        clickToElement={clickToElement}
        setClickToElement={setClickToElement}
        elementToShow={elementToShow}
        //
      />
      <RichTextParagraph markup={pageMarkup} />
      <Filterbar
        currentSubSection={currentSubSection}
        setCurrentSubSection={setCurrentSubSection}
        setFiltering={setFiltering}
        filtering={filtering}
      />
      {portfolioPostToRender(
        filtering,
        returnPosts(posts, feedView, addToRefs, setElementToShow),
        returnPosts(filteredPosts, feedView, addToRefs, setElementToShow)
      )}
    </>
  );
};
const forwardPortfolio = React.forwardRef(PortfolioPage);
export default forwardPortfolio;
