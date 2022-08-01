import React from "react";
import styled from "styled-components";
import {
  MARGIN_BETWEEN_POSTS,
  TRANSITION_TIMES,
} from "../../../../styles/constants";
import { useStateContext } from "../../../../lib/context";

const Container = styled.div`
  transition: ease-in-out ${TRANSITION_TIMES.body}ms;
  position: relative;
  user-select: none;
  width: 100%;
  margin-top: ${MARGIN_BETWEEN_POSTS}px;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
  grid-row: ${(props) => props.gridRow};
  grid-column: ${(props) => props.gridColumn};
  padding-top: ${(props) => `${props.paddingTop}%`};
`;

const FeedItemIMG = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-height: 100%;
  object-fit: contain;
  /* 
  width: 100%;
  object-fit: contain; */
  /* aspect-ratio: ${(props) => props.aspectRatio}; */
  /* object-fit: contain;
  grid-row: ${(props) => props.gridRow};
  grid-column: ${(props) => props.gridColumn}; */
`;

const SingleImagePost = ({ src, post, id, gridColumn, gridRow }, ref) => {
  const aspectRatio = post?.attributes?.aspectRatio;
  const calcAspectRatio = (aspectRatio) => {
    const defaultRatio = "16/9";
    const ratiosArray = aspectRatio
      ? aspectRatio.split("/")
      : defaultRatio.split("/");
    for (let i = 0; i < ratiosArray.length; i++) {
      ratiosArray[i] = parseInt(ratiosArray[i]);
    }
    const divided = ratiosArray[1] / ratiosArray[0];
    const paddingTop = (divided * 100).toFixed(2);
    return paddingTop;
  };

  const { darkMode } = useStateContext();
  return (
    <Container
      gridColumn={gridColumn}
      darkMode={darkMode}
      paddingTop={calcAspectRatio(aspectRatio)}
    >
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
