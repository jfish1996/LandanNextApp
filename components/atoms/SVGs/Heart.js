import React from "react";
import styled from "styled-components";
import StyledSvgContainer from "./StyledSvgContainer";
const { motion } = require("framer-motion");

const StyledDiv = styled(motion.div)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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

export default function Heart({
  width,
  height,
  stroke,
  hover,
  fill,
  active,
  strokeWidth,
  onClick,
  scale = { scale },
}) {
  return (
    // <StyledSvgContainer
    //   strokeWidth={strokeWidth}
    // width="70px"
    // height="70px"
    //   fill={fill}
    //   stroke={stroke}

    //   active={active}
    //   hover={hover}
    // >
    //   <path d="M260.5,160.49c13.35-13.98,21.55-32.9,21.55-53.75,0-43.01-34.87-77.88-77.88-77.88-21.12,0-40.27,8.42-54.3,22.08h-.03c-14.01-13.5-33.04-21.81-54.03-21.81-43.01,0-77.88,34.87-77.88,77.88,0,22.43,9.5,42.63,24.67,56.84l107.29,107.29,109.31-109.3s.04-.04,.06-.06l1.26-1.26-.03-.03Z" />
    // </StyledSvgContainer>
    // <StyledSvgContainer>
    <StyledDiv
      width={"50px"}
      height={"50px"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      onClick={onClick}
    >
      <StyledSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        fill={fill}
        active={active}
        hover={hover}
      >
        <path d="M260.5,160.49c13.35-13.98,21.55-32.9,21.55-53.75,0-43.01-34.87-77.88-77.88-77.88-21.12,0-40.27,8.42-54.3,22.08h-.03c-14.01-13.5-33.04-21.81-54.03-21.81-43.01,0-77.88,34.87-77.88,77.88,0,22.43,9.5,42.63,24.67,56.84l107.29,107.29,109.31-109.3s.04-.04,.06-.06l1.26-1.26-.03-.03Z" />
      </StyledSVG>
    </StyledDiv>
    // </StyledSvgContainer>
  );
}
