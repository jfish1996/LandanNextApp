import React, { useState } from "react";
import Flex from "../../Styled-Containers/Flex/Flex";
import styled from "styled-components";
import { useStateContext } from "../../../../lib/context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  TRANSITION_TIMES,
  MARGIN_BETWEEN_POSTS,
} from "../../../../styles/constants";
import Image from "next/image";
const CarouselContainer = styled.div`
  display: flex;
  margin-top: ${MARGIN_BETWEEN_POSTS}px;
  margin: ${(props) => props.margin};
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
  width: 100%;
  transition: ease-in-out ${TRANSITION_TIMES.body}ms;
  /* aspect-ratio: ${(props) => props.aspectRatio}; */
  padding-top: ${(props) => `${props.paddingTop}%`};
  position: relative;
  width: 100%;
  justify-content: center;
  user-select: none;
  & .slick-slide {
    & img {
      object-fit: contain;
      width: 100%;
      max-height: 100%;
    }
  }

  & .swiper-pagination-bullet {
    background-color: ${(props) =>
      props.darkMode ? props.theme.light.sidebar : props.theme.dark.sidebar};
  }

  & .swiper-pagination-bullet-active {
    background-color: yellow;
  }
  /* @supports (aspect-ratio: auto) {
    aspect-ratio: ${(props) => props.aspectRatio};
  } */
`;

const CarouselObj = ({ post, id }, ref) => {
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
      return (
        <SwiperSlide>
          <iframe
            key={id + ".mp4"}
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
        </SwiperSlide>
      );
    } else {
      return (
        <SwiperSlide>
          <Image
            key={id + ".img"}
            loading="lazy"
            layout="fill"
            width={"100%"}
            objectFit={"contain"}
            maxHeight={"100%"}
            src={
              item?.attributes?.formats?.medium?.url || item?.attributes?.url
            }
          />
        </SwiperSlide>
      );
    }
  };

  const settings = {
    dots: false,
    centerMode: false,
    adaptiveHeight: false,
    arrows: false,
    // sliderPerView: 1,
  };
  return (
    <>
      <CarouselContainer
        // aspectRatio={aspectRatio ? aspectRatio : "16/9"}
        paddingTop={calcAspectRatio(aspectRatio)}
        ref={ref}
        id={id}
        darkMode={darkMode}
        margin={"0 0 10px 0"}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {imgData?.map((item, idx) => {
            return imageOrVideo(item, idx);
          })}
        </Swiper>
      </CarouselContainer>
      {/* <Flex width={"100%"} justifyContent={"start"} gap={"10px"}>
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
      </Flex> */}
    </>
  );
};
const forwardCarousel = React.forwardRef(CarouselObj);
export default forwardCarousel;
