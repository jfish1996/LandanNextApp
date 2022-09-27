import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { GRID_BOX_WIDTH, GRID_BOX_HEIGHT } from "../../../styles/constants";
const PostBarItemIMG = styled(Image)`
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

const StyledDiv = styled.div`
  width: ${(props) => (props.width ? props.width : `${GRID_BOX_WIDTH}px`)};
  height: ${(props) => (props.height ? props.height : `${GRID_BOX_HEIGHT}px`)};
  border: ${(props) =>
    props.active ? "2px solid yellow" : "2px solid transparent"};
  &:hover {
    border: 2px solid yellow;
  }
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  z-index: -1;
`;

const PostBarItem = (
  { smallURL, defaultURL, onClick, width, height, padding, margin, id, active },
  ref
) => {
  return (
    <StyledDiv
      id={id}
      ref={ref}
      active={active}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
    >
      <PostBarItemIMG
        onClick={onClick}
        src={smallURL || defaultURL}
        width={width}
        height={height}
        loading="lazy"
      />
    </StyledDiv>
  );
};

const forwardPostBarItem = React.forwardRef(PostBarItem);

export default forwardPostBarItem;
