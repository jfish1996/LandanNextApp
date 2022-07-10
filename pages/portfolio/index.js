import { useQuery } from "urql";
import { CATEGORY_QUERY } from "../../lib/query";
import { returnPosts } from "../../lib/returnposts";
const Query = CATEGORY_QUERY("Portfolio");

export default function portfolio() {
  const [results] = useQuery({
    query: CATEGORY_QUERY(),
    variables: { start: 0, limit: 28 },
  });
  const { data, fetching, error } = results;
  if (fetching) return <p>fetching...</p>;
  if (error) return <p>error {error}</p>;
  const posts = data?.categories.data[0].attributes.posts.data;
  console.log(posts);
  return returnPosts(posts);
}
