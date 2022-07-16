import React from "react";
import styled from "styled-components";
import GridView from "../templates/GridView";
import Grid from "../atoms/Styled-Containers/Grid/Grid";
import Sidebar from "../templates/Sidebar";
import Title from "../atoms/Title/Title";
import Flex from "../atoms/Styled-Containers/Flex/Flex";
import { MAX_WINDOW_WIDTH } from "../../styles/constants";

const Layout = styled.div`
  display: flex;
  /* overflow: hidden; */
`;

export default function AppLayout({ children, feedView, currentSection }) {
  return (
    <Layout>
      <Sidebar
        currentSection={currentSection}
        display={"none"}
        bigScreenDisplay={"flex"}
      />
      <Grid
        width={MAX_WINDOW_WIDTH}
        margin={"0"}
        minWidth={"630px"}
        bigScreenMargin={"75px 75px 0 425px"}
      >
        <Flex
          alignItems={"flex-start"}
          flexDirection={"column"}
          padding={"0 0 35px 0"}
        >
          <Title firstName={"LANDY"} lastName={"PANDY"} />
        </Flex>
        <GridView feedView={feedView}>{children}</GridView>
      </Grid>
    </Layout>
  );
}
