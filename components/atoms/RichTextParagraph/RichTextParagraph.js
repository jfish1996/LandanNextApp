import React from "react";
import styled from "styled-components";
import { Markup } from "react-render-markup";

const GridMap = styled.div`
  grid-column: 1/-1;
  min-height: 20px;
  font-size: 1.3rem;
  padding: 10px 0;
  line-height: 1.3;
`;

export default function RichTextParagraph({ markup }) {
  return (
    <GridMap>
      <Markup markup={markup} />
    </GridMap>
  );
}
