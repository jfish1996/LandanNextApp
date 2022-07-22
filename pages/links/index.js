import React from "react";
import { returnCategoryData } from "../../lib/returnData";
import { returnPosts } from "../../lib/returnposts";
import { returnLinks } from "../../lib/returnLinks";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
export default function Links({ feedView }) {
  const CATEGORY_NAME = "Links";
  const { markup, posts } = returnCategoryData(CATEGORY_NAME);
  return (
    <>
      <RichTextParagraph markup={markup} />
      {returnLinks(posts)}
    </>
  );
}
