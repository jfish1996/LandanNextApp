import React, { useRef, useState, useEffect } from "react";
import { returnPosts } from "../../lib/returnposts";
import {
  returnCategoryData,
  returnHomeArchiveData,
} from "../../lib/returnData";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import Header from "../../components/atoms/List-Items/Header";
import PostBar from "../../components/molecules/PostBar/PostBar";
import { useIntersectionArray } from "../../hooks/useIntersectionArray";
import { TOP_NAV_HEIGHT } from "../../styles/constants";
import SkeletonTemplate from "../../components/molecules/SkeletonTemplate/SkeletonTemplate";

const HomeArchive = ({ feedView, currentId }) => {
  const CATEGORY_NAME = "Home Archive";
  const { fetching, posts, richText } = returnHomeArchiveData();
  console.log(posts, "arch posts");
  const ref = useRef([]);
  const addToRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      console.log(el.id, "id");
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
  return fetching ? (
    <SkeletonTemplate pageTitle={CATEGORY_NAME} />
  ) : (
    <>
      <Header textAlign={"left"} fontWeight={"700"} color={"black"}>
        {CATEGORY_NAME.toUpperCase()}
      </Header>
      <PostBar
        gridRow={3}
        feedView={feedView}
        posts={posts}
        currentId={currentId.currentIdInView}
        topMobile={`${TOP_NAV_HEIGHT}px`}
        topDesktop={0}
        clickToElement={clickToElement}
        setClickToElement={setClickToElement}
        elementToShow={elementToShow}
      />
      <RichTextParagraph markup={richText} />
      {returnPosts(posts, feedView, addToRefs, setElementToShow)}
    </>
  );
};
const forwardHomeArchive = React.forwardRef(HomeArchive);
export default forwardHomeArchive;
