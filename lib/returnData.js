import { useEffect, useMemo, useState } from "react";
import { normalizeCollection, strapiGet } from "./strapiRest";

const useStrapiCollection = (path, params, options = {}) => {
  const [state, setState] = useState({ fetching: true, data: null, error: null });
  const key = useMemo(() => JSON.stringify({ path, params }), [path, params]);
  const enabled = options.enabled !== false;

  useEffect(() => {
    let active = true;

    if (!enabled) {
      setState({ fetching: true, data: null, error: null });
      return () => {
        active = false;
      };
    }

    setState({ fetching: true, data: null, error: null });

    strapiGet(path, params)
      .then((data) => {
        if (active) setState({ fetching: false, data: normalizeCollection(data), error: null });
      })
      .catch((error) => {
        if (active) setState({ fetching: false, data: null, error });
      });

    return () => {
      active = false;
    };
  }, [key, enabled]);

  return state;
};

const sortByPublishedAt = (items = []) =>
  items.sort(
    (a, b) =>
      new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)
  );

const sortByDate = (items = []) =>
  items.sort((a, b) => new Date(b.attributes.Date) - new Date(a.attributes.Date));

const errorView = (error) => <p>error {error.message}</p>;

const basePagination = {
  "pagination[start]": 0,
  "pagination[limit]": 100,
};

const categoryPopulate = {
  "populate[section_header][fields][0]": "Description",
  "populate[sections][fields][0]": "SectionName",
  "populate[sections][fields][1]": "dataName",
  ...basePagination,
};

const sectionPopulate = {
  "populate[section_header][fields][0]": "Description",
  ...basePagination,
};

const postPopulate = {
  populate: "*",
  ...basePagination,
};

const isRouteReady = (value) =>
  typeof value === "string" && value.length > 0 && !value.includes("[");

export const returnNavData = () => {
  const { data, fetching, error } = useStrapiCollection("/categories", {
    populate: "*",
    "pagination[limit]": 100,
  });

  if (fetching) return { fetching };
  if (error) return errorView(error);
  const results = data.data;

  results.sort((a, b) => {
    const fa = a.attributes.name.toLowerCase();
    const fb = b.attributes.name.toLowerCase();

    if (fa === "links") return 1;
    if (fb === "links") return -1;

    return fa.localeCompare(fb);
  });

  return { fetching, results };
};

export const returnCategoryData = (nameParam) => {
  const categoryResult = useStrapiCollection("/categories", {
    ...categoryPopulate,
    "filters[name][$eq]": nameParam,
  });
  const postsResult = useStrapiCollection("/posts", {
    ...postPopulate,
    "filters[category][name][$eq]": nameParam,
  });

  const fetching = categoryResult.fetching || postsResult.fetching;
  if (fetching) return { fetching };
  if (categoryResult.error) return errorView(categoryResult.error);
  if (postsResult.error) return errorView(postsResult.error);
  const category = categoryResult.data?.data?.[0];
  const posts = sortByPublishedAt(postsResult.data?.data || []);
  const markup = category?.attributes?.section_header?.data?.attributes?.Description;
  return { fetching, posts, markup };
};
export const returnDATA_CategoryData = (nameParam, totalItemsPerPage) => {
  const categoryResult = useStrapiCollection("/categories", {
    ...categoryPopulate,
    "filters[dataName][$eq]": nameParam,
  }, { enabled: isRouteReady(nameParam) });
  const postsResult = useStrapiCollection("/posts", {
    ...postPopulate,
    "filters[category][dataName][$eq]": nameParam,
  }, { enabled: isRouteReady(nameParam) });

  const fetching = categoryResult.fetching || postsResult.fetching;
  if (fetching) return { fetching };
  if (categoryResult.error) return errorView(categoryResult.error);
  if (postsResult.error) return errorView(postsResult.error);
  const category = categoryResult.data?.data?.[0];
  const posts = sortByDate(postsResult.data?.data || []);
  const markup = category?.attributes?.section_header?.data?.attributes?.Description;
  return { fetching, posts, markup };
};

export const returnSectionData = (nameParam) => {
  const sectionResult = useStrapiCollection("/section-names", {
    ...sectionPopulate,
    "filters[SectionName][$eq]": nameParam,
  });
  const postsResult = useStrapiCollection("/posts", {
    ...postPopulate,
    "filters[section][SectionName][$eq]": nameParam,
  });
  const fetching = sectionResult.fetching || postsResult.fetching;
  if (fetching) return { fetching };
  if (sectionResult.error) return errorView(sectionResult.error);
  if (postsResult.error) return errorView(postsResult.error);

  const section = sectionResult.data?.data?.[0];
  const posts = sortByPublishedAt(postsResult.data?.data || []);
  const markup = section?.attributes?.section_header?.data?.attributes?.Description;
  return { posts, markup };
};
export const returnDATA_SectionData = (nameParam) => {
  const sectionResult = useStrapiCollection("/section-names", {
    ...sectionPopulate,
    "filters[dataName][$eq]": nameParam,
  }, { enabled: isRouteReady(nameParam) });
  const postsResult = useStrapiCollection("/posts", {
    ...postPopulate,
    "filters[section][dataName][$eq]": nameParam,
  }, { enabled: isRouteReady(nameParam) });

  const fetching = sectionResult.fetching || postsResult.fetching;
  if (fetching) return { fetching };
  if (sectionResult.error) return errorView(sectionResult.error);
  if (postsResult.error) return errorView(postsResult.error);

  const section = sectionResult.data?.data?.[0];
  const posts = sortByDate(postsResult.data?.data || []);
  const markup = section?.attributes?.section_header?.data?.attributes?.Description;
  return { fetching, posts, markup };
};

