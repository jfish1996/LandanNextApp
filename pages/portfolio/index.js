import React, { useState, useRef, useEffect } from "react";
import { returnPosts } from "../../lib/returnposts";
import { portfolioPostToRender } from "../../lib/ternary-helper-functions";
import {
  returnCategoryData,
  returnFilteredCategory,
} from "../../lib/returnData";
import Filterbar from "../../components/molecules/Filterbar.js/Filterbar";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import Header from "../../components/atoms/ListItem/Header";
import PostBar from "../../components/molecules/PostBar/PostBar";
import { useIntersectionArray } from "../../hooks/useIntersectionArray";
const Portfolio = ({ feedView, currentId }) => {
  const CATEGORY_NAME = "Portfolio";
  const [currentSubSection, setCurrentSubSection] = useState("");
  const [filtering, setFiltering] = useState(false);
  const { markup, posts } = returnCategoryData(CATEGORY_NAME);
  const { filteredPosts } = returnFilteredCategory(currentSubSection);
  const ref = useRef([]);
  const addToRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };
  useIntersectionArray(
    ref,
    feedView,
    currentId.setCurrentIdInView,
    filtering,
    filteredPosts
  );
  return (
    <>
      <Header
        textAlign={"left"}
        padding={"16px 0 0 0"}
        fontWeight={"700"}
        color={"black"}
      >
        {CATEGORY_NAME.toUpperCase()}
      </Header>
      <PostBar
        withFilter={true}
        feedView={feedView}
        filtering={filtering}
        posts={filtering ? filteredPosts : posts}
        currentId={currentId.currentIdInView}
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
        returnPosts(posts, feedView, addToRefs),
        returnPosts(filteredPosts, feedView, addToRefs)
      )}
    </>
  );
};
const forwardPortfolio = React.forwardRef(Portfolio);
export default forwardPortfolio;
