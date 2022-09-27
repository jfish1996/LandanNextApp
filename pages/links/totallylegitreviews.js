import React from "react";
import { returnSectionData } from "../../lib/returnData";
import { returnPosts } from "../../lib/returnposts";
import { TOP_PARAGRAPH_SECTION_PADDING } from "../../styles/constants";
import Header from "../../components/atoms/List-Items/Header";
import { returnLegitReviews } from "../../lib/returnData";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import LegitReview from "../../components/atoms/LegitReview/LegitReview";
import Flex from "../../components/atoms/Styled-Containers/Flex/Flex";

export default function TotallyLegitReviews({ feedView }) {
  const SECTION_NAME = "Totally Legit Reviews.links";
  const SECTION_DISPLAY_NAME = "Totally Legit Reviews";
  const { posts, markup } = returnSectionData(SECTION_NAME);
  const { reviews } = returnLegitReviews();

  return (
    <>
      <Header
        textAlign={"left"}
        fontWeight={"700"}
        color={"black"}
        padding={`${TOP_PARAGRAPH_SECTION_PADDING}px 0 0 0`}
        bigScreenPadding={0}
      >
        {SECTION_DISPLAY_NAME.toUpperCase()}
      </Header>
      <RichTextParagraph markup={markup} />

      {reviews?.map((item, idx) => {
        return <LegitReview markup={item?.attributes?.review} />;
      })}
    </>
  );
}
