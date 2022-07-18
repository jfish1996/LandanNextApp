import React from "react";
import GridBox from "../SVGs/GridBox";
import Heart from "../SVGs/Heart";
import AddToCart from "../SVGs/AddToCart";
import Fart from "../SVGs/Fart";
import Checkout from "../SVGs/Checkout";
export default function PostContainer({ children, date, price, title }) {
  return (
    <>
      {children}
      <button onClick={console.log("hi")}>Add</button>
      <Heart
        width={"50px"}
        height={"50px"}
        fill={"yellow"}
        stroke={"black"}
        hover={"red"}
        active={"green"}
      />
      <GridBox
        width={"50px"}
        height={"50px"}
        fill="yellow"
        hover={"red"}
        active={"green"}
      />
      <AddToCart
        width={"50px"}
        height={"50px"}
        fill="yellow"
        stroke={"black"}
        hover={"red"}
        active={"green"}
      />
      <Fart
        width={"50px"}
        height={"50px"}
        fill="yellow"
        stroke={"black"}
        hover={"red"}
        active={"green"}
      />
      <Checkout
        width={"50px"}
        height={"50px"}
        fill="yellow"
        stroke={"black"}
        hover={"red"}
        active={"green"}
      />

      <button onClick={console.log("hi")}>Remove</button>
    </>
  );
}
