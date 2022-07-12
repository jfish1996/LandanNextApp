import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  text-align: right;
  font-weight: bolder;
  font-size: 2.5rem;
  padding: 0;
  margin: 0;
`;

export default function Title({ firstName, lastName }) {
  return (
    <>
      <StyledP>{firstName}</StyledP>
      <StyledP>{lastName}</StyledP>
    </>
  );
}
