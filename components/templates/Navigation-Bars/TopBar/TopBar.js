import React, { useEffect } from "react";
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
import { useStateContext } from "../../../../lib/context";
import Link from "next/link";

const StyledTopBar = styled.div`
  width: 100%;
  z-index: ${Z_INDEXS.scrollBars};
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
  position: sticky;
  top: 0;
  gap: 5px;
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
    background-color: ${(props) =>
      props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
    height: ${TOP_NAV_HEIGHT}px;
    z-index: -1;
  }
  &::after {
    content: "";
    width: 100%;
    position: fixed;
    top: 0;
    left: 46px;
    background-color: ${(props) =>
      props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
    height: ${TOP_NAV_HEIGHT}px;
    z-index: -1;
  }
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    display: none;
  }
`;

export default function TopBar({ currentSection }) {
  const { darkMode, setDarkMode, firstVisit, setFirstVisit } =
    useStateContext();

  useEffect(() => {
    if (firstVisit === false) {
      return;
    }

    setTimeout(() => {
      setFirstVisit(false);
    }, 3000);
  }, []);
  return (
    <>
      <StyledTopBar darkMode={darkMode}>
        <TopBarSelctor
          onSwipeUp={() => {
            localStorage.setItem("darkMode", true);
            setDarkMode(true);
          }}
          onSwipedDown={() => {
            localStorage.setItem("darkMode", false);
            setDarkMode(false);
          }}
          onScroll={(e) => {
            if (e.target.scrollTop === 0) {
              localStorage.setItem("darkMode", false);
              setDarkMode(false);
            } else if (e.target.scrollTop === 86) {
              localStorage.setItem("darkMode", true);
              setDarkMode(true);
            } else {
              return;
            }
          }}
        >
          <Link href={"/home"}>
            <Title
              fontSize={"1.5rem"}
              firstName={"LANDAN"}
              lastName={"EARLEY"}
              padding={"10px 0"}
              hoverCursor={"pointer"}
            />
          </Link>
          <Title
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
