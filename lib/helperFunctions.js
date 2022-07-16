import { useRef } from "react";
export const addToRefs = (ref, el) => {
  const ref = useRef([]);
  if (el && !ref.current.includes(el)) {
    ref.current.push(el);
  }
  return [ref];
};
