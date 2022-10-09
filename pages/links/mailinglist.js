import React from "react";
import { returnSectionData } from "../../lib/returnData";
import { returnLinks } from "../../lib/returnLinks";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import { TOP_PARAGRAPH_SECTION_PADDING } from "../../styles/constants";
import Header from "../../components/atoms/List-Items/Header";

import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function MailingList({ feedView }) {
  const SECTION_NAME = "MailingList.links";
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
        {"MAILING LIST"}
      </Header>
      <MailchimpSubscribe />
      <RichTextParagraph markup={markup} />
      {returnLinks(posts, feedView, link)}
    </>
  );
}
