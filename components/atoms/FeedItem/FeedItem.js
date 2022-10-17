import React from "react";
import styled from "styled-components";
import Carousel from "../Image-Containers/Carousel/Carousel";
import SingleImagePost from "../Image-Containers/SingleImagePost/SingleImagePost";
import PostContainer from "../PostContainer/PostContainer";
import ProductContainer from "../ProductContainer/ProductContainer";
import Link from "next/link";
import { motion } from "framer-motion";
import { POST_TRANSITION_TIMES } from "../../../styles/constants";
const FeedItem = (
  { smallURL, defaultURL, onClick, carouselItem, id, product, item },
  ref
) => {
  //product returns
  if (carouselItem) {
    if (product) {
      return (
        <motion.div
          id={item.Title}
          // initial={POST_TRANSITION_TIMES.intial}
          // animate={POST_TRANSITION_TIMES.animate}
          // transition={POST_TRANSITION_TIMES.transition}
        >
          <ProductContainer item={item} id={id}>
            <Carousel post={carouselItem} ref={ref} id={id} />
          </ProductContainer>
        </motion.div>
      );
    } else {
      //carousel returns
      return (
        <motion.div
          id={item.Title}
          // initial={POST_TRANSITION_TIMES.intial}
          // animate={POST_TRANSITION_TIMES.animate}
          // transition={POST_TRANSITION_TIMES.transition}
        >
          <PostContainer item={item} id={id}>
            <Carousel post={carouselItem} ref={ref} id={id} />
          </PostContainer>
        </motion.div>
      );
    }
  } else {
    if (product) {
      return (
        //product returns
        <motion.div
          id={item.Title}
          initial={POST_TRANSITION_TIMES.intial}
          animate={POST_TRANSITION_TIMES.animate}
          transition={POST_TRANSITION_TIMES.transition}
        >
          <ProductContainer item={item}>
            <SingleImagePost src={smallURL || defaultURL} ref={ref} id={id} />
          </ProductContainer>
        </motion.div>
      );
    } else {
      return (
        //single returns

        <motion.div
          id={item.Title}
          initial={POST_TRANSITION_TIMES.intial}
          animate={POST_TRANSITION_TIMES.animate}
          transition={POST_TRANSITION_TIMES.transition}
        >
          <PostContainer item={item} id={id}>
            <SingleImagePost src={smallURL || defaultURL} ref={ref} id={id} />
          </PostContainer>
        </motion.div>
      );
    }
  }
};

const ForwardFeedItem = React.forwardRef(FeedItem);
export default ForwardFeedItem;
