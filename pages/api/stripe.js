import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const CART_HAS_BULK_ITEMS = Boolean(
        req.body.find((item) => item.bulky_item === true)
      );
      const DEFAULT_SHIPPING_ID = "shr_1M5MPaDfaAzXUTmgUgav2t3t";
      const BULKY_SHIPPING_ID = "shr_1O0zxPDfaAzXUTmgISYelj2G";

      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["US"],
        },
        allow_promotion_codes: true,
        shipping_options: [
          {
            shipping_rate: CART_HAS_BULK_ITEMS
              ? BULKY_SHIPPING_ID
              : DEFAULT_SHIPPING_ID,
          },
        ],
        line_items: req.body.map((item) => {
          return {
            price_data: {
              currency: "usd",
              tax_behavior: "exclusive",
              product_data: {
                name: item.Title,
                images: [item.url],
              },
              unit_amount: item.Price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/shop/cart/success`,
        cancel_url: `${req.headers.origin}/shop/cart?cancel`,
        automatic_tax: {
          enabled: true,
        },
      });
      res.status(200).json(session);
    } catch (error) {
      res.status(error.statusCode || 500).json(error.message);
    }
  }
}
