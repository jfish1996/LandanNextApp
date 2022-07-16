import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  text-align: right;
  font-weight: bolder;
  font-family: "Arial Black";
  font-size: 2.5rem;
  padding: 0;
  margin: 0;
`;

const PaddingContainer = styled.div`
  padding: ${(props) => props.padding};
`;

export default function Title({ firstName, lastName, padding }) {
  return (
    <PaddingContainer padding={padding}>
      <StyledP>{firstName}</StyledP>
      <StyledP>{lastName}</StyledP>
    </PaddingContainer>
  );
}
