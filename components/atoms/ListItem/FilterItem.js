import React from "react";
import styled from "styled-components";

const StyledFilterListItem = styled.li`
  margin: 0;
  padding: 0 10px;
  list-style-type: none;
  display: inline-block;
  width: ${(props) => props.width};
  font-style: italic;
  color: grey;
  text-decoration: ${(props) => (props.active ? "underline" : null)};
  text-shadow: ${(props) =>
    props.active
      ? "0 0.015em #101010, 0 -0.015em #101010, 0.01em 0 #101010, -0.01em 0 #101010"
      : null};
  &:hover {
    text-shadow: 0 0.015em #101010, 0 -0.015em #101010, 0.01em 0 #101010,
      -0.01em 0 #101010;
    cursor: pointer;
  }
`;

export default function FilterItem({ onClick, children, active }) {
  return (
    <StyledFilterListItem
      active={active}
      datatype="data-text"
      onClick={onClick}
    >
      {children}
    </StyledFilterListItem>
  );
}
