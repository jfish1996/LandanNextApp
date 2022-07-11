import React from "react";
import { SIDEBAR_DATA, sideBarBuilder } from "./utils";
import { StyledSidebar } from "./styles";

export default function Sidebar() {
  return <StyledSidebar>{sideBarBuilder(SIDEBAR_DATA)}</StyledSidebar>;
}
