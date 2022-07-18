import React from "react";
import styled from "styled-components";
import { MAX_WINDOW_WIDTH } from "../../../styles/constants";

const StyledP = styled.p`
  text-align: ${(props) => props.textAlign};
  font-weight: bolder;
  font-family: "Arial Black";
  display: ${(props) => props.smallMediaDisplay};
  font-size: ${(props) => props.fontSize};
  padding: 0;
  margin: 0;
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    display: ${(props) => props.largeMediaDisplay};
  }
`;

const PaddingContainer = styled.div`
  padding: ${(props) => props.padding};
`;

export default function Title({
  firstName,
  lastName,
  padding,
  fontSize,
  textAlign,
  smallMediaDisplay,
  largeMediaDisplay,
}) {
  return (
    <PaddingContainer
      padding={padding}
      largeMediaDisplay={largeMediaDisplay}
      smallMediaDisplay={smallMediaDisplay}
    >
      <StyledP
        textAlign={textAlign}
        fontSize={fontSize}
        largeMediaDisplay={largeMediaDisplay}
        smallMediaDisplay={smallMediaDisplay}
      >
        {firstName}
      </StyledP>
      <StyledP
        textAlign={textAlign}
        fontSize={fontSize}
        largeMediaDisplay={largeMediaDisplay}
        smallMediaDisplay={smallMediaDisplay}
      >
        {lastName}
      </StyledP>
    </PaddingContainer>
  );
}
