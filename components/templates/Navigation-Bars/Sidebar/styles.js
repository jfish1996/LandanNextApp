import styled from "styled-components";
import {
  MAX_WINDOW_WIDTH,
  SIDE_NAV_WIDTH,
  SIDE_NAV_PADDING,
  TRANSITION_TIMES,
} from "../../../../styles/constants";
export const StyledSidebar = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  transition: ease-in-out ${TRANSITION_TIMES.sidebar}ms;
  width: ${SIDE_NAV_WIDTH}px;
  height: 100vh;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
  overflow: scroll;
  padding: ${SIDE_NAV_PADDING}px;
  position: fixed;
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    display: ${(props) => props.bigScreenDisplay};
  }
`;

export const StyledUl = styled.ul`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export const StyledSpan = styled.p`
  margin: 0;
  padding: 0;
  list-style-type: none;
  /* transition: ease-in-out ${TRANSITION_TIMES.text}ms; */
  &:hover {
    color: #fff100;
    cursor: pointer;
  }
`;
