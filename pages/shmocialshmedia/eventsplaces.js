import React from "react";
import { useQuery } from "urql";
import { SECTION_QUERY } from "../../lib/query";
import { returnPosts } from "../../lib/returnposts";

export default function EventsPlaces() {
  const [results] = useQuery({
    query: SECTION_QUERY,
    variables: { start: 0, limit: 100, name: "Events.social" },
  });
  const { data, fetching, error } = results;
  if (fetching) return <p>fetching...</p>;
  if (error) return <p>error {error}</p>;
  const posts = data.sectionNames.data[0].attributes.posts.data;
  console.log(posts);
  return returnPosts(posts);
}
