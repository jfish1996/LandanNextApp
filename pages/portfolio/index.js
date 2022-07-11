import { useQuery } from "urql";
import { CATEGORY_QUERY, TEST_Q } from "../../lib/query";
import { returnPosts } from "../../lib/returnposts";
// const Query = CATEGORY_QUERY("Portfolio");

export default function portfolio() {
  const [results] = useQuery({
    query: CATEGORY_QUERY,
    variables: { start: 0, limit: 100, name: "Portfolio" },
  });
  console.log(results);
  const { data, fetching, error } = results;
  if (fetching) return <p>fetching...</p>;
  if (error) return <p>error {error}</p>;
  const posts = data?.categories.data[0].attributes.posts.data;
  return returnPosts(posts);

  //global gird view returnGridPosts; -------
  //else return threadPosts;
}
