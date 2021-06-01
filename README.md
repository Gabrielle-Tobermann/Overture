## Project ERD 

![revisedOvertureERD](https://user-images.githubusercontent.com/76187279/120403144-3cf8ea80-c309-11eb-8614-a73275cd4f6d.png)


I want my app to reflect how a shop would actually differentiate instruments with the itemID. That key would be a unique identifier for each item, but would also give some information (just like in a shop) - if it's a violin, the instrument ID would like like this: V001. If it's a double bass, it would look like this: DB001. The users table is necessary because only shop employees and shop owner (who would also be the admin) would have access to any of the features of the app. Unauthenticated users can only see the home page, with no access to any tabs in the nav bar. The payment_info table will hold the payment_intent object, which is the response from creating a new payment intent though the Stripe API. It would also hold the customer ID for that transaction. 

## API response from Stripe 

```
{
    "id": "pi_1IwylpHB575KhiFT2hCT0Boi",
    "object": "payment_intent",
    "amount": 3400,
    "amount_capturable": 0,
    "amount_received": 0,
    "application": null,
    "application_fee_amount": null,
    "canceled_at": null,
    "cancellation_reason": null,
    "capture_method": "automatic",
    "charges": {
        "object": "list",
        "data": [],
        "has_more": false,
        "total_count": 0,
        "url": "/v1/charges?payment_intent=pi_1IwylpHB575KhiFT2hCT0Boi"
    },
    "client_secret": "pi_1IwylpHB575KhiFT2hCT0Boi_secret_5f936sd7puY7FYwD92Ln1d8FM",
    "confirmation_method": "automatic",
    "created": 1622420057,
    "currency": "usd",
    "customer": null,
    "description": null,
    "invoice": null,
    "last_payment_error": null,
    "livemode": false,
    "metadata": {},
    "next_action": null,
    "on_behalf_of": null,
    "payment_method": null,
    "payment_method_options": {
        "card": {
            "installments": null,
            "network": null,
            "request_three_d_secure": "automatic"
        }
    },
    "payment_method_types": [
        "card"
    ],
    "receipt_email": null,
    "review": null,
    "setup_future_usage": null,
    "shipping": null,
    "source": null,
    "statement_descriptor": null,
    "statement_descriptor_suffix": null,
    "status": "requires_payment_method",
    "transfer_data": null,
    "transfer_group": null
}
```
