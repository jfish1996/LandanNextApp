import { useEffect, useState } from "react";
import { strapiPut } from "../lib/strapiRest";

const toNumber = (value) => Number(value || 0);

export const useOptimisticPostMetrics = (postId, item) => {
  const [likes, setLikes] = useState(toNumber(item?.likes));
  const [farts, setFarts] = useState(toNumber(item?.farts));

  useEffect(() => {
    setLikes(toNumber(item?.likes));
    setFarts(toNumber(item?.farts));
  }, [item?.likes, item?.farts]);

  const incrementMetric = async (field, value, setValue) => {
    const nextValue = value + 1;
    setValue(nextValue);

    try {
      await strapiPut(`/posts/${postId}`, { [field]: nextValue });
    } catch (error) {
      setValue(value);
    }
  };

  return {
    likes,
    farts,
    incrementLikes: () => incrementMetric("likes", likes, setLikes),
    incrementFarts: () => incrementMetric("farts", farts, setFarts),
  };
};
