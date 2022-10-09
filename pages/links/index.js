import React, { useEffect } from "react";
import { returnCategoryData } from "../../lib/returnData";
import { returnPosts } from "../../lib/returnposts";
import { returnLinks } from "../../lib/returnLinks";
import { TOP_PARAGRAPH_SECTION_PADDING } from "../../styles/constants";
import Header from "../../components/atoms/List-Items/Header";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
export default function Links({ feedView }) {
  const CATEGORY_NAME = "Links";
  const { markup, posts } = returnCategoryData(CATEGORY_NAME);
  useEffect(() => {
    feedView.setFeedViewProp(false);
  }, []);
  return (
    <>
      <Header
        textAlign={"left"}
        fontWeight={"700"}
        color={"black"}
        padding={`${TOP_PARAGRAPH_SECTION_PADDING}px 0 0 0`}
        bigScreenPadding={0}
      >
        {"LINKS"}
      </Header>
      <RichTextParagraph markup={markup} />
      {returnLinks(posts)}
    </>
  );
}
