import React from "react";
import { returnPosts } from "../../lib/returnposts";
import { returnSectionData } from "../../lib/returnData";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
export default function Goodfinds({ feedView }) {
  const { posts, richText } = returnSectionData("Good Finds.social");
  return (
    <>
      <RichTextParagraph markup={richText} />
      {returnPosts(posts, feedView)}
    </>
  );
}