export const returnSubSections = () => {
  const { data, fetching, error } = useStrapiCollection("/sub-sections", {
    "pagination[limit]": 100,
  });

  if (fetching) return { fetching };
  if (error) return errorView(error);
  return { data: { subSections: data } };
};

export const returnFilteredCategory = (subSectionName) => {
  const { data, fetching, error } = useStrapiCollection("/posts", {
    ...postPopulate,
    "filters[sub_section][Name][$eq]": subSectionName,
  }, { enabled: isRouteReady(subSectionName) });
  if (fetching || !subSectionName) return { filteredPosts: [] };
  if (error) return errorView(error);
  const filteredPosts = sortByDate(data.data);
  return { filteredPosts };
};

export const returnFilteredData = (sectionName, subSectionName) => {
  const { data, fetching, error } = useStrapiCollection("/posts", {
    ...postPopulate,
    "filters[section][dataName][$eq]": sectionName,
    "filters[sub_section][Name][$eq]": subSectionName,
  }, { enabled: isRouteReady(sectionName) && isRouteReady(subSectionName) });
  if (fetching || !subSectionName) return { filteredPosts: [] };
  if (error) return errorView(error);

  const filteredPosts = sortByDate(data.data);
  return { filteredPosts };
};

export const returnShopCategoryData = (nameParam) => {
  const categoryResult = useStrapiCollection("/categories", {
    ...categoryPopulate,
    "filters[dataName][$eq]": nameParam,
  }, { enabled: isRouteReady(nameParam) });
  const productsResult = useStrapiCollection("/products", {
    ...postPopulate,
    "filters[category][dataName][$eq]": nameParam,
  }, { enabled: isRouteReady(nameParam) });
  const fetching = categoryResult.fetching || productsResult.fetching;
  if (fetching) return { fetching };
  if (categoryResult.error) return errorView(categoryResult.error);
  if (productsResult.error) return errorView(productsResult.error);
  const category = categoryResult.data?.data?.[0];
  const products = sortByDate(productsResult.data?.data || []);
  const richText = category?.attributes?.section_header?.data?.attributes?.Description;

  return { fetching, products, richText };
};

export const returnShopSectionData = (nameParam) => {
  const sectionResult = useStrapiCollection("/section-names", {
    ...sectionPopulate,
    "filters[dataName][$eq]": nameParam,
  }, { enabled: isRouteReady(nameParam) });
  const productsResult = useStrapiCollection("/products", {
    ...postPopulate,
    "filters[section][dataName][$eq]": nameParam,
  }, { enabled: isRouteReady(nameParam) });
  const fetching = sectionResult.fetching || productsResult.fetching;
  if (fetching) return { fetching };
  if (sectionResult.error) return errorView(sectionResult.error);
  if (productsResult.error) return errorView(productsResult.error);
  const section = sectionResult.data?.data?.[0];
  const products = sortByDate(productsResult.data?.data || []);
  const richText = section?.attributes?.section_header?.data?.attributes?.Description;
  return { products, richText };
};

export const returnHomePageImage = () => {
  const { data, fetching, error } = useStrapiCollection("/posts", {
    ...postPopulate,
    "filters[HomepageHero][$eq]": true,
  });
  if (fetching) return { fetching };
  if (error) return errorView(error);
  const posts = data?.data || [];
  return { posts };
};

export const returnHiddenHomeImage = () => {
  const { data, fetching, error } = useStrapiCollection("/hidden-items", {
    populate: "*",
    "filters[active][$eq]": true,
  });
  if (fetching || error) return {};
  const hidden = data?.data?.[0];
  const hiddenImgSrc = hidden?.attributes?.img?.data?.attributes?.url;
  const hiddenImgText = hidden?.attributes?.text;
  return { hiddenImgSrc, hiddenImgText };
};

export const returnHomeArchiveData = () => {
  const archiveResult = useStrapiCollection("/home-archives", {
    "populate[section_header][fields][0]": "Description",
  });
  const postsResult = useStrapiCollection("/posts", {
    ...postPopulate,
    "filters[home_archive][documentId][$notNull]": true,
  });
  const fetching = archiveResult.fetching || postsResult.fetching;
  if (fetching) return { fetching };
  if (archiveResult.error) return errorView(archiveResult.error);
  if (postsResult.error) return errorView(postsResult.error);
  const archive = archiveResult.data?.data?.[0];
  const posts = sortByDate(postsResult.data?.data || []);
  const richText = archive?.attributes?.section_header?.data?.attributes?.Description;
  return { posts, richText };
};

export const returnLegitReviews = () => {
  const { data, fetching, error } = useStrapiCollection("/legit-reviews", {
    "pagination[limit]": 100,
  });
  if (fetching) return { fetching };
  if (error) return errorView(error);
  const reviews = data?.data;
  return { reviews };
};

export const returnShoppingStatus = () => {
  const { data, fetching, error } = useStrapiCollection("/shopping-status-messages", {
    "pagination[limit]": 100,
  });
  if (fetching) return { fetching };
  if (error) return errorView(error);
  const messages = data?.data || [];
  const success = messages.find((item) => item.attributes.type === "success") || messages[0];
  const failed = messages.find((item) => item.attributes.type === "failed") || messages[1];
  return { success, failed };
};
