import React from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  text-align: ${(props) => props.textAlign};
  overflow: scroll;
  margin-right: ${(props) => props.marginRight};
`;

export default function TopBarSelctor({ children, textAlign, marginRight }) {
  return (
    <StyledMenu textAlign={textAlign} marginRight={marginRight}>
      {children}
    </StyledMenu>
  );
}
