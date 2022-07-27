import { useQuery, useMutation } from "urql";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  CATEGORY_QUERY,
  SECTION_QUERY,
  SUB_SECTION_QUERY,
  SUB_SECTION_CATEGORY,
  ALL_PRODUCTS_QUERY,
  PRODUCT_SECTION_QUERY,
  HOMEPAGE_HEROS_ARCHIVE_QUERY,
  HOME_ARCHIVE_QUERY,
  HOME_HIDDEN_IMG,
  LEGIT_REVIEWS_QUERY,
  SUB_SECTION_TITLES,
} from "./query";

import { TEST_MUTATION, FIND_POST } from "./mutation";
import Skeleton from "react-loading-skeleton";

export const returnCategoryData = (nameParam) => {
  const [results] = useQuery({
    query: CATEGORY_QUERY,
    variables: { start: 0, limit: 100, name: nameParam },
  });

  const { data, fetching, error } = results;
  if (fetching) return { fetching };
  if (error) return <p>error {error}</p>;
  const posts = data?.categories?.data[0]?.attributes?.posts?.data;
  posts?.sort((a, b) => {
    return (
      new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)
    );
  });
  const markup =
    data?.categories?.data[0]?.attributes?.section_header?.data?.attributes
      ?.Description;
  return { fetching, posts, markup };
};

export const returnSectionData = (nameParam) => {
  const [results] = useQuery({
    query: SECTION_QUERY,
    variables: { start: 0, limit: 100, name: nameParam },
  });
  const { data, fetching, error } = results;
  if (fetching) return { fetching };
  if (error) return <p>error {error}</p>;

  const posts = data?.sectionNames?.data[0]?.attributes?.posts?.data;
  posts?.sort((a, b) => {
    return (
      new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)
    );
  });
  const markup =
    data?.sectionNames?.data[0]?.attributes?.section_header?.data?.attributes
      ?.Description;
  return { posts, markup };
};

export const returnSubSections = () => {
  const [results] = useQuery({
    query: SUB_SECTION_TITLES,
    variables: { start: 0, limit: 100 },
  });

  const { data, fetching, error } = results;
  if (fetching) return <p>fetching...</p>;
  if (error) return <p>error {error}</p>;
  return { data };
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
  filteredPosts.sort((a, b) => {
    return (
      new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)
    );
  });
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
  filteredPosts.sort((a, b) => {
    return (
      new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)
    );
  });
  return { filteredPosts };
};

export const returnShopCategoryData = (nameParam) => {
  const [results] = useQuery({
    query: ALL_PRODUCTS_QUERY,
    variables: { start: 0, limit: 100, name: nameParam },
  });
  const { data, fetching, error } = results;
  if (fetching) return { fetching };
  if (error) return <p>error {error}</p>;
  const products = data?.categories?.data[0]?.attributes?.products?.data;
  products?.sort((a, b) => {
    return (
      new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)
    );
  });
  const markup =
    data?.categories?.data[0]?.attributes?.section_header?.data?.attributes
      ?.Description;

  return { fetching, products, markup };
};

export const returnShopSectionData = (nameParam) => {
  const [results] = useQuery({
    query: PRODUCT_SECTION_QUERY,
    variables: { start: 0, limit: 100, name: nameParam },
  });
  const { data, fetching, error } = results;
  if (fetching) return { fetching };
  if (error) return <p>error {error}</p>;
  const products = data?.sectionNames.data[0]?.attributes?.products.data;
  products?.sort((a, b) => {
    return (
      new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)
    );
  });
  const richText =
    data?.sectionNames?.data[0]?.attributes?.section_header?.data?.attributes
      ?.Description;
  return { products, richText };
};

export const returnHomePageImage = () => {
  const [results] = useQuery({
    query: HOMEPAGE_HEROS_ARCHIVE_QUERY,
  });
  const { data, fetching, error } = results;
  if (fetching) return { fetching };
  if (error) return <p>error {error}</p>;
  const posts = data?.homeArchives?.data[0]?.attributes?.posts?.data;
  return { posts };
};

export const returnHiddenHomeImage = () => {
  const [results] = useQuery({
    query: HOME_HIDDEN_IMG,
  });
  const { data, fetching, error } = results;
  if (fetching) return <p>fetching...</p>;
  if (error) return <p>error {error}</p>;
  const hiddenImgSrc =
    data?.hiddenItems?.data[0]?.attributes?.img?.data?.attributes?.url;
  const hiddenImgText = data?.hiddenItems?.data[0]?.attributes?.text;
  return { hiddenImgSrc, hiddenImgText };
};

export const returnHomeArchiveData = () => {
  const [results] = useQuery({
    query: HOME_ARCHIVE_QUERY,
  });
  const { data, fetching, error } = results;
  if (fetching) return { fetching };
  if (error) return <p>error {error}</p>;
  const posts = data?.homeArchives?.data[0]?.attributes?.posts?.data;
  posts.sort((a, b) => {
    return (
      new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)
    );
  });
  const richText =
    data?.homeArchives?.data[0]?.attributes.section_header.data.attributes
      .Description;
  return { posts, richText };
};

export const returnLegitReviews = () => {
  const [results] = useQuery({
    query: LEGIT_REVIEWS_QUERY,
  });
  const { data, fetching, error } = results;
  if (fetching) return { fetching };
  if (error) return <p>error {error}</p>;
  const reviews = data?.legitReviews?.data;
  return { reviews };
};
