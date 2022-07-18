import { loadStripe } from "@stripe/stripe-js";

let stripe;

export const getStripe = async () => {
  console.log("in this function");
  if (!stripe) {
    stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    console.log(stripe);
  }
  return stripe;
};
