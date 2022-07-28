import React from "react";
import styled from "styled-components";
import {
  MAX_WINDOW_WIDTH,
  SECTION_LIST_ITEM_PADDING,
} from "../../../styles/constants";

const StyledSubTitle = styled.li`
  color: ${(props) =>
    props.darkMode ? props.theme.dark.font : props.theme.light.font};
  list-style-type: none;
  /* padding: ${SECTION_LIST_ITEM_PADDING}px 0; */
  font-size: ${(props) => props.smallScreenFont || `${1.3}rem`};
  text-align: right;
  font-weight: ${(props) => (props.active ? "bold" : null)};
  animation: ${(props) =>
    props.smallScreenAnimation ? "MoveUpDown 0.5s linear 0.5s" : null};
  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-60px);
    }
  }
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    font-size: ${(props) => props.largeScreenFont || `${1.3}rem`};
  }
`;

export default function Subtitle({
  children,
  active,
  onClick,
  color,
  darkMode,
  smallScreenFont,
  smallScreenAnimation,
  largeScreenFont,
}) {
  return (
    <StyledSubTitle
      onClick={onClick}
      active={active}
      color={color}
      smallScreen={smallScreenFont}
      smallScreenAnimation={smallScreenAnimation}
      largeScreen={largeScreenFont}
      darkMode={darkMode}
    >
      {children}
    </StyledSubTitle>
  );
}
