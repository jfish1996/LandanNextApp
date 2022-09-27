import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GRID_BOX_WIDTH, GRID_BOX_HEIGHT } from "../../../styles/constants";
import { POST_TRANSITION_TIMES } from "../../../styles/constants";
import Image from "next/image";
const GridItemIMG = styled(motion.div)`
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

const GridItem = (
  { smallURL, defaultURL, onClick, width, height, padding, margin, id, active },
  ref
) => {
  return (
    <GridItemIMG
      onClick={onClick}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      id={id}
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.09 }}
      active={active}
    >
      <Image
        id={id}
        src={smallURL || defaultURL}
        width={`${GRID_BOX_WIDTH}`}
        objectFit={"cover"}
        height={`${GRID_BOX_HEIGHT}`}
      />
    </GridItemIMG>
  );
};

const forwardGridItem = React.forwardRef(GridItem);

export default forwardGridItem;
