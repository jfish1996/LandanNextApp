import React from "react";
import styled from "styled-components";

const GridItemIMG = styled.img`
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "200px")};
  object-fit: cover;
  border: ${(props) =>
    props.active ? "2px solid yellow" : "2px solid transparent"};
  &:hover {
    border: 2px solid yellow;
  }
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

const GridItem = (
  { smallURL, defaultURL, onClick, width, height, padding, margin, id, active },
  ref
) => {
  return (
    <GridItemIMG
      onClick={onClick}
      src={smallURL || defaultURL}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      id={id}
      ref={ref}
      active={active}
    />
  );
};

const forwardGridItem = React.forwardRef(GridItem);

export default forwardGridItem;
