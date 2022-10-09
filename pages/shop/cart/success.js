import React from "react";
import SuccessCartItem from "../../../components/atoms/CartItem/SuccessCartItem";
import Checkout from "../../../components/atoms/SVGs/Checkout";
import { useStateContext } from "../../../lib/context";
import Header from "../../../components/atoms/List-Items/Header";
import { getStripe } from "../../../lib/getStripe";
import { theme } from "../../../styles/constants";
import { returnShoppingStatus } from "../../../lib/returnData";
export default function SuccessCart() {
  const CATEGORY_NAME = "cart";
  const { success } = returnShoppingStatus();
  const successText = success?.attributes?.message;
  return (
    <>
      <Header textAlign={"left"} fontWeight={"700"} color={"black"}>
        {CATEGORY_NAME.toUpperCase()}
      </Header>

      <SuccessCartItem defaultItem={true} successText={successText} />
      <div style={{ gridColumn: "1/-1", marginLeft: "auto" }}></div>
    </>
  );
}
