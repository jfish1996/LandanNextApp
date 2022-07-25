import React from "react";
import styled from "styled-components";
import { MARGIN_BETWEEN_POSTS } from "../../../../styles/constants";
import { useStateContext } from "../../../../lib/context";

const Container = styled.div`
  width: 100%;
  margin-top: ${MARGIN_BETWEEN_POSTS}px;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
  grid-row: ${(props) => props.gridRow};
  grid-column: ${(props) => props.gridColumn};
`;

const FeedItemIMG = styled.img`
  width: 100%;
  object-fit: contain;
  aspect-ratio: ${(props) => props.aspectRatio};
  object-fit: contain;
  grid-row: ${(props) => props.gridRow};
  grid-column: ${(props) => props.gridColumn};
`;

const SingleImagePost = ({ src, post, id, gridColumn, gridRow }, ref) => {
  const aspectRatio = post?.attributes?.aspectRatio;
  const { darkMode } = useStateContext();
  return (
    <Container gridColumn={gridColumn} darkMode={darkMode}>
      <FeedItemIMG
        src={src}
        ref={ref}
        id={id}
        gridRow={gridRow}
        aspectRatio={aspectRatio ? aspectRatio : "16/9"}
      />
    </Container>
  );
};

const forwardSingleImagePost = React.forwardRef(SingleImagePost);
export default forwardSingleImagePost;
