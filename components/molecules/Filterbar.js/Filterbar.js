import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../../atoms/Styled-Containers/Flex/Flex";
import { useQuery } from "urql";
import { SUB_SECTION_TITLES } from "../../../lib/query";
import FilterItem from "../../atoms/ListItem/FilterItem";
import Grid from "../../atoms/Styled-Containers/Grid/Grid";

const StyledUL = styled.ul`
  margin: 0;
  display: flex;
  grid-column: 1/-1;
  overflow-x: scroll;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 10px 0;
`;

export default function Filterbar({
  setCurrentSubSection,
  setFiltering,
  filtering,
  currentSubSection,
}) {
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
    <StyledUL>
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
