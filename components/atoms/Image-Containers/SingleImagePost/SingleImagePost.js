import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: lightgray;
`;

const FeedItemIMG = styled.img`
  width: 100%;
  object-fit: contain;
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: contain;
`;

const SingleImagePost = ({ src, id }, ref) => {
  return (
    <Container>
      <FeedItemIMG src={src} ref={ref} id={id} />
    </Container>
  );
};

const forwardSingleImagePost = React.forwardRef(SingleImagePost);
export default forwardSingleImagePost;
