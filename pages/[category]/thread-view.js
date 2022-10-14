import React from "react";
import FeedItem from "../../components/atoms/FeedItem/FeedItem";
import Grid from "../../components/atoms/Styled-Containers/Grid/Grid";
import {
  MAX_WINDOW_WIDTH,
  MIN_WINDOW_WITH,
  GRID_GAP,
  GRID_BOX_WIDTH,
} from "../../styles/constants";
export default function threadView({ items }) {
  return (
    <Grid
      gridColumns={`minmax(${MIN_WINDOW_WITH}px, ${MAX_WINDOW_WIDTH}px)`}
      maxWidth={`${MAX_WINDOW_WIDTH}px`}
      minWidth={`${MIN_WINDOW_WITH}px`}
      rowGap={`${GRID_GAP}px`}
      columnGap={`${GRID_GAP}px`}
      overflow="hidden"
    >
      {items?.data.map((item, idx) => {
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
            // ref={ref ? (el) => ref(el) : null}
            id={item.id}
            // product={product}
          />
        );
      })}
    </Grid>
  );
}

export async function getServerSideProps(context) {
  console.log(context.params);
  const backEndPosts = new URL(
    `https://shielded-sea-51712.herokuapp.com/api/posts?filters[category][dataName][$eq]=${context.params.category}&populate=*`
  );
  const backEndProducts = new URL(
    `https://shielded-sea-51712.herokuapp.com/api/products?filters[category][dataName][$eq]=${context.params.category}&populate=*`
  );
  const [postsResponse, productsResponse] = await Promise.all([
    await fetch(backEndPosts),
    await fetch(backEndProducts),
  ]);
  const [posts, products] = await Promise.all([
    await postsResponse.json(),
    await productsResponse.json(),
  ]);
  if (posts.data.length > 0) {
    {
      for (let post of posts.data) {
        if (post.attributes?.sub_section?.data?.attributes?.Name) {
          return {
            props: {
              result: "posts",
              filtering: true,
              items: posts,
              markup: "hi",
            },
          };
        }
      }
      return { result: "posts", items: posts };
    }
  }

  //-----
}
