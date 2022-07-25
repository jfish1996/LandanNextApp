import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
  grid-column: 1/-1;
  -webkit-user-drag: none;
  z-index: 0;
  animation: skeleton-loading-home 1s linear infinite alternate;

  @keyframes skeleton-loading-home {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }
`;
import React from "react";
import { useStateContext } from "../../../lib/context";

export default function SkeletonImage() {
  const { darkMode } = useStateContext();
  return <Container darkMode={darkMode} />;
}
