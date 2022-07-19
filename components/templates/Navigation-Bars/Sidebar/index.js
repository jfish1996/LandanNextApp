import React from "react";
import { SIDEBAR_DATA, sideBarBuilder } from "./utils";
import { StyledSidebar } from "./styles";
import { useStateContext } from "../../../../lib/context";
import Title from "../../../atoms/Title/Title";
const { motion } = require("framer-motion");

export default function Sidebar({ currentSection, display, bigScreenDisplay }) {
  const { darkMode } = useStateContext();

  return (
    <StyledSidebar
      darkMode={darkMode}
      display={display}
      bigScreenDisplay={bigScreenDisplay}
    >
      <Title
        fontSize={"2.5rem"}
        firstName={"LANDAN"}
        lastName={"EARLEY"}
        padding={"0 0 35px 0"}
      />
      {sideBarBuilder(SIDEBAR_DATA, currentSection)}
    </StyledSidebar>
  );
}
