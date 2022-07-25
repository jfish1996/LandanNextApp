import React from "react";
import styled from "styled-components";
import { useStateContext } from "../../../lib/context";
import { MAX_WINDOW_WIDTH } from "../../../styles/constants";

const StyledSkeletonHeader = styled.div`
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};

  grid-column: 1/-1;
  height: 350px;
  animation: skeleton-loading-header 1s linear infinite alternate;

  @keyframes skeleton-loading-header {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }

  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    height: ${(props) => (props.height ? props.height : "250px")};
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export default function SkeletonHeader({ height }) {
  const { darkMode } = useStateContext();
  return <StyledSkeletonHeader darkMode={darkMode} height={height} />;
}
