import React from "react";
import { returnSectionData } from "../../lib/returnData";
import { returnPosts } from "../../lib/returnposts";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import { returnLinks } from "../../lib/returnLinks";
export default function Instagram({ feedView }) {
  const SECTION_NAME = "Instagram.links";
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
