import React from "react";
import styled from "styled-components";
import { useStateContext } from "../../../lib/context";

const StyledFilterListItem = styled.li`
  margin: 0;
  padding: 0 10px;
  list-style-type: none;
  display: inline-block;
  width: ${(props) => props.width};
  font-style: italic;
  color: ${(props) => (props.darkMode ? props.theme.dark.font : "grey")};
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
  animation: LeftRight 0.5s linear 0.6s;
  @keyframes LeftRight {
    0%,
    100% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-60px);
    }
  }
`;

export default function FilterItem({ onClick, children, active }) {
  const { darkMode } = useStateContext();
  return (
    <StyledFilterListItem
      active={active}
      darkMode={darkMode}
      datatype="data-text"
      onClick={onClick}
    >
      {children}
    </StyledFilterListItem>
  );
}
