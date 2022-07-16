export const portfolioPostToRender = (
  filtering,
  returnPosts,
  returnFilteredPosts
) => {
  if (!filtering) {
    return returnPosts;
  } else {
    return returnFilteredPosts;
  }
};
