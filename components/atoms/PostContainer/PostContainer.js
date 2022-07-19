import React from "react";
import GridBox from "../SVGs/GridBox";
import Heart from "../SVGs/Heart";
import AddToCart from "../SVGs/AddToCart";
import Fart from "../SVGs/Fart";
import Checkout from "../SVGs/Checkout";
import { ArrowLeft, ArrowRight } from "../SVGs/Arrows";
import RichTextParagraph from "../RichTextParagraph/RichTextParagraph";
const { motion } = require("framer-motion");
export default function PostContainer({ children, item }) {
  const { Title, FullDescription, Date } = item;
  console.log(item);
  return (
    <>
      {children}
      <h3>{Title}</h3>
      <RichTextParagraph markup={FullDescription} />
      {item.likes && <p>likes: {item.likes}</p>}
      <span>{Date}</span>
    </>
  );
}
