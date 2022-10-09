import React from "react";
import CartItem from "../../../components/atoms/CartItem/CartItem";
import Checkout from "../../../components/atoms/SVGs/Checkout";
import { useStateContext } from "../../../lib/context";
import Header from "../../../components/atoms/List-Items/Header";
import { getStripe } from "../../../lib/getStripe";
import { theme } from "../../../styles/constants";
export default function Cart() {
  const CATEGORY_NAME = "cart";
  const { cartItems, onAdd, onRemove } = useStateContext();
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
  return (
    <>
      <Header textAlign={"left"} fontWeight={"700"} color={"black"}>
        {CATEGORY_NAME.toUpperCase()}
      </Header>

      {!cartItems.length && <CartItem defaultItem={true} />}
      <>
        {cartItems.map((item, idx) => {
          return <CartItem key={idx} item={item} />;
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
