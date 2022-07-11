import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  width: 100%;
`;

export default function GridView({ children }) {
  return <Grid>{children}</Grid>;
}
