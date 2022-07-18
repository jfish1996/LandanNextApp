import React from "react";
import styled from "styled-components";
import StyledSvgContainer from "./StyledSvgContainer";

export default function Heart({ width, height, stroke, hover, fill, active }) {
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
      <g id="words">
        <path
          class="cls-1"
          d="M260.5,160.49A77.86,77.86,0,0,0,149.88,50.94l0,0v0A77.86,77.86,0,1,0,42.62,163.85L149.91,271.14l109.31-109.3,0-.06,1.26-1.26Z"
        />
      </g>
    </StyledSvgContainer>
  );
}
