import React from "react";
import { useQuery } from "urql";
import { CATEGORY_QUERY, TEST_Q } from "../../lib/query";
import { returnPosts } from "../../lib/returnposts";

export default function ShmocialSmedia() {
  // const [results] = useQuery({
  //   query: CATEGORY_QUERY,
  //   variables: { start: 0, limit: 100, name: "Social" },
  // });
  // console.log(results);
  // const { data, fetching, error } = results;
  // if (fetching) return <p>fetching...</p>;
  // if (error) return <p>error {error}</p>;
  // const posts = data?.categories.data[0].attributes.posts.data;
  // console.log(posts);
  // return returnPosts(posts);
}
