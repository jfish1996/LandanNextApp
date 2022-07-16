import React from "react";
import { returnSectionData } from "../../lib/returnData";
import { returnPosts } from "../../lib/returnposts";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
export default function Instagram({ feedView }) {
  const SECTION_NAME = "Instagram.links";
  const { posts, richText } = returnSectionData(SECTION_NAME);
  return (
    <>
      <RichTextParagraph markup={richText} />
      {returnPosts(posts, feedView)}
    </>
  );
}
