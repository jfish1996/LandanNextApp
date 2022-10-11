export const createSpacesFromDashes = (URLPARAM) => {
  const split = URLPARAM.split("-");
  if (split.length === 1) {
    return split.join();
  } else {
    return URLPARAM.replaceAll("-", " ");
  }
};
