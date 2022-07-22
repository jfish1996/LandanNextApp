import styled from "styled-components";
import GridItem from "../components/atoms/GridItem/GridItem";
import FeedItem from "../components/atoms/FeedItem/FeedItem";

export const returnPosts = (
  posts,
  feedView,
  ref,
  setElementToShow,
  product
) => {
  const feedOrGirdView = (posts, feedViewProp, ref) => {
    if (!feedViewProp) {
      return posts?.map((item, idx) => {
        const defaultURL = item?.attributes?.Img?.data[0]?.attributes?.url;
        const smallImgURL =
          item?.attributes?.Img?.data[0]?.attributes?.formats?.small?.url;
        return (
          <GridItem
            key={idx}
            onClick={(el) => onClick(el)}
            defaultURL={defaultURL}
            smallURL={smallImgURL}
            id={item.id}
          />
        );
      });
    } else {
      return posts?.map((item, idx) => {
        const defaultURL = item?.attributes?.Img?.data[0]?.attributes?.url;

        const smallImgURL =
          item?.attributes?.Img?.data[0]?.attributes?.formats?.small?.url;
        return (
          <FeedItem
            key={idx}
            item={item?.attributes}
            defaultURL={defaultURL}
            smallURL={smallImgURL}
            carouselItem={item?.attributes?.Img?.data.length > 1 ? item : null}
            ref={ref ? (el) => ref(el) : null}
            id={item.id}
            product={product}
          />
        );
      });
    }
  };
  const feedViewProp = feedView?.feedViewProp;
  const setFeedViewProp = feedView?.setFeedViewProp;
  const onClick = (el) => {
    setFeedViewProp(!feedViewProp);
    setElementToShow(el.target.id);
  };

  return feedOrGirdView(posts, feedViewProp, ref);
};
