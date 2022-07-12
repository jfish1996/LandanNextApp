import React from "react";
import styled from "styled-components";

import Grid from "../../atoms/Grid/Grid";

export default function GridView({ children }) {
  return (
    <Grid
      gridColumns={"repeat(auto-fit, 200px);"}
      maxWidth={"830px"}
      rowGap={"10px"}
      columnGap={"10px"}
    >
      {children}
    </Grid>
  );
}
