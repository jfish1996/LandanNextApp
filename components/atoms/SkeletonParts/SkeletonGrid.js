import React from "react";
import styled from "styled-components";
import {
  MAX_WINDOW_WIDTH,
  GRID_BOX_HEIGHT,
  GRID_BOX_WIDTH,
} from "../../../styles/constants";
import { useStateContext } from "../../../lib/context";

const StyledSkeletonBox = styled.div`
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
  height: ${GRID_BOX_HEIGHT}px;
  width: ${GRID_BOX_WIDTH}px;
  animation: skeleton-loading-grid 1s linear infinite alternate;

  @keyframes skeleton-loading-grid {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }
`;

export default function SkeletonGrid() {
  const array = new Array(12).fill(1);
  const { darkMode } = useStateContext();
  return (
    <>
      {array.map((item, idx) => {
        return (
          <StyledSkeletonBox darkMode={darkMode} key={idx + "skeletonBox"} />
        );
      })}
    </>
  );
}
