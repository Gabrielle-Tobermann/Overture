// This file creates a checkout session after the form is submitted

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const { default: getProducts } = require('./get-products');

const inventory = [];

getProducts().then((resp) => inventory.push(resp));

exports.handler = async (event) => {
  const { sku } = JSON.parse(event.body);
  const products = inventory.map((item) => item.itemID === sku);
  // Not sure if I need a valid quantity for this to work. I'm thinking not.
  // const validatedQuantity = quantity > 0 && quantity < 11 ? quantity : 1;
  // Attempting to pass multiple items to line_items in the checkout seesion
  const lineItems = [];
  products.forEach((item) => {
    lineItems.push({
      name: item.itemID,
      amount: item.price,
      currency: 'usd',
      quantity: 1,
    });
  });

  console.warn(lineItems);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    // process.env.URL is set by Netlify.
    success_url: `${process.env.URL}/success.html`,
    cancel_url: process.env.URL,
    // stripe docs describe line_items as the list of items but I can't figure out how to dynamically add items if there are multiple items in an order.
    line_items: lineItems
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: process.env.REACT_APP_SECRET_KEY,
    }),
  };
};
