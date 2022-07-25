import React from "react";
import styled from "styled-components";
import StyledSvgContainer from "./StyledSvgContainer";
const { motion } = require("framer-motion");

const StyledDiv = styled(motion.div)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-self: end;
`;

const StyledSVG = styled(motion.svg)`
  fill: ${(props) => props.fill};
  &:hover {
    fill: ${(props) => props.hover};
  }
  &:active {
    fill: ${(props) => props.active};
  }
`;

const StyledRect = styled.rect`
  fill: ${(props) => props.fill};
  &:hover {
    fill: ${(props) => props.hover};
  }
  &:active {
    fill: ${(props) => props.active};
  }
`;

export default function Plus({
  width,
  height,
  stroke,
  hover,
  fill,
  active,
  strokeWidth,
  onClick,
}) {
  return (
    <StyledDiv
      width={"30px"}
      height={"30px"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      onClick={onClick}
    >
      <StyledSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        fill={fill}
        hover={hover}
        active={active}
      >
        <rect class="cls-1" x="25.44" y="120.9" width="249.12" height="58.21" />
        <rect
          class="cls-1"
          x="25.44"
          y="120.9"
          width="249.12"
          height="58.21"
          transform="translate(300) rotate(90)"
        />
      </StyledSVG>
    </StyledDiv>
    // </StyledSvgContainer>
  );
}
