import React from "react";
import styled from "styled-components";
import StyledSvgContainer from "./StyledSvgContainer";

export default function GridBox({
  width,
  height,
  stroke,
  hover,
  fill,
  active,
}) {
  return (
    <StyledSvgContainer
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      fill={fill}
      height={height}
      width={width}
      stroke={stroke}
      hover={hover}
      active={active}
    >
      <path
        class="cls-1"
        d="M33.12 33.12h64.94v64.94H33.12zM117.53 33.12h64.94v64.94h-64.94zM201.93 33.12h64.94v64.94h-64.94zM33.12 117.53h64.94v64.94H33.12zM117.53 117.53h64.94v64.94h-64.94zM201.93 117.53h64.94v64.94h-64.94zM33.12 201.93h64.94v64.94H33.12zM117.53 201.93h64.94v64.94h-64.94zM201.93 201.93h64.94v64.94h-64.94z"
      />
    </StyledSvgContainer>
  );
}
