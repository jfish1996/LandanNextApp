import React from "react";
import styled from "styled-components";

const StyledSubTitle = styled.li`
  color: #434343;

  padding: 10px 0%;
  text-align: right;
  font-weight: ${(props) => (props.active ? "bold" : null)};
  /* &:hover {
    color: #fff100;
    cursor: pointer;
  } */
`;

export default function Subtitle({ children, active, onClick }) {
  return (
    <StyledSubTitle onClick={onClick} active={active}>
      {children}
    </StyledSubTitle>
  );
}
