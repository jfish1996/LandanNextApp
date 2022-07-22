import React from "react";
import styled from "styled-components";
import StyledSvgContainer from "./StyledSvgContainer";
const { motion } = require("framer-motion");

export default function AddToCart({
  width,
  height,
  stroke,
  hover,
  fill,
  active,
  scale,
}) {
  return (
    <StyledSvgContainer
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      hover={hover}
      active={active}
      viewBox="200 216.351 127.418 56.2"
      width="127.418"
      height="56.2"
    ></StyledSvgContainer>
  );
}
