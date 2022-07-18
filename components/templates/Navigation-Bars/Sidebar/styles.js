import styled from "styled-components";
import {
  MAX_WINDOW_WIDTH,
  SIDE_NAV_WIDTH,
  SIDE_NAV_PADDING,
} from "../../../../styles/constants";
export const StyledSidebar = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  width: ${SIDE_NAV_WIDTH}px;
  height: 100vh;
  background-color: #ececed;
  overflow: scroll;
  padding: ${SIDE_NAV_PADDING}px;
  position: fixed;
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    display: ${(props) => props.bigScreenDisplay};
  }
`;

export const StyledSpan = styled.p`
  margin: 0;
  padding: 0;
  list-style-type: none;
  &:hover {
    color: #fff100;
    cursor: pointer;
  }
`;
