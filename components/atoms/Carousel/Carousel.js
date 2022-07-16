import React, { useState } from "react";
import Flex from "../Styled-Containers/Flex/Flex";
import styled from "styled-components";

const CarouselContainer = styled.div`
  display: flex;
  background-color: lightgray;
  width: 100%;
  aspect-ratio: ${(props) => props.aspectRatio};
  justify-content: center;
`;

const Carousel = ({ post, id }, ref) => {
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
      <Flex width={"100%"} justifyContent={"space-between"}>
        {" "}
        <button
          onClick={() =>
            activeIdx === 0
              ? setActiveIdx(imgData.length - 1)
              : setActiveIdx(activeIdx - 1)
          }
        >
          Back{" "}
        </button>
        <button
          onClick={() =>
            activeIdx === imgData.length - 1
              ? setActiveIdx(0)
              : setActiveIdx(activeIdx + 1)
          }
        >
          Next
        </button>
      </Flex>
    </>
  );
};
const forwardCarousel = React.forwardRef(Carousel);
export default forwardCarousel;
