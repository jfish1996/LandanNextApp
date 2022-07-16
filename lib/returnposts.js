import styled from "styled-components";
import GridItem from "../components/atoms/GridItem/GridItem";
import FeedItem from "../components/atoms/FeedItem/FeedItem";

export const returnPosts = (posts, feedView, ref) => {
  let feedOrGirdView = (posts, feedViewProp, ref) => {
    if (!feedViewProp) {
      return posts?.map((item, idx) => {
        const defaultURL = item?.attributes?.Img?.data[0]?.attributes?.url;
        const smallImgURL =
          item?.attributes?.Img?.data[0]?.attributes?.formats?.small?.url;
        return (
          <GridItem
            onClick={() => onClick()}
            defaultURL={defaultURL}
            smallURL={smallImgURL}
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
            onClick={() => onClick()}
            defaultURL={defaultURL}
            smallURL={smallImgURL}
            carouselItem={item?.attributes?.Img?.data.length > 1 ? item : null}
            ref={ref ? (el) => ref(el) : null}
            id={item.id}
          />
        );
      });
    }
  };
  const feedViewProp = feedView?.feedViewProp;
  const setFeedViewProp = feedView?.setFeedViewProp;
  const onClick = () => {
    setFeedViewProp(!feedViewProp);
  };

  return feedOrGirdView(posts, feedViewProp, ref);
};
