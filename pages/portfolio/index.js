import React, { useState, useRef, useEffect } from "react";
import { returnPosts } from "../../lib/returnposts";
import { portfolioPostToRender } from "../../lib/ternary-helper-functions";
import {
  returnCategoryData,
  returnFilteredCategory,
} from "../../lib/returnData";
import Filterbar from "../../components/molecules/Filterbar.js/Filterbar";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import Header from "../../components/atoms/List-Items/Header";
import PostBar from "../../components/molecules/PostBar/PostBar";
import { useIntersectionArray } from "../../hooks/useIntersectionArray";
import { TOP_NAV_HEIGHT } from "../../styles/constants";
const Portfolio = ({ feedView, currentId }) => {
  const CATEGORY_NAME = "Portfolio";
  const [currentSubSection, setCurrentSubSection] = useState("");
  const [filtering, setFiltering] = useState(false);
  //
  //
  const { markup, posts } = returnCategoryData(CATEGORY_NAME);
  const { filteredPosts } = returnFilteredCategory(currentSubSection);
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

  return (
    <>
      <Header textAlign={"left"} fontWeight={"700"} color={"black"}>
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
      <RichTextParagraph markup={markup} />
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
const forwardPortfolio = React.forwardRef(Portfolio);
export default forwardPortfolio;
