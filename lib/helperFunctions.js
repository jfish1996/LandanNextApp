export const createSpacesFromDashes = (URLPARAM) => {
  const split = URLPARAM.split("-");
  if (split.length === 1) {
    return split.join();
  } else {
    return URLPARAM.replaceAll("-", " ");
  }
};

export const firstLetterUpperCase = (URLPARAM) => {
  return URLPARAM.charAt(0).toUpperCase() + URLPARAM.slice(1);
};
