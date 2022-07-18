import React from "react";
import styled from "styled-components";
import { MAX_WINDOW_WIDTH } from "../../../styles/constants";
import { useStateContext } from "../../../lib/context";
const StyledHeader = styled.li`
  /* grid-column: 1/-1; */
  grid-row: 2;
  color: ${(props) =>
    props.darkMode ? props.theme.dark.text : props.theme.light.text};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 21px;
  font-weight: ${(props) => (props.active ? "bold" : props.fontWeight)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "right")};
  list-style-type: none;
  padding: ${(props) => props.padding};
  &:hover {
    cursor: ${(props) => props.hoverCursor || null};
  }
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    grid-row: 1;
  }
`;

export default function Header({
  children,
  active,
  textAlign,
  padding,
  fontWeight,
  color,
  onClick,
  hoverCursor,
}) {
  const { darkMode } = useStateContext();
  return (
    <StyledHeader
      color={color}
      fontWeight={fontWeight}
      textAlign={textAlign}
      active={active}
      darkMode={darkMode}
      padding={padding}
      onClick={onClick}
      hoverCursor={hoverCursor}
    >
      {children}
    </StyledHeader>
  );
}
