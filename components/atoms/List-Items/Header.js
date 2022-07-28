import React from "react";
import styled from "styled-components";
import {
  MAX_WINDOW_WIDTH,
  SMALL_SCREEN_FONTS,
  LARGE_SCREEN_FONTS,
  BODY_SECTION_TITLE,
} from "../../../styles/constants";
import { useStateContext } from "../../../lib/context";
const { motion } = require("framer-motion");
const StyledHeader = styled.li`
  /* grid-column: 1/-1; */
  grid-row: 2;
  color: ${(props) =>
    props.darkMode ? props.theme.dark.text : props.theme.light.text};
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${`${SMALL_SCREEN_FONTS}rem`};
  font-weight: ${(props) => (props.active ? "bold" : props.fontWeight)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "right")};
  list-style-type: none;
  padding: ${(props) => props.padding};
  &:hover {
    cursor: ${(props) => props.hoverCursor || null};
  }
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    grid-row: 1;
    font-size: ${`${BODY_SECTION_TITLE}rem`};
    padding: ${(props) => props.bigScreenPadding};
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
  bigScreenPadding,
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
      bigScreenPadding={bigScreenPadding}
    >
      {children}
    </StyledHeader>
  );
}
