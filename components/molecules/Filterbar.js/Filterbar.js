import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Flex from "../../atoms/Styled-Containers/Flex/Flex";
import { useQuery } from "urql";
import { SUB_SECTION_TITLES } from "../../../lib/query";
import FilterItem from "../../atoms/List-Items/FilterItem";
import Grid from "../../atoms/Styled-Containers/Grid/Grid";
import {
  MAX_WINDOW_WIDTH,
  TOP_NAV_HEIGHT,
  TRANSITION_TIMES,
  Z_INDEXS,
} from "../../../styles/constants";
import { motion } from "framer-motion";
import { useStateContext } from "../../../lib/context";

const StyledUL = styled(motion.ul)`
  z-index: ${Z_INDEXS.scrollBars};
  margin: 0;
  display: flex;
  grid-column: 1/-1;
  overflow-x: scroll;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.body : props.theme.light.body};
  transition: ease-in-out ${TRANSITION_TIMES.body}ms;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 10px 0;
  position: sticky;
  top: ${TOP_NAV_HEIGHT}px;
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
  const { darkMode } = useStateContext();
  const [currentListItem, setCurrentListItem] = useState(null);
  const [results] = useQuery({
    query: SUB_SECTION_TITLES,
  });

  const { data, fetching, error } = results;
  if (fetching) return <p>fetching...</p>;
  if (error) return <p>error {error}</p>;
  const sub_sections = data.subSections.data;

  const onClick = (subSectionName, idx) => {
    setFiltering(true);
    setCurrentSubSection(subSectionName);
    setCurrentListItem(idx);
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
      {sub_sections.map((title, idx) => {
        const cleanedTitle = title.attributes.Name.split(".")[0];
        return (
          <FilterItem
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
