import React from "react";
import { SIDEBAR_DATA, sideBarBuilder } from "./utils";
import { StyledSidebar } from "./styles";
import { BIG_NAME_BOTTOM_PADDING_SIDEBAR } from "../../../../styles/constants";
import { useStateContext } from "../../../../lib/context";
import Title from "../../../atoms/Title/Title";
import Link from "next/link";
const { motion } = require("framer-motion");

export default function Sidebar({ currentSection, display, bigScreenDisplay }) {
  const { darkMode } = useStateContext();

  return (
    <StyledSidebar
      darkMode={darkMode}
      display={display}
      bigScreenDisplay={bigScreenDisplay}
    >
      <Link href={"/home"}>
        <Title
          hoverCursor={"pointer"}
          fontSize={"2.5rem"}
          firstName={"LANDAN"}
          lastName={"EARLEY"}
          textAlign={"right"}
          padding={`0 0 ${BIG_NAME_BOTTOM_PADDING_SIDEBAR}px 0`}
        />
      </Link>
      {sideBarBuilder(SIDEBAR_DATA, currentSection)}
    </StyledSidebar>
  );
}
