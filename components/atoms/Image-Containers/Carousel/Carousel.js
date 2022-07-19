import React, { useState } from "react";
import Flex from "../../Styled-Containers/Flex/Flex";
import styled from "styled-components";
import { useStateContext } from "../../../../lib/context";
import { TRANSITION_TIMES } from "../../../../styles/constants";
import { ArrowLeft, ArrowRight } from "../../SVGs/Arrows";
const CarouselContainer = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
  width: 100%;
  transition: ease-in-out ${TRANSITION_TIMES.body}ms;
  aspect-ratio: ${(props) => props.aspectRatio};
  justify-content: center;
  position: relative;
  user-select: none;
`;

const Carousel = ({ post, id }, ref) => {
  const { darkMode } = useStateContext();
  const [ratio, setRatio] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const imgData = post?.attributes?.Img?.data;
  const aspectRatio = post?.attributes?.aspectRatio;

  return (
    <>
      <CarouselContainer
        aspectRatio={aspectRatio ? aspectRatio : "16/9"}
        ref={ref}
        id={id}
        darkMode={darkMode}
      >
        {imgData?.map((item, idx) => {
          return idx === activeIdx ? (
            <img
              src={item?.attributes?.formats?.small?.url}
              style={{ objectFit: "contain", width: "100%" }}
            />
          ) : null;
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
