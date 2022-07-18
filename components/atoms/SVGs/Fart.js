import React from "react";
import styled from "styled-components";
import StyledSvgContainer from "./StyledSvgContainer";
export default function Fart({ width, height, stroke, hover, fill, active }) {
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
      {/* <g id="words"> */}

      <g id="words">
        <path
          class="cls-1"
          d="M278.8 52.26 145.14 84.53M278.8 52.26 203.62 175.7M170.67 164.63s47.81-4.26 40.41 46.1c0 0-5.67 40.44-57.4 23.52"
        />
        <path
          class="cls-1"
          d="M160.31 207.32s4.23 35.64-30.57 39.92c-39.37 4.83-49-26.65-49-26.65"
        />
        <path
          class="cls-1"
          d="M99.59 217.51s-48.3 16.74-71.25-27.82c-23.66-45.94 19-72 19-72s20-14.82 50.53-5.52"
        />
        <path
          class="cls-1"
          d="M146.72 106.26s9.7-38.14-36.2-37.53c0 0-39.38-1.16-33.74 39.59"
        />
      </g>
      {/* </g> */}
    </StyledSvgContainer>
  );
}
