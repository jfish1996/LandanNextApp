import {
  returnCategoryData,
  returnShopCategoryData,
  returnSectionData,
  returnShopSectionData,
} from "../lib/returnData";

export const returnPageType = (routeParam, secondaryRouteParam) => {
  const { fetching, posts } = secondaryRouteParam
    ? returnSectionData(secondaryRouteParam)
    : returnCategoryData(routeParam);
  const { products } = secondaryRouteParam
    ? returnShopSectionData(secondaryRouteParam)
    : returnShopCategoryData(routeParam);

  if (!fetching) {
    if (!posts && !products) {
      return { result: "no result", filtering: false, items: [] };
    }
    if (products?.length) {
      console.log(products);
      return { result: "products", filtering: false, items: products };
    } else if (posts?.length) {
      for (let post of posts) {
        if (post.attributes?.sub_section?.data?.attributes?.Name) {
          return { result: "posts", filtering: true, items: posts };
        }
      }
      return { result: "posts", filtering: false, items: posts };
    }
  }
  return { result: "...fetching", fetching };
};
