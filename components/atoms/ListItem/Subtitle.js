import React from "react";
import styled from "styled-components";

const StyledSubTitle = styled.li`
  color: #434343;
  border: 1px solid black;
  padding: 10px 0%;
  text-align: right;
  font-weight: ${(props) => (props.active ? "bold" : null)};
  &:hover {
    color: #fff100;
    cursor: pointer;
  }
`;

export default function Subtitle({ children, active }) {
  return <StyledSubTitle active={active}>{children}</StyledSubTitle>;
}
