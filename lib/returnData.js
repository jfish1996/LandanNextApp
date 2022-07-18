import { useQuery } from "urql";
import {
  CATEGORY_QUERY,
  SECTION_QUERY,
  SUB_SECTION_QUERY,
  SUB_SECTION_CATEGORY,
  ALL_PRODUCTS_QUERY,
  PRODUCT_SECTION_QUERY,
} from "./query";

export const returnCategoryData = (nameParam) => {
  const [results] = useQuery({
    query: CATEGORY_QUERY,
    variables: { start: 0, limit: 100, name: nameParam },
  });

  const { data, fetching, error } = results;
  if (fetching) return <p>fetching...</p>;
  if (error) return <p>error {error}</p>;
  const posts = data?.categories?.data[0]?.attributes?.posts?.data;
  const markup =
    data?.categories?.data[0]?.attributes?.section_header?.data?.attributes
      .Description;
  return { posts, markup };
};

export const returnSectionData = (nameParam) => {
  const [results] = useQuery({
    query: SECTION_QUERY,
    variables: { start: 0, limit: 100, name: nameParam },
  });
  const { data, fetching, error } = results;
  if (fetching) return <p>fetching...</p>;
  if (error) return <p>error {error}</p>;
  const posts = data?.sectionNames?.data[0]?.attributes?.posts?.data;
  const markup =
    data?.sectionNames?.data[0]?.attributes?.section_header?.data.attributes
      .Description;
  return { posts, markup };
};

export const returnFilteredCategory = (subSectionName) => {
  const [results] = useQuery({
    query: SUB_SECTION_CATEGORY,
    variables: { subSectionName: subSectionName },
  });
  const { data, fetching, error } = results;
  if (fetching) return <p>fetching...</p>;
  if (error) return <p>error {error}</p>;
  const filteredPosts = data.posts.data;
  return { filteredPosts };
};

export const returnFilteredData = (sectionName, subSectionName) => {
  const [results] = useQuery({
    query: SUB_SECTION_QUERY,
    variables: { sectionName: sectionName, subSectionName: subSectionName },
  });
  const { data, fetching, error } = results;
  if (fetching) return <p>fetching...</p>;
  if (error) return <p>error {error}</p>;
  const filteredPosts = data.posts.data;
  return { filteredPosts };
};

export const returnShopCategoryData = (nameParam) => {
  const [results] = useQuery({
    query: ALL_PRODUCTS_QUERY,
    variables: { start: 0, limit: 100, name: nameParam },
  });
  const { data, fetching, error } = results;
  if (fetching) return <p>fetching...</p>;
  if (error) return <p>error {error}</p>;
  const products = data.categories.data[0].attributes.products.data;
  const markup =
    data.categories.data[0].attributes.section_header.data.attributes
      .Description;

  return { products, markup };
};

export const returnShopSectionData = (nameParam) => {
  const [results] = useQuery({
    query: PRODUCT_SECTION_QUERY,
    variables: { start: 0, limit: 100, name: nameParam },
  });
  const { data, fetching, error } = results;
  if (fetching) return <p>fetching...</p>;
  if (error) return <p>error {error}</p>;
  console.log(data, "data");
  const products = data?.sectionNames.data[0]?.attributes?.products.data;
  const richText =
    data?.sectionNames?.data[0]?.attributes?.section_header.data.attributes
      .Description;
  return { products, richText };
};
