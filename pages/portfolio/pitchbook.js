import { useState, useRef } from "react";
import { returnPosts } from "../../lib/returnposts";
import { returnSectionData, returnFilteredData } from "../../lib/returnData";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import Filterbar from "../../components/molecules/Filterbar.js/Filterbar";
import { portfolioPostToRender } from "../../lib/ternary-helper-functions";
import PostBar from "../../components/molecules/PostBar/PostBar";
import Header from "../../components/atoms/ListItem/Header";
import { useIntersectionArray } from "../../hooks/useIntersectionArray";

export default function PitchBook({ feedView, currentId }) {
  const SECTION_NAME = "PitchBook.port";
  const SECTION = "PitchBook";
  const [currentSubSection, setCurrentSubSection] = useState("");
  const [filtering, setFiltering] = useState(false);
  const { posts, richText } = returnSectionData("PitchBook.port");
  const { filteredPosts } = returnFilteredData(SECTION_NAME, currentSubSection);
  const addToRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  const ref = useRef([]);
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
      <RichTextParagraph markup={richText} />
      <PostBar
        withFilter={true}
        feedView={feedView}
        posts={filtering ? filteredPosts : posts}
        currentId={currentId.currentIdInView}
      />
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
}
