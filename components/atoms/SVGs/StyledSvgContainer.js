import React from "react";
import styled from "styled-components";
const { motion } = require("framer-motion");
const StyledContainer = styled(motion.svg)`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  flex-shrink: ${(props) => props.flexShrink};
  position: ${(props) => props.position};
  margin: ${(props) => props.margin};
  left: ${(props) => props.left};
  fill: ${(props) => props.fill};
  stroke: ${(props) => props.stroke};
  stroke-width: ${(props) => props.strokeWidth};
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
  position,
  left,
  margin,
  stroke,
  strokeWidth,
  hover,
  active,
  flexShrink,
  viewBox,
  whileHover,
  whileTap,
  onClick,
  style,
}) {
  return (
    <StyledContainer
      style={style}
      viewBox={viewBox}
      onClick={onClick}
      position={position}
      margin={margin}
      left={left}
      strokeWidth={strokeWidth}
      fill={fill}
      flexShrink={flexShrink}
      height={height}
      width={width}
      stroke={stroke}
      hover={hover}
      active={active}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </StyledContainer>
  );
}
