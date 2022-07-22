import React from "react";
import styled from "styled-components";
import { GRID_BOX_WIDTH, GRID_BOX_HEIGHT } from "../../../styles/constants";
const PostBarItemIMG = styled.img`
  width: ${(props) => (props.width ? props.width : `${GRID_BOX_WIDTH}px`)};
  height: ${(props) => (props.height ? props.height : `${GRID_BOX_HEIGHT}px`)};
  object-fit: cover;
  border: ${(props) =>
    props.active ? "2px solid yellow" : "2px solid transparent"};
  &:hover {
    border: 2px solid yellow;
  }
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

const PostBarItem = (
  { smallURL, defaultURL, onClick, width, height, padding, margin, id, active },
  ref
) => {
  return (
    <PostBarItemIMG
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

const forwardPostBarItem = React.forwardRef(PostBarItem);

export default forwardPostBarItem;
