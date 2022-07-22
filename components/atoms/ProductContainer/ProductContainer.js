import React from "react";
import { useStateContext } from "../../../lib/context";
import AddToCart from "../SVGs/AddToCart";
export default function ProductContainer({ children, item, id }) {
  const { Title, Price, Date } = item;
  const { onAdd, onRemove } = useStateContext();
  const img = item.Img.data[0].attributes.formats.small.url;
  return (
    <>
      {children}
      <h3>{Title}</h3>
      <p>${Price}</p>
      <button onClick={() => onAdd({ Title, Price, Date, id, url: img })}>
        Add
      </button>
      <p>{Date}</p>
    </>
  );
}
