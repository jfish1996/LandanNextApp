import React from "react";
import { useQuery } from "urql";
import { CATEGORY_QUERY, ALL_PRODUCTS } from "../../lib/query";
import { returnPosts } from "../../lib/returnposts";

export default function Shop() {
  const [results] = useQuery({
    query: ALL_PRODUCTS,
    variables: { start: 0, limit: 100, name: "Shop" },
  });
  console.log(results);
  const { data, fetching, error } = results;
  if (fetching) return <p>fetching...</p>;
  if (error) return <p>error {error}</p>;
  const products = data.categories.data[0].attributes.products.data;
  return returnPosts(products);
}
