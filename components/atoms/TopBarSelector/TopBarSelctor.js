import React from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  /* min-width: 400px; */
  /* background-color: red; */
  text-align: ${(props) => props.textAlign};
  overflow: scroll;
`;

export default function TopBarSelctor({ children, textAlign }) {
  return <StyledMenu textAlign={textAlign}>{children}</StyledMenu>;
}
