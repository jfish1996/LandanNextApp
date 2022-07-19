import React from "react";
import GridBox from "../SVGs/GridBox";
import Heart from "../SVGs/Heart";
import AddToCart from "../SVGs/AddToCart";
import Fart from "../SVGs/Fart";
import Checkout from "../SVGs/Checkout";
import { ArrowLeft, ArrowRight } from "../SVGs/Arrows";
// import heartimport from "../../../public/assets/svgs/heart";
const { motion } = require("framer-motion");
export default function PostContainer({ children, date, price, title }) {
  return (
    <>
      {/* <ArrowRight />
      <ArrowLeft /> */}
      {children}
    </>
  );
}
