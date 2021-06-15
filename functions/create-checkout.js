// This file creates a checkout session after the form is submitted

const stripe = require('stripe')(process.env.REACT_APP_SECRET_KEY);

const getProducts = require('./get-products');

const inventory = [];

getProducts().then((resp) => inventory.push(resp.data));

exports.handler = async (req) => {
  // The 2 lines below aren't doing anything, I am still working through that. Line 13 is from the tutorial, I need to replace it with something that is  actually storing the values from the form.
  const item = req.body;
  const product = inventory.find((p) => p.itemID === item);
  // Attempting to pass multiple items to line_items in the checkout seesion
  // const lineItems = [];
  // products.forEach((item) => {
  //   lineItems.push({
  //     name: item.itemID,
  //     amount: item.price,
  //     currency: 'usd',
  //     quantity: 1,
  //   });
  // });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    // process.env.URL is set by Netlify.
    success_url: `${process.env.URL}/success`,
    cancel_url: process.env.URL,
    // stripe docs describe line_items as the list of items but I can't figure out how to dynamically add items if there are multiple items in an order.
    // Having issues grabbing those values from the product above.
    line_items: [{
      name: product.itemID,
      amount: '4000',
      currency: 'usd',
      quantity: 1,
    }]
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: process.env.REACT_APP_SECRET_KEY,
    }),
  };
};
