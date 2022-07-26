import React from "react";
import { returnSectionData } from "../../lib/returnData";
import { returnPosts } from "../../lib/returnposts";
import { returnLegitReviews } from "../../lib/returnData";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import LegitReview from "../../components/atoms/LegitReview/LegitReview";

export default function TotallyLegitReviews({ feedView }) {
  const SECTION_NAME = "TotallyLegitReviews.links";
  const { posts, markup } = returnSectionData(SECTION_NAME);

  const { reviews } = returnLegitReviews();

  return (
    <>
      <RichTextParagraph markup={markup} />
      {reviews?.map((item, idx) => {
        return <LegitReview markup={item?.attributes?.review} />;
      })}
    </>
  );
}
