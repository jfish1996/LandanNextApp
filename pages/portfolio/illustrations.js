import React, { useState, useRef } from "react";
import { returnPosts } from "../../lib/returnposts";
import { returnSectionData, returnFilteredData } from "../../lib/returnData";
import { portfolioPostToRender } from "../../lib/ternary-helper-functions";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import Filterbar from "../../components/molecules/Filterbar.js/Filterbar";
import Header from "../../components/atoms/ListItem/Header";
import PostBar from "../../components/molecules/PostBar/PostBar";
import { useIntersectionArray } from "../../hooks/useIntersectionArray";
const Illustrations = ({ feedView, currentId }) => {
  const SECTION_NAME = "Illustrations.port";
  const SECTION = "Illustrations";
  const [currentSubSection, setCurrentSubSection] = useState("");
  const [filtering, setFiltering] = useState(false);
  const { posts, richText } = returnSectionData(SECTION_NAME);
  const { filteredPosts } = returnFilteredData(SECTION_NAME, currentSubSection);

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
        {SECTION.toUpperCase()}
      </Header>
      <PostBar
        withFilter={true}
        feedView={feedView}
        posts={filtering ? filteredPosts : posts}
        currentId={currentId.currentIdInView}
      />
      <RichTextParagraph markup={richText} />
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
const forwardIllustration = React.forwardRef(Illustrations);
export default forwardIllustration;
