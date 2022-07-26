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
const { motion } = require("framer-motion");
const StyledP = styled.p`
  font-weight: ${(props) => props.fontWeight || "bold"};
  margin: 0;
  font-style: ${(props) => props.fontStyle};
`;
export default function PostContainer({ children, item, id }) {
  const { Title, FullDescription, Date } = item;
  const [updateLikeResult, updateLike] = useMutation(LIKE_MUTATION);
  const [updateFartResult, updateFart] = useMutation(FART_MUTATION);
  console.log(item);
  const category = item?.category?.data?.attributes.name;
  const variables = { id, likes: item.likes + 1 };
  const fartVariables = { id, farts: item.farts + 1 };

  return (
    <>
      {children}
      {item.likes >= 0 && category === "Social" && (
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
      <h3>{Title}</h3>
      <RichTextParagraph
        markup={FullDescription}
        width={"50px"}
        height={"50px"}
      />
      <StyledP fontWeight={400} fontStyle={"italic"}>
        {Date}
      </StyledP>
    </>
  );
}
