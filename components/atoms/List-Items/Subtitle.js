import React from "react";
import styled from "styled-components";

const StyledSubTitle = styled.li`
  color: ${(props) =>
    props.darkMode ? props.theme.dark.font : props.theme.light.font};
  list-style-type: none;
  padding: 10px 0;
  text-align: right;
  font-weight: ${(props) => (props.active ? "bold" : null)};
  /* &:hover {
    color: #fff100;
    cursor: pointer;
  } */
`;

export default function Subtitle({
  children,
  active,
  onClick,
  color,
  darkMode,
}) {
  return (
    <StyledSubTitle
      onClick={onClick}
      active={active}
      color={color}
      darkMode={darkMode}
    >
      {children}
    </StyledSubTitle>
  );
}
