import React from "react";
import GridBox from "../SVGs/GridBox";
import Heart from "../SVGs/Heart";
import AddToCart from "../SVGs/AddToCart";
import { useMutation } from "urql";
import Fart from "../SVGs/Fart";
import Checkout from "../SVGs/Checkout";
import { ArrowLeft, ArrowRight } from "../SVGs/Arrows";
import RichTextParagraph from "../RichTextParagraph/RichTextParagraph";
import { LIKE_MUTATION } from "../../../lib/mutation";
import { theme } from "../../../styles/constants";
const { motion } = require("framer-motion");
export default function PostContainer({ children, item, id }) {
  const { Title, FullDescription, Date } = item;
  const [updatePostResult, updatePost] = useMutation(LIKE_MUTATION);
  console.log(item);
  const category = item?.category?.data?.attributes.name;
  const variables = { id, likes: item.likes + 1 };
  return (
    <>
      {children}
      <h3>{Title}</h3>
      <RichTextParagraph
        markup={FullDescription}
        width={"50px"}
        height={"50px"}
      />
      {item.likes >= 0 && category === "Social" && (
        <>
          {" "}
          <Heart
            fill={theme.light.sidebar}
            hover="yellow"
            active={"black"}
            onClick={() => updatePost(variables)}
          />
          <p>likes: {item.likes}</p>{" "}
        </>
      )}
      <span>{Date}</span>
    </>
  );
}
