import React from "react";
import Heart from "../SVGs/Heart";
import Fart from "../SVGs/Fart";
import Flex from "../Styled-Containers/Flex/Flex";
import RichTextParagraph from "../RichTextParagraph/RichTextParagraph";
import { useOptimisticPostMetrics } from "../../../hooks/useOptimisticPostMetrics";
import { theme } from "../../../styles/constants";
import styled from "styled-components";
import { MAX_WINDOW_WIDTH } from "../../../styles/constants";
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
  const { likes, farts, incrementLikes, incrementFarts } =
    useOptimisticPostMetrics(id, item);
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
              onClick={incrementLikes}
            />
            <StyledP>{likes}</StyledP>
          </Flex>
          <Flex alignItems={"center"}>
            <Fart
              fill={theme.light.sidebar}
              hover="yellow"
              active={"black"}
              onClick={incrementFarts}
            />
            <StyledP>{farts}</StyledP>
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
