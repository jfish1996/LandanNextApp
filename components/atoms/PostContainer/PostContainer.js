import React from "react";
import GridBox from "../SVGs/GridBox";
import Heart from "../SVGs/Heart";
import Fart from "../SVGs/Fart";
import AddToCart from "../SVGs/AddToCart";
import Flex from "../Styled-Containers/Flex/Flex";
import { useMutation } from "urql";
import Checkout from "../SVGs/Checkout";
import { ArrowLeft, ArrowRight } from "../SVGs/Arrows";
import RichTextParagraph from "../RichTextParagraph/RichTextParagraph";
import { LIKE_MUTATION, FART_MUTATION } from "../../../lib/mutation";
import { theme } from "../../../styles/constants";
import styled from "styled-components";
import { MAX_WINDOW_WIDTH } from "../../../styles/constants";
const { motion } = require("framer-motion");
const StyledP = styled.p`
  font-weight: ${(props) => props.fontWeight || "bold"};
  margin: 0;
  font-style: ${(props) => props.fontStyle};
  font-size: ${(props) => props.fontSize};
`;

const StyledFlexTitleDate = styled.div`
  h3 {
    margin: 0;
  }
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    flex-direction: row;
    align-items: center;
  }
`;
export default function PostContainer({ children, item, id }) {
  const { Title, FullDescription, Date } = item;
  const [updateLikeResult, updateLike] = useMutation(LIKE_MUTATION);
  const [updateFartResult, updateFart] = useMutation(FART_MUTATION);
  const category = item?.category?.data?.attributes.name;
  const variables = { id, likes: item.likes + 1 };
  const fartVariables = { id, farts: item.farts + 1 };
  return (
    <>
      {children}
      {item.likes >= 0 && !item.sub_section?.data?.attributes?.Name && (
        <Flex gap={"20px"}>
          <Flex alignItems={"center"}>
            <Heart
              fill={theme.light.sidebar}
              hover="yellow"
              active={"black"}
              onClick={() => updateLike(variables)}
            />
            <StyledP>{item.likes}</StyledP>
          </Flex>
          <Flex alignItems={"center"}>
            <Fart
              fill={theme.light.sidebar}
              hover="yellow"
              active={"black"}
              onClick={() => updateFart(fartVariables)}
            />
            <StyledP>{item.farts || 0}</StyledP>
          </Flex>
        </Flex>
      )}
      <StyledFlexTitleDate gap={"10px"} alignItems={"center"}>
        <h3>{Title}</h3>
        <StyledP fontWeight={400} fontStyle={"italic"} fontSize={"0.8rem"}>
          {Date}
        </StyledP>
      </StyledFlexTitleDate>
      <RichTextParagraph
        margin={"0 0 40px 0"}
        markup={FullDescription}
        width={"50px"}
        height={"50px"}
      />
    </>
  );
}
