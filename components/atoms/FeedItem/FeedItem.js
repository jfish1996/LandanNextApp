import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel/Carousel";
import SingleImagePost from "../SingleImagePost/SingleImagePost";

const FeedItem = ({ smallURL, defaultURL, onClick, carouselItem, id }, ref) => {
  if (carouselItem) {
    return <Carousel post={carouselItem} ref={ref} id={id} />;
  } else {
    return <SingleImagePost src={smallURL || defaultURL} ref={ref} id={id} />;
  }
};

const ForwardFeedItem = React.forwardRef(FeedItem);
export default ForwardFeedItem;
