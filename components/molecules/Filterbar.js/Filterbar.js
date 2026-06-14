import React, { useState } from "react";
import styled from "styled-components";
import FilterItem from "../../atoms/List-Items/FilterItem";
import {
  MAX_WINDOW_WIDTH,
  TOP_NAV_HEIGHT,
  Z_INDEXS,
  HEADER_AND_SCROLLBAR_PADDING,
} from "../../../styles/constants";
import { motion } from "framer-motion";
import { returnSubSections } from "../../../lib/returnData";
import { useStateContext } from "../../../lib/context";

const StyledUL = styled(motion.ul)`
  position: sticky;
  z-index: ${Z_INDEXS.scrollBars};
  margin: 0 0 ${HEADER_AND_SCROLLBAR_PADDING}px 0;
  display: flex;
  grid-column: 1/-1;
  overflow-x: scroll;
  width: 100%;
  box-sizing: border-box;
  isolation: isolate;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 10px 0;
  top: ${TOP_NAV_HEIGHT}px;

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -4px;
    right: -4px;
    background-color: ${(props) =>
      props.darkMode ? props.theme.dark.body : props.theme.light.body};
    z-index: -1;
    pointer-events: none;
  }

  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    top: 0;
  }
`;

export default function Filterbar({
  setCurrentSubSection,
  setFiltering,
  filtering,
  currentSubSection,
}) {
  const { data } = returnSubSections();
  const [currentListItem, setCurrentListItem] = useState(null);
  const { darkMode } = useStateContext();

  const sub_sections = data?.subSections?.data;

  const onClick = (subSectionName, idx) => {
    if (currentSubSection === subSectionName) {
      setFiltering(false);
      setCurrentSubSection("");
      setCurrentListItem(null);
    } else {
      setFiltering(true);
      setCurrentSubSection(subSectionName);
      setCurrentListItem(idx);
    }
  };

  return (
    <StyledUL darkMode={darkMode}>
      <FilterItem
        onClick={() => {
          setFiltering(false), setCurrentListItem(null);
        }}
      >
        X
      </FilterItem>
      {sub_sections?.map((title, idx) => {
        const cleanedTitle = title.attributes.Name.split(".")[0];

        return (
          <FilterItem
            key={idx + title.attributes.Name}
            active={idx === currentListItem ? true : false}
            onClick={() => onClick(title.attributes.Name, idx)}
          >
            {cleanedTitle}
          </FilterItem>
        );
      })}
    </StyledUL>
  );
}
