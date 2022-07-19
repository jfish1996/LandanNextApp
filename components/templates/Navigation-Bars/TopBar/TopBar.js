import React from "react";
import {
  sideBarBuilder,
  SIDEBAR_DATA,
  topBarMainSection,
  topBarSubSection,
} from "../Sidebar/utils";
import styled from "styled-components";
import Title from "../../../atoms/Title/Title";
import TopBarSelctor from "../../../atoms/TopBarSelector/TopBarSelctor";
import {
  MAX_WINDOW_WIDTH,
  TOP_NAV_HEIGHT,
  Z_INDEXS,
} from "../../../../styles/constants";

const StyledTopBar = styled.div`
  width: 100%;
  z-index: ${Z_INDEXS.scrollBars};
  background-color: #ececed;
  position: sticky;
  top: 0;
  height: ${TOP_NAV_HEIGHT}px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row: 1;
  grid-column: 1 / -1;
  &::before {
    content: "";
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ececed;
    height: ${TOP_NAV_HEIGHT}px;
    z-index: -1;
  }
  &::after {
    content: "";
    width: 100%;
    position: fixed;
    top: 0;
    left: 46px;
    background-color: #ececed;
    height: ${TOP_NAV_HEIGHT}px;
    z-index: -1;
  }
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    display: none;
  }
`;

export default function TopBar({ currentSection }) {
  return (
    <>
      <StyledTopBar>
        <TopBarSelctor>
          <Title
            // textAlign={"center"}
            fontSize={"1.5rem"}
            firstName={"LANDAN"}
            lastName={"EARLEY"}
            padding={"5px 0"}
          />
          <Title
            // textAlign={"center"}
            fontSize={"1.5rem"}
            firstName={"LANDY"}
            lastName={"PANDY"}
            padding={"10px 0"}
          />
        </TopBarSelctor>
        {topBarMainSection(SIDEBAR_DATA, currentSection)}
        {topBarSubSection(SIDEBAR_DATA, currentSection)}
      </StyledTopBar>
    </>
  );
  //   {
  //     topBarBuilder(SIDEBAR_DATA, currentSection);
  //   }
}
