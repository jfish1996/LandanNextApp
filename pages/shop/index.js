import React, { useRef } from "react";
import { returnShopCategoryData } from "../../lib/returnData";
import { returnPosts } from "../../lib/returnposts";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import Header from "../../components/atoms/ListItem/Header";
import PostBar from "../../components/molecules/PostBar/PostBar";
import { useIntersectionArray } from "../../hooks/useIntersectionArray";

export default function Shop({ feedView, currentId }) {
  const CATEGORY_NAME = "Shop";
  const { products, markup } = returnShopCategoryData(CATEGORY_NAME);

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
        {CATEGORY_NAME.toUpperCase()}
      </Header>
      <PostBar
        gridRow={3}
        feedView={feedView}
        posts={products}
        currentId={currentId.currentIdInView}
      />
      <RichTextParagraph markup={markup} />
      {returnPosts(products, feedView, addToRefs)}
    </>
  );
}
