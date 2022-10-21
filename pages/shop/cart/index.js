import React from "react";
import CartItem from "../../../components/atoms/CartItem/CartItem";
import Checkout from "../../../components/atoms/SVGs/Checkout";
import { useStateContext } from "../../../lib/context";
import { returnShoppingStatus } from "../../../lib/returnData";
import Header from "../../../components/atoms/List-Items/Header";
import { getStripe } from "../../../lib/getStripe";
import { theme } from "../../../styles/constants";
import { useRouter } from "next/router";
import FailedCartItem from "../../../components/atoms/CartItem/FailedCartItem";
export default function Cart() {
  const CATEGORY_NAME = "cart";
  const { cartItems, onAdd, onRemove } = useStateContext();
  const { failed } = returnShoppingStatus();
  const failedText = failed?.attributes?.message;
  const getCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();

    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  let totalCartPrice = cartItems.reduce((curNumber, item) => {
    return curNumber + item.Price * item.quantity;
  }, 0);

  const router = useRouter();
  const isOnCancel = router.asPath.split("?")[1];
  return (
    <>
      <Header textAlign={"left"} fontWeight={"700"} color={"black"}>
        {CATEGORY_NAME.toUpperCase()}
      </Header>
      {isOnCancel ? <FailedCartItem failedText={failedText} /> : null}
      {!cartItems.length && <CartItem defaultItem={true} />}
      <>
        {cartItems.map((item, idx) => {
          return <CartItem key={idx + "cartItem"} item={item} />;
        })}
      </>
      <div style={{ gridColumn: "1/-1", marginLeft: "auto" }}>
        <span>Cart Total: ${cartItems ? totalCartPrice : 0}</span>
        <Checkout
          fill={theme.light.sidebar}
          hover="yellow"
          active={"black"}
          onClick={cartItems && getCheckout}
        />
      </div>
    </>
  );
}
