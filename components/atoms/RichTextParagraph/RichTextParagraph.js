import React from "react";
import styled from "styled-components";
import { Markup } from "react-render-markup";
import {
  SMALL_SCREEN_FONTS,
  LARGE_SCREEN_FONTS,
  MAX_WINDOW_WIDTH,
} from "../../../styles/constants";

const GridMap = styled.div`
  grid-column: 1/-1;
  min-height: 20px;
  font-size: 1.3rem;
  padding: 10px 0;
  line-height: 1.3;
  font-size: 1rem;
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    font-size: ${`${LARGE_SCREEN_FONTS}rem`};
  }
`;

export default function RichTextParagraph({ markup }) {
  return (
    <GridMap>
      <Markup markup={markup} />
    </GridMap>
  );
}
