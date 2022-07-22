import React from "react";
import { returnSectionData } from "../../lib/returnData";
import { returnLinks } from "../../lib/returnLinks";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";

export default function LinkedIn({ feedView }) {
  const SECTION_NAME = "LinkedIn.links";
  const { posts, richText } = returnSectionData(SECTION_NAME);
  let link;
  posts ? (link = posts[0]?.attributes?.FullDescription) : null;
  return (
    <>
      <RichTextParagraph markup={richText} />
      {returnLinks(posts, feedView, link)}
    </>
  );
}
