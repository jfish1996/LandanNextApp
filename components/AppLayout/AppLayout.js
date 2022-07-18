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
} from "../../styles/constants";
import MediaQuery from "react-responsive";

const GlobalStyle = createGlobalStyle`
  body {
    background-color : ${(props) =>
      props.darkMode ? props.theme.dark.body : props.theme.light.body};
       transition: ease-in-out 300ms;
  }
  `;

const Layout = styled.div`
  display: flex;
  transition: ease-out 300ms;
  color: ${(props) =>
    props.darkMode ? props.theme.dark.text : props.theme.light.text};
  flex-direction: row;
  /* background-color: ${(props) =>
    props.darkMode ? props.theme.dark.body : props.theme.light.body}; */
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
          margin={"0"}
          minWidth={`${MIN_WINDOW_WITH}px`}
          bigScreenMargin={`${SIDE_NAV_PADDING}px ${SIDE_NAV_PADDING}px 0 ${SIDE_NAV_MARGIN}px`}
        >
          {/* <Flex
            alignItems={"flex-start"}
            flexDirection={"column"}
            padding={"0 0 35px 0"}
          > */}
          <Title
            firstName={"LANDY"}
            lastName={"PANDY"}
            fontSize={"2.5rem"}
            hoverCursor={"pointer"}
            onClick={() => {
              setDarkMode((prevState) => !prevState), console.log(darkMode);
            }}
            smallMediaDisplay={"none"}
            largeMediaDisplay={"block"}
          />
          {/* </Flex> */}
          <GridView feedView={feedView}>
            <TopBar currentSection={currentSection} />
            {children}
          </GridView>
        </Grid>
      </Layout>
    </>
  );
}
