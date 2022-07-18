import React from "react";
import styled from "styled-components";
import GridView from "../templates/GridView";
import Grid from "../atoms/Styled-Containers/Grid/Grid";
import Sidebar from "../templates/Navigation-Bars/Sidebar/index";
import TopBar from "../templates/Navigation-Bars/TopBar/TopBar";
import Title from "../atoms/Title/Title";
import Flex from "../atoms/Styled-Containers/Flex/Flex";
import {
  MAX_WINDOW_WIDTH,
  MIN_WINDOW_WITH,
  SIDE_NAV_WIDTH,
  SIDE_NAV_MARGIN,
  SIDE_NAV_PADDING,
} from "../../styles/constants";
import MediaQuery from "react-responsive";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function AppLayout({ children, feedView, currentSection }) {
  return (
    <>
      <Layout>
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
