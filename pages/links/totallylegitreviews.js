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
  console.log(reviews);

  return (
    <>
      <RichTextParagraph markup={markup} />
      {reviews?.map((item, idx) => {
        console.log(item?.attributes?.review);
        return <LegitReview markup={item?.attributes?.review} />;
      })}
    </>
  );
}
