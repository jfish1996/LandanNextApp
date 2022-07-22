import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: lightgray;
  grid-column: 1/-1;
  -webkit-user-drag: none;
  z-index: 0;
`;

export const HomeItemIMG = styled.img`
  width: 100%;
  object-fit: contain;
  aspect-ratio: ${(props) => props.aspectRatio};
  object-fit: contain;
  grid-row: ${(props) => props.gridRow};
  grid-column: ${(props) => props.gridColumn};
  -webkit-user-drag: none;
  z-index: 0;
`;
