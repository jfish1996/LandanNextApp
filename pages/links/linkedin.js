import React from "react";
import { returnSectionData } from "../../lib/returnData";
import { returnLinks } from "../../lib/returnLinks";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import { TOP_PARAGRAPH_SECTION_PADDING } from "../../styles/constants";
import Header from "../../components/atoms/List-Items/Header";
export default function LinkedIn({ feedView }) {
  const SECTION_NAME = "LinkedIn.links";
  const { posts, markup } = returnSectionData(SECTION_NAME);

  let link;
  posts ? (link = posts[0]?.attributes?.FullDescription) : null;
  return (
    <>
      <Header
        textAlign={"left"}
        fontWeight={"700"}
        color={"black"}
        padding={`${TOP_PARAGRAPH_SECTION_PADDING}px 0 0 0`}
        bigScreenPadding={0}
      >
        {"LINKEDIN"}
      </Header>
      <RichTextParagraph markup={markup} />
      {returnLinks(posts, feedView, link)}
    </>
  );
}
