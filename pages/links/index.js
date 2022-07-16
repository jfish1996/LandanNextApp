import React from "react";
import { returnCategoryData } from "../../lib/returnData";
import { returnPosts } from "../../lib/returnposts";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
export default function Links({ feedView }) {
  const CATEGORY_NAME = "Links";
  const { markup, posts } = returnCategoryData(CATEGORY_NAME);
  return (
    <>
      <RichTextParagraph markup={markup} />
      {returnPosts(posts, feedView)}
    </>
  );
}
