import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: lightgray;
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
  return (
    <Container gridColumn={gridColumn}>
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
