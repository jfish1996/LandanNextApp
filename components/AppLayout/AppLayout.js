import React from "react";
import styled from "styled-components";
import GridView from "../templates/GridView";
import Grid from "../atoms/Grid/Grid";
import Sidebar from "../templates/Sidebar";
import Title from "../atoms/Title/Title";
import Flex from "../atoms/Flex/Flex";

const Layout = styled.div`
  display: flex;
  overflow: hidden;
`;

export default function AppLayout({ children }) {
  return (
    <Layout>
      <Sidebar />

      <Grid width={"830px"} margin={"75px 0 0 425px"} minWidth={"420px"}>
        <Flex alignItems={"flex-start"} flexDirection={"column"}>
          <Title firstName={"Landy"} lastName={"Pandy"} />
        </Flex>
        <GridView>{children}</GridView>
      </Grid>
    </Layout>
  );
}
