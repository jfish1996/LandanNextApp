import React from "react";
import styled from "styled-components";
import { animate, motion } from "framer-motion";
import { MAX_WINDOW_WIDTH } from "../../../../styles/constants";

const StyledGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: ${(props) => props.gridColumns};
  justify-content: center;
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  margin: ${(props) => props.margin};
  row-gap: ${(props) => props.rowGap};
  column-gap: ${(props) => props.columnGap};
  overflow: ${(props) => props.overflow};
  padding: ${(props) => props.padding};

  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    justify-content: start;
    margin: ${(props) => props.bigScreenMargin};
    width: ${(props) => props.smallDesktopGridWith};
  }

  @media (min-width: 1120px) {
    width: ${(props) => props.mediumDesktopGridWith};
  }
  @media (min-width: 1330px) {
    width: ${(props) => props.fullDesktopGridWith};
  }
`;

export default function Grid({
  gridColumns,
  width,
  maxWidth,
  minWidth,
  margin,
  rowGap,
  columnGap,
  children,
  padding,
  overflow,
  bigScreenMargin,
  animate,
  initial,
  smallDesktopGridWith,
  mediumDesktopGridWith,
  fullDesktopGridWith,
}) {
  return (
    <StyledGrid
      gridColumns={gridColumns}
      width={width}
      overFlow={overflow}
      maxWidth={maxWidth}
      minWidth={minWidth}
      margin={margin}
      rowGap={rowGap}
      columnGap={columnGap}
      bigScreenMargin={bigScreenMargin}
      animate={animate}
      initial={initial}
      smallDesktopGridWith={smallDesktopGridWith}
      mediumDesktopGridWith={mediumDesktopGridWith}
      fullDesktopGridWith={fullDesktopGridWith}
    >
      {children}
    </StyledGrid>
  );
}
