import React from "react";
import StyledSvgContainer from "./StyledSvgContainer";
import styled from "styled-components";

export function ArrowRight({ onClick }) {
  return (
    <StyledSvgContainer
      onClick={onClick}
      viewBox="0 0 40 40"
      width="40"
      height="40"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1 }}
      fill={"#ececed"}
      hover={"yellow"}
      active={"black"}
    >
      <path
        d="M 40 20 L 20.797 0 L 14.456 6.605 L 22.737 15.23 L 0 15.274 L 0 24.725 L 22.83 24.725 L 14.456 33.395 L 20.798 40 L 40 20 Z"
        id="images"
        data-bx-origin="0 0"
      ></path>
    </StyledSvgContainer>
  );
}

export function ArrowLeft({ onClick }) {
  return (
    <StyledSvgContainer
      onClick={onClick}
      viewBox="0 0 40 40"
      width="40"
      height="40"
      whileHover={{ scale: 1.6 }}
      whileTap={{ scale: 0.9 }}
      fill={"#ececed"}
      hover={"yellow"}
      active={"black"}
    >
      <path
        d="M 80 60 L 60.797 40 L 54.456 46.605 L 62.737 55.23 L 40 55.274 L 40 64.725 L 62.83 64.725 L 54.456 73.395 L 60.798 80 L 80 60 Z"
        id="images"
        data-bx-origin="0 0"
        transform="matrix(-1, 0, 0, -1, 79.999985, 80.000015)"
      ></path>
    </StyledSvgContainer>
  );
}
