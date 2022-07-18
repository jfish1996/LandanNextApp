import React from "react";
import CartItem from "../../components/atoms/CartItem/CartItem";
import { useStateContext } from "../../lib/context";
import Header from "../../components/atoms/List-Items/Header";
import { getStripe } from "../../lib/getStripe";

export default function Cart() {
  const CATEGORY_NAME = "cart";
  const { cartItems, onAdd, onRemove } = useStateContext();
  const getCheckout = async () => {
    console.log("in func");
    const stripe = await getStripe();
    console.log(stripe);
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    console.log(data);
    await stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <>
      <Header
        textAlign={"left"}
        padding={"16px 0 0 0"}
        fontWeight={"700"}
        color={"black"}
      >
        {CATEGORY_NAME.toUpperCase()}
      </Header>
      <div>
        {cartItems.map((item, idx) => {
          return <CartItem key={idx} item={item} />;
        })}
      </div>
      <button onClick={getCheckout}>Checkout</button>
    </>
  );
}
