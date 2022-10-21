import React from "react";
import { returnSectionData } from "../../lib/returnData";
import { returnPosts } from "../../lib/returnposts";
import { returnLegitReviews } from "../../lib/returnData";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import LegitReview from "../../components/atoms/LegitReview/LegitReview";
import Flex from "../../components/atoms/Styled-Containers/Flex/Flex";
import { TOP_PARAGRAPH_SECTION_PADDING } from "../../styles/constants";
import Header from "../../components/atoms/List-Items/Header";
export default function TotallyLegitReviews({ feedView }) {
  const SECTION_NAME = "Totally Legit Reviews.links";
  const SECTION_DISPLAY_NAME = "totally legit reviews";
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
        {SECTION_DISPLAY_NAME}
      </Header>
      <RichTextParagraph
        markup={markup}
        borderBottom={"1px solid lightgrey"}
        bigScreenPadding={"0 0 32px 0"}
      />

      {reviews?.map((item, idx) => {
        return (
          <LegitReview markup={item?.attributes?.review} key={idx + "legit"} />
        );
      })}
    </>
  );
}
