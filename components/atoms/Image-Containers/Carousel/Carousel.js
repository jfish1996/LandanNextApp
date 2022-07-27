import React, { useState } from "react";
import Flex from "../../Styled-Containers/Flex/Flex";
import styled from "styled-components";
import { useStateContext } from "../../../../lib/context";
import {
  TRANSITION_TIMES,
  MARGIN_BETWEEN_POSTS,
} from "../../../../styles/constants";
import { ArrowLeft, ArrowRight } from "../../SVGs/Arrows";
const CarouselContainer = styled.div`
  display: flex;
  margin-top: ${MARGIN_BETWEEN_POSTS}px;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
  width: 100%;
  transition: ease-in-out ${TRANSITION_TIMES.body}ms;
  /* aspect-ratio: ${(props) => props.aspectRatio}; */
  padding-top: ${(props) => `${props.paddingTop}%`};
  position: relative;
  width: 100%;
  justify-content: center;
  position: relative;
  user-select: none;
  /* @supports (aspect-ratio: auto) {
    aspect-ratio: ${(props) => props.aspectRatio};
  } */
`;

const Carousel = ({ post, id }, ref) => {
  const { darkMode } = useStateContext();
  const [activeIdx, setActiveIdx] = useState(0);
  const imgData = post?.attributes?.Img?.data;
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

  const imageOrVideo = (item, idx) => {
    if (item.attributes.ext === ".mp4") {
      return idx === activeIdx ? (
        <iframe
          src={item?.attributes?.url}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
          }}
          type="video/mp4"
        />
      ) : null;
    } else {
      return idx === activeIdx ? (
        <img
          src={item?.attributes?.formats?.small?.url}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      ) : null;
    }
  };

  return (
    <>
      <CarouselContainer
        aspectRatio={aspectRatio ? aspectRatio : "16/9"}
        paddingTop={calcAspectRatio(aspectRatio)}
        ref={ref}
        id={id}
        darkMode={darkMode}
      >
        {imgData?.map((item, idx) => {
          return imageOrVideo(item, idx);
        })}
      </CarouselContainer>
      <Flex width={"100%"} justifyContent={"start"} gap={"10px"}>
        {" "}
        <ArrowLeft
          onClick={() =>
            activeIdx === 0
              ? setActiveIdx(imgData.length - 1)
              : setActiveIdx(activeIdx - 1)
          }
        />
        <ArrowRight
          onClick={() =>
            activeIdx === imgData.length - 1
              ? setActiveIdx(0)
              : setActiveIdx(activeIdx + 1)
          }
        />
      </Flex>
    </>
  );
};
const forwardCarousel = React.forwardRef(Carousel);
export default forwardCarousel;
