import React from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  text-align: ${(props) => props.textAlign};
  overflow: scroll;
`;

export default function TopBarSelctor({ children, textAlign }) {
  return <StyledMenu textAlign={textAlign}>{children}</StyledMenu>;
}
