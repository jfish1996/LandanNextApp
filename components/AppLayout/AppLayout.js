import React from "react";
import styled from "styled-components";
import GridView from "../templates/GridView";
import Grid from "../atoms/Styled-Containers/Grid/Grid";
import Sidebar from "../templates/Navigation-Bars/Sidebar/index";
import TopBar from "../templates/Navigation-Bars/TopBar/TopBar";
import Title from "../atoms/Title/Title";
import Flex from "../atoms/Styled-Containers/Flex/Flex";
import { useStateContext } from "../../lib/context";
import { createGlobalStyle } from "styled-components";
import {
  MAX_WINDOW_WIDTH,
  MIN_WINDOW_WITH,
  SIDE_NAV_WIDTH,
  SIDE_NAV_MARGIN,
  SIDE_NAV_PADDING,
  TRANSITION_TIMES,
  GRID_BOX_WIDTH,
  GRID_GAP,
  MAIN_NAME_CONTENT_PADDING,
  BIG_NAME_BOTTOM_PADDING_BODY,
  UL_MARGIN,
  WHOLE_BODY_MOBILE_MARGIN,
} from "../../styles/constants";
import MediaQuery from "react-responsive";
import Link from "next/link";

const GlobalStyle = createGlobalStyle`
  body {
    background-color : ${(props) =>
      props.darkMode ? props.theme.dark.body : props.theme.light.body};
       transition: ease-in-out ${TRANSITION_TIMES.body}ms;
     
  }

  * {
  color: ${(props) =>
    props.darkMode ? props.theme.dark.text : props.theme.light.text};
    
  }

  a {
  color: ${(props) => (props.darkMode ? "white" : "black")};
  text-decoration: underline;
}


a:hover {
  color: yellow;
}
  `;

const Layout = styled.div`
  display: flex;
  transition: ease-out 300ms;
  color: ${(props) =>
    props.darkMode ? props.theme.dark.text : props.theme.light.text};
  flex-direction: row;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.body : props.theme.light.body};
  height: 100%;
`;

export default function AppLayout({ children, feedView, currentSection }) {
  const { darkMode, setDarkMode } = useStateContext();
  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <Layout darkMode={darkMode}>
        <Sidebar
          currentSection={currentSection}
          display={"none"}
          bigScreenDisplay={"flex"}
        />

        <Grid
          width={`${MAX_WINDOW_WIDTH}px`}
          smallDesktopGridWidth={`${MIN_WINDOW_WITH}px`}
          mediumDesktopGridWith={`${
            MIN_WINDOW_WITH + GRID_BOX_WIDTH + GRID_GAP
          }px`}
          fullDesktopGridWith={`${MAX_WINDOW_WIDTH}px`}
          // margin={`0 ${WHOLE_BODY_MOBILE_MARGIN}px`}
          minWidth={`${MIN_WINDOW_WITH}px`}
          bigScreenMargin={`${SIDE_NAV_PADDING}px ${SIDE_NAV_PADDING}px ${
            SIDE_NAV_PADDING + UL_MARGIN
          }px ${SIDE_NAV_MARGIN}px`}
        >
          <Title
            firstName={"LANDY"}
            lastName={"PANDYY"}
            fontSize={"2.5rem"}
            padding={`0 0 ${BIG_NAME_BOTTOM_PADDING_BODY}px 0`}
            hoverCursor={"pointer"}
            onClick={() => {
              localStorage.setItem("darkMode", !darkMode);
              setDarkMode(!darkMode);
            }}
            smallMediaDisplay={"none"}
            largeMediaDisplay={"block"}
          />

          <GridView
            feedView={feedView}
            margin={`0 ${WHOLE_BODY_MOBILE_MARGIN}px 0 0`}
          >
            <TopBar currentSection={currentSection} />
            {children}
          </GridView>
        </Grid>
      </Layout>
    </>
  );
}
