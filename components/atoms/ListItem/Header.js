import React from "react";
import styled from "styled-components";

const StyledHeader = styled.li`
  color: #434343;
  border: 1px solid black;
  font-size: 21px;
  font-weight: ${(props) => (props.active ? "bold" : null)};
  text-align: right;
  &:hover {
    color: #fff100;
    cursor: pointer;
  }
`;

export default function Header({ children, active }) {
  return <StyledHeader active={active}>{children}</StyledHeader>;
}
