const API_BASE = (
  process.env.NEXT_PUBLIC_BACK_END_URL || "http://localhost:1337/api"
).replace(/\/graphql\/?$/, "/api").replace(/\/$/, "");

const qs = (params = {}) => {
  const search = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    search.append(key, String(value));
  });

  const query = search.toString();
  return query ? `?${query}` : "";
};

const normalizeMedia = (media) => {
  if (!media) return media;
  if (Array.isArray(media)) {
    return {
      data: media.map((item) => ({
        id: item.documentId || item.id,
        numericId: item.id,
        documentId: item.documentId,
        attributes: item,
      })),
    };
  }
  return {
    data: {
      id: media.documentId || media.id,
      numericId: media.id,
      documentId: media.documentId,
      attributes: media,
    },
  };
};

export const normalizeEntry = (entry) => {
  if (!entry || entry.attributes) return entry;

  const attributes = { ...entry };
  delete attributes.id;
  delete attributes.documentId;

  if (attributes.Img) attributes.Img = normalizeMedia(attributes.Img);
  if (attributes.img) attributes.img = normalizeMedia(attributes.img);

  ["category", "section", "sub_section", "section_header", "home_archive"].forEach(
    (field) => {
      if (attributes[field]) {
        attributes[field] = { data: normalizeEntry(attributes[field]) };
      }
    }
  );

  if (Array.isArray(attributes.sections)) {
    attributes.sections = { data: attributes.sections.map(normalizeEntry) };
  }
  if (Array.isArray(attributes.posts)) {
    attributes.posts = { data: attributes.posts.map(normalizeEntry) };
  }
  if (Array.isArray(attributes.products)) {
    attributes.products = { data: attributes.products.map(normalizeEntry) };
  }

  return {
    id: entry.documentId || entry.id,
    numericId: entry.id,
    documentId: entry.documentId,
    attributes,
  };
};

export const normalizeCollection = (payload) => ({
  ...payload,
  data: Array.isArray(payload?.data) ? payload.data.map(normalizeEntry) : [],
});

export const normalizeSingle = (payload) => ({
  ...payload,
  data: payload?.data ? normalizeEntry(payload.data) : null,
});

export const strapiGet = async (path, params) => {
  const response = await fetch(`${API_BASE}${path}${qs(params)}`);
  if (!response.ok) {
    throw new Error(`Strapi request failed: ${response.status} ${path}`);
  }
  return response.json();
};

export const strapiPut = async (path, data) => {
  const response = await fetch(`${API_BASE}${path}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  if (!response.ok) {
    throw new Error(`Strapi update failed: ${response.status} ${path}`);
  }
  return response.json();
};

export const withPopulate = {
  deep: {
    populate: "*",
  },
};
