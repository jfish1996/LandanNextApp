import React from "react";
import styled from "styled-components";
import StyledSvgContainer from "./StyledSvgContainer";
const { motion } = require("framer-motion");

export default function Heart({
  width,
  height,
  stroke,
  hover,
  fill,
  active,
  strokeWidth,
  scale = { scale },
}) {
  return (
    <StyledSvgContainer
      strokeWidth={strokeWidth}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      active={active}
      hover={hover}
    >
      <motion.path
        whileHover={{ scale: scale }}
        d="M260.5,160.49A77.86,77.86,0,0,0,149.88,50.94l0,0v0A77.86,77.86,0,1,0,42.62,163.85L149.91,271.14l109.31-109.3,0-.06,1.26-1.26Z"
      />
    </StyledSvgContainer>
  );
}
