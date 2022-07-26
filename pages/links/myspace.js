import React from "react";
import { returnSectionData } from "../../lib/returnData";
import { returnLinks } from "../../lib/returnLinks";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";

export default function Myspace({ feedView }) {
  const SECTION_NAME = "Myspace.links";
  const { posts, markup } = returnSectionData(SECTION_NAME);
  let link;
  posts ? (link = posts[0]?.attributes?.FullDescription) : null;
  return (
    <>
      <RichTextParagraph markup={markup} />
      {returnLinks(posts, feedView, link)}
    </>
  );
}
