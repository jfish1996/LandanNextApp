import React from "react";
import styled from "styled-components";

const StyledHeader = styled.li`
  grid-column: 1/-1;
  grid-row: 1 / -1;
  color: ${(props) => (props.color ? props.color : "#434343")};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 21px;
  font-weight: ${(props) => (props.active ? "bold" : props.fontWeight)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "right")};
  list-style-type: none;
  padding: ${(props) => props.padding};
  /* &:hover {
    color: #fff100;
    cursor: pointer;
  } */
`;

export default function Header({
  children,
  active,
  textAlign,
  padding,
  fontWeight,
  color,
  onClick,
}) {
  return (
    <StyledHeader
      color={color}
      fontWeight={fontWeight}
      textAlign={textAlign}
      active={active}
      padding={padding}
      onClick={onClick}
    >
      {children}
    </StyledHeader>
  );
}
