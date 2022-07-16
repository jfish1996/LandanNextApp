import React from "react";
import styled from "styled-components";

import Grid from "../../atoms/Styled-Containers/Grid/Grid";
import { MAX_WINDOW_WIDTH } from "../../../styles/constants";
import PostBar from "../../molecules/PostBar/PostBar";

export default function GridView({ children, feedView }) {
  const feedViewProp = feedView.feedViewProp;
  return feedViewProp ? (
    <Grid
      gridColumns={"1fr"}
      maxWidth={MAX_WINDOW_WIDTH}
      rowGap={"10px"}
      columnGap={"10px"}
      overflow="hidden"
    >
      {children}
      <PostBar />
    </Grid>
  ) : (
    <Grid
      gridColumns={"repeat(auto-fit, 200px);"}
      maxWidth={`${MAX_WINDOW_WIDTH}px`}
      rowGap={"10px"}
      columnGap={"10px"}
      overflow={"scroll"}
    >
      {children}
    </Grid>
  );
}
