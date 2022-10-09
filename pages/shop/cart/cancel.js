import React from "react";
import FailedCartItem from "../../../components/atoms/CartItem/FailedCartItem";
import CartItem from "../../../components/atoms/CartItem/CartItem";
import Header from "../../../components/atoms/List-Items/Header";
import { returnShoppingStatus } from "../../../lib/returnData";
export default function FailedCart() {
  const CATEGORY_NAME = "cart";
  const { failed } = returnShoppingStatus();
  const failedText = failed?.attributes?.message;
  return (
    <>
      <Header textAlign={"left"} fontWeight={"700"} color={"black"}>
        {CATEGORY_NAME.toUpperCase()}
      </Header>

      <FailedCartItem failedText={failedText} />
      <CartItem defaultItem={true} />
      <div style={{ gridColumn: "1/-1", marginLeft: "auto" }}></div>
    </>
  );
}
