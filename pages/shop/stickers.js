import React from "react";
import { useQuery } from "urql";

import { PRODUCT_SECTION_QUERY } from "../../lib/query";
import { returnPosts } from "../../lib/returnposts";

export default function Stickers() {
  const [results] = useQuery({
    query: PRODUCT_SECTION_QUERY,
    variables: { start: 0, limit: 100, name: "Stickers.shop" },
  });
  const { data, fetching, error } = results;
  if (fetching) return <p>fetching...</p>;
  if (error) return <p>error {error}</p>;
  const products = data.sectionNames.data[0].attributes.products.data;

  return returnPosts(products);
}
