import React from "react";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import Header from "../../components/atoms/List-Items/Header";
export default function NoContent({ pageTitle, pageMarkup }) {
  const CATEGORY_NAME = pageTitle;

  return (
    <>
      <Header textAlign={"left"} fontWeight={"700"} color={"black"}>
        {CATEGORY_NAME}
      </Header>

      <RichTextParagraph markup={pageMarkup} />
    </>
  );
}
