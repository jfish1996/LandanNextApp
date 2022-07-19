import React from "react";
import styled from "styled-components";
import Carousel from "../Image-Containers/Carousel/Carousel";
import SingleImagePost from "../Image-Containers/SingleImagePost/SingleImagePost";
import PostContainer from "../PostContainer/PostContainer";
import ProductContainer from "../ProductContainer/ProductContainer";
const FeedItem = (
  { smallURL, defaultURL, onClick, carouselItem, id, product, item },
  ref
) => {
  //product returns
  console.log(item.Title);
  if (carouselItem) {
    if (product) {
      return (
        <div id={item.Title}>
          <ProductContainer item={item} id={id}>
            <Carousel post={carouselItem} ref={ref} id={id} />
          </ProductContainer>
        </div>
      );
    } else {
      //carousel returns
      return (
        <div id={item.Title}>
          <PostContainer item={item}>
            <Carousel post={carouselItem} ref={ref} id={id} />
          </PostContainer>
        </div>
      );
    }
  } else {
    if (product) {
      return (
        //product returns
        <div id={item.Title}>
          THIS IS A PORDUCT
          <SingleImagePost src={smallURL || defaultURL} ref={ref} id={id} />
        </div>
      );
    } else {
      console.log(item.Title);
      return (
        //single returns
        <div id={item.Title}>
          <PostContainer item={item}>
            <SingleImagePost src={smallURL || defaultURL} ref={ref} id={id} />
          </PostContainer>
        </div>
      );
    }
  }
};

const ForwardFeedItem = React.forwardRef(FeedItem);
export default ForwardFeedItem;
