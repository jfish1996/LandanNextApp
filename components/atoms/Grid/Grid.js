import React from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridColumns};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  margin: ${(props) => props.margin};
  row-gap: ${(props) => props.rowGap};
  column-gap: ${(props) => props.columnGap};
  overflow: scroll;
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
}) {
  return (
    <StyledGrid
      gridColumns={gridColumns}
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      margin={margin}
      rowGap={rowGap}
      columnGap={columnGap}
    >
      {children}
    </StyledGrid>
  );
}
