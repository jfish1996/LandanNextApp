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
import { useInView, InView } from "react-intersection-observer";

const StyledTopBar = styled.div`
  width: 100%;
  z-index: ${Z_INDEXS.scrollBars};
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
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
  const { darkMode, setDarkMode } = useStateContext();
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (window.innerWidth < 920) {
      if (inView) {
        localStorage.setItem("darkMode", true);
        setDarkMode(true);
      } else {
        localStorage.setItem("darkMode", false);
        setDarkMode(false);
      }
    }
  }, [inView]);

  return (
    <>
      <StyledTopBar darkMode={darkMode}>
        <TopBarSelctor>
          <Title
            // textAlign={"center"}
            fontSize={"1.5rem"}
            firstName={"LANDAN"}
            lastName={"EARLEY"}
            padding={"5px 0"}
          />

          <div ref={ref}>
            <Title
              // textAlign={"center"}
              fontSize={"1.5rem"}
              firstName={"LANDY"}
              lastName={"PANDY"}
              padding={"10px 0"}
            />
          </div>
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
