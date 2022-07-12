import React from "react";
import styled from "styled-components";

const GridItemIMG = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid yellow;
  }
`;

export default function GridItem({ smallURL, defaultURL }) {
  return <GridItemIMG src={smallURL || defaultURL} />;
}
