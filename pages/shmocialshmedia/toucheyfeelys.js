import React, { useRef } from "react";
import { returnPosts } from "../../lib/returnposts";
import { returnSectionData } from "../../lib/returnData";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import Header from "../../components/atoms/ListItem/Header";
import PostBar from "../../components/molecules/PostBar/PostBar";
import { useIntersectionArray } from "../../hooks/useIntersectionArray";

export default function ToucheyFeelys({ feedView, currentId }) {
  // const { posts, richText } = returnSectionData("Touchey Feelys.social");
  const SECTION_NAME = "Touchey Feelys.social";
  const SECTION = "Touchey Feelys";
  const { posts, markup } = returnSectionData(SECTION_NAME);
  const ref = useRef([]);
  const addToRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };
  useIntersectionArray(ref, feedView, currentId.setCurrentIdInView);
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
        gridRow={3}
        feedView={feedView}
        posts={posts}
        currentId={currentId.currentIdInView}
      />
      <RichTextParagraph markup={markup} />
      {returnPosts(posts, feedView, addToRefs)}
    </>
  );
}
