import React from "react";
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
import { useRouter } from "next/router";

export async function getSSProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id
  );
  return { props: { order } };
}

export default function Success({ order }) {
  const route = useRouter();
  return (
    <h1>
      Thank you for your order!
      <button onClick={() => route.push("/")}></button>
    </h1>
  );
}
