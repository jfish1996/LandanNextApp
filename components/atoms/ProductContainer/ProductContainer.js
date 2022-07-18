import React from "react";
import { useStateContext } from "../../../lib/context";
export default function ProductContainer({ children, item, id }) {
  const { Title, Price, Date } = item;
  const { onAdd, onRemove } = useStateContext();
  const img = item.Img.data[0].attributes.formats.small.url;
  return (
    <>
      {Title}
      {Price}
      {Date}
      {children}
      <button onClick={() => onAdd({ Title, Price, Date, id, url: img })}>
        Add
      </button>
      <button onClick={() => onRemove({ Title, Price, Date, id, url: img })}>
        Remove
      </button>
    </>
  );
}
