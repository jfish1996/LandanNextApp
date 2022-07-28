import styled from "styled-components";

import {
  MAX_WINDOW_WIDTH,
  SIDE_NAV_WIDTH,
  SIDE_NAV_PADDING,
  TRANSITION_TIMES,
  Z_INDEXS,
  GAP_BETWEEN_UL_ITEMS,
  UL_SECTION_TITLE,
} from "../../../../styles/constants";
export const StyledSidebar = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  transition: ease-in-out ${TRANSITION_TIMES.sidebar}ms;
  width: ${SIDE_NAV_WIDTH}px;
  height: 100vh;
  z-index: ${Z_INDEXS.sidebar};
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
  /* background-color: var(--main-bg-color); */
  overflow: scroll;
  padding: ${SIDE_NAV_PADDING}px;
  position: fixed;
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    display: ${(props) => props.bigScreenDisplay};
  }
`;

export const StyledUl = styled.ul`
  margin: ${(props) => props.margin};
  display: flex;
  flex-direction: column;
  gap: ${GAP_BETWEEN_UL_ITEMS}px;
  padding: ${(props) => props.padding};
`;

export const StyledSpan = styled.p`
  font-size: ${(props) => `${props.smallScreenFont}rem`};
  margin: 0;
  padding: ${(props) => props.padding};
  list-style-type: none;
  /* transition: ease-in-out ${TRANSITION_TIMES.text}ms; */
  &:hover {
    color: #fff100;
    cursor: pointer;
  }
  /* @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    font-size: ${(props) =>
    `${props.smallScreenFont}rem` || `${UL_SECTION_TITLE}rem`};
  } */
`;

export const StyledCartListItem = styled.span`
  font-size: ${(props) => `${props.smallScreenFont}rem` || `${1.3}rem`};
  list-style-type: none;
  font-weight: ${(props) => (props.active ? "bold" : null)};
  /* transition: ease-in-out ${TRANSITION_TIMES.text}ms; */
  &:hover {
    color: ${(props) => props.colorHover};
    cursor: pointer;
  }
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    font-size: ${(props) => `${props.largeScreenFont}rem` || `${1.3}rem`};
  }
`;

export const StyledQuantityCircle = styled.div`
  width: 2rem;
  transition: ease-in-out ${TRANSITION_TIMES.sidebar}ms;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.body : props.theme.light.body};
  display: flex;
  justify-content: center;
  cursor: default;
  padding: 5px;
  border-radius: 50%;
  color: ${(props) =>
    props.darkMode ? props.theme.dark.text : props.theme.light.text};
`;
