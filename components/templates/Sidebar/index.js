import React from "react";
import { SIDEBAR_DATA, sideBarBuilder } from "./utils";
import { StyledSidebar } from "./styles";
import Title from "../../atoms/Title/Title";

export default function Sidebar() {
  return (
    <StyledSidebar>
      <Title firstName={"Landan"} lastName={"Earley"} />
      {sideBarBuilder(SIDEBAR_DATA)}
    </StyledSidebar>
  );
}
