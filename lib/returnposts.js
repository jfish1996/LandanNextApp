export const returnPosts = (posts) => {
  return posts?.map((item, idx) => {
    return <p> {item.attributes.Title}</p>;
  });
};
