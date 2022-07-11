import React from "react";
import styled from "styled-components";
import GridView from "../templates/GridView";
import Sidebar from "../templates/Sidebar";

const Layout = styled.div`
  display: flex;
`;

export default function AppLayout({ children }) {
  return (
    <Layout>
      <Sidebar />
      <GridView>{children}</GridView>
    </Layout>
  );
}
