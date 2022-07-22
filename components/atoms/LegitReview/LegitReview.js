import React from "react";
import RichTextParagraph from "../RichTextParagraph/RichTextParagraph";
import StarRatingComponent from "react-star-rating-component";
export default function LegitReview({ markup }) {
  return (
    <>
      <RichTextParagraph markup={markup} />
    </>
  );
}
