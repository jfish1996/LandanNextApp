import { useState, useEffect, useRef } from "react";
import { returnPosts } from "../../lib/returnposts";
import { returnSectionData, returnFilteredData } from "../../lib/returnData";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import Filterbar from "../../components/molecules/Filterbar.js/Filterbar";
import { portfolioPostToRender } from "../../lib/ternary-helper-functions";
import PostBar from "../../components/molecules/PostBar/PostBar";
import Header from "../../components/atoms/List-Items/Header";
import { useIntersectionArray } from "../../hooks/useIntersectionArray";
import { TOP_NAV_HEIGHT } from "../../styles/constants";
import SkeletonTemplate from "../../components/molecules/SkeletonTemplate/SkeletonTemplate";

export default function PitchBook({ feedView, currentId }) {
  const SECTION_NAME = "PitchBook.port";
  const SECTION = "PitchBook";
  const [currentSubSection, setCurrentSubSection] = useState("");
  const [filtering, setFiltering] = useState(false);
  const { fetching, posts, markup } = returnSectionData("PitchBook.port");
  const { filteredPosts } = returnFilteredData(SECTION_NAME, currentSubSection);
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

  const ref = useRef([]);
  useIntersectionArray(
    ref,
    feedView,
    currentId.setCurrentIdInView,
    filtering,
    filteredPosts
  );
  return fetching ? (
    <SkeletonTemplate pageTitle={SECTION} />
  ) : (
    <>
      <Header textAlign={"left"} fontWeight={"700"} color={"black"}>
        {SECTION.toUpperCase()}
      </Header>
      <RichTextParagraph markup={markup} />
      <PostBar
        withFilter={true}
        feedView={feedView}
        posts={filtering ? filteredPosts : posts}
        currentId={currentId.currentIdInView}
        topMobile={`${TOP_NAV_HEIGHT + 40}px`}
        topDesktop={"40px"}
        gridRowDesktop={4}
        clickToElement={clickToElement}
        setClickToElement={setClickToElement}
        elementToShow={elementToShow}
      />
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
}
