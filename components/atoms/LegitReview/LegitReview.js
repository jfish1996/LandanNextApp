import React from "react";
import RichTextParagraph from "../RichTextParagraph/RichTextParagraph";
import StarRatingComponent from "react-star-rating-component";
import styled from "styled-components";

const StyledContainer = styled.div`
  border-bottom: 1px solid black; ;
`;

export default function LegitReview({ markup }) {
  return <RichTextParagraph markup={markup} />;
}
