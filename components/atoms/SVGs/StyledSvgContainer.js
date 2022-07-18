import React from "react";
import styled from "styled-components";

const StyledContainer = styled.svg`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  fill: ${(props) => props.fill};
  stroke: ${(props) => props.stroke};
  &:hover {
    fill: ${(props) => props.hover};
  }
  &:active {
    fill: ${(props) => props.active};
  }
`;
export default function StyledSvgContainer({
  children,
  fill,
  height,
  width,
  stroke,
  hover,
  active,
}) {
  return (
    <StyledContainer
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      fill={fill}
      height={height}
      width={width}
      stroke={stroke}
      hover={hover}
      active={active}
    >
      {children}
    </StyledContainer>
  );
}
