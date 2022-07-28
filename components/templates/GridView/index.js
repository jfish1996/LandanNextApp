import React from "react";
import styled from "styled-components";

import Grid from "../../atoms/Styled-Containers/Grid/Grid";
import {
  MAX_WINDOW_WIDTH,
  GRID_BOX_WIDTH,
  MIN_WINDOW_WITH,
  GRID_GAP,
} from "../../../styles/constants";
import PostBar from "../../molecules/PostBar/PostBar";

export default function GridView({ children, feedView }) {
  const feedViewProp = feedView.feedViewProp;
  return feedViewProp ? (
    <Grid
      gridColumns={`minmax(${MIN_WINDOW_WITH}px, ${MAX_WINDOW_WIDTH}px)`}
      maxWidth={`${MAX_WINDOW_WIDTH}px`}
      minWidth={`${MIN_WINDOW_WITH}px`}
      // rowGap={`${GRID_GAP}px`}
      // columnGap={`${GRID_GAP}px`}
      overflow="hidden"
    >
      {children}
    </Grid>
  ) : (
    <Grid
      gridColumns={`repeat(auto-fit, ${GRID_BOX_WIDTH}px)`}
      maxWidth={`${MAX_WINDOW_WIDTH}px`}
      minWidth={`${MIN_WINDOW_WITH}px`}
      rowGap={`${GRID_GAP}px`}
      columnGap={`${GRID_GAP}px`}
      overflow={"scroll"}
    >
      {children}
    </Grid>
  );
}
