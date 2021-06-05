# Overture 

Welcome to Overture, the perfect place for a violin shop to keep track of their inventory, reference their orders, and see some financial reporting on rentals and sales. 

## Users 
Users for this app are the shop owner and their employees. They will have to authenticate to access features.Customers do not access to this app.

## Project ERD 

![revisedOvertureERD](https://user-images.githubusercontent.com/76187279/120403144-3cf8ea80-c309-11eb-8614-a73275cd4f6d.png)


I want my app to reflect how a shop would actually differentiate instruments with the itemID. That key would be a unique identifier for each item, but would also give some information (just like in a shop) - if it's a violin, the instrument ID would like like this: V001. If it's a double bass, it would look like this: DB001. The users table is necessary because only shop employees and shop owner (who would also be the admin) would have access to any of the features of the app. Unauthenticated users can only see the home page, with no access to any tabs in the nav bar. The payment_info table will hold the payment_intent object, which is the response from creating a new payment intent though the Stripe API. It would also hold the customer ID for that transaction. 

## API response from Stripe: Post request for payment intent: https://api.stripe.com/v1/payment_intents

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

Response for post payment method: https://api.stripe.com/v1/payment_methods?card[number]=4242424242424242&card[exp_month]=6&card[exp_year]=2022&card[cvc]=314&type=card

```{
    "id": "pm_1IynBQHB575KhiFT0h2nB8nN",
    "object": "payment_method",
    "billing_details": {
        "address": {
            "city": null,
            "country": null,
            "line1": null,
            "line2": null,
            "postal_code": null,
            "state": null
        },
        "email": null,
        "name": null,
        "phone": null
    },
    "card": {
        "brand": "visa",
        "checks": {
            "address_line1_check": null,
            "address_postal_code_check": null,
            "cvc_check": "unchecked"
        },
        "country": "US",
        "exp_month": 6,
        "exp_year": 2022,
        "fingerprint": "pK3vfoIdlJBTpWwt",
        "funding": "credit",
        "generated_from": null,
        "last4": "4242",
        "networks": {
            "available": [
                "visa"
            ],
            "preferred": null
        },
        "three_d_secure_usage": {
            "supported": true
        },
        "wallet": null
    },
    "created": 1622852172,
    "customer": null,
    "livemode": false,
    "metadata": {},
    "type": "card"
}
```

API response for confirming payment intent: https://api.stripe.com/v1/payment_intents/pi_1IwylpHB575KhiFT2hCT0Boi/confirm?payment_method=pm_1IynBQHB575KhiFT0h2nB8nN
This has the ID of the payment intent (first response above) in the HTTP request, and has the payment method ID (second response above) as a parameter. The payment intent confirmation has a status of "succeeded", which you can see at the bottom of the response. 

```{
    "id": "pi_1IwylpHB575KhiFT2hCT0Boi",
    "object": "payment_intent",
    "amount": 3400,
    "amount_capturable": 0,
    "amount_received": 3400,
    "application": null,
    "application_fee_amount": null,
    "canceled_at": null,
    "cancellation_reason": null,
    "capture_method": "automatic",
    "charges": {
        "object": "list",
        "data": [
            {
                "id": "ch_1IynRTHB575KhiFTSq22PEFx",
                "object": "charge",
                "amount": 3400,
                "amount_captured": 3400,
                "amount_refunded": 0,
                "application": null,
                "application_fee": null,
                "application_fee_amount": null,
                "balance_transaction": "txn_1IynRTHB575KhiFTu2RAaBIy",
                "billing_details": {
                    "address": {
                        "city": null,
                        "country": null,
                        "line1": null,
                        "line2": null,
                        "postal_code": null,
                        "state": null
                    },
                    "email": null,
                    "name": null,
                    "phone": null
                },
                "calculated_statement_descriptor": "Stripe",
                "captured": true,
                "created": 1622853167,
                "currency": "usd",
                "customer": null,
                "description": null,
                "destination": null,
                "dispute": null,
                "disputed": false,
                "failure_code": null,
                "failure_message": null,
                "fraud_details": {},
                "invoice": null,
                "livemode": false,
                "metadata": {},
                "on_behalf_of": null,
                "order": null,
                "outcome": {
                    "network_status": "approved_by_network",
                    "reason": null,
                    "risk_level": "normal",
                    "risk_score": 16,
                    "seller_message": "Payment complete.",
                    "type": "authorized"
                },
                "paid": true,
                "payment_intent": "pi_1IwylpHB575KhiFT2hCT0Boi",
                "payment_method": "pm_1IynBQHB575KhiFT0h2nB8nN",
                "payment_method_details": {
                    "card": {
                        "brand": "visa",
                        "checks": {
                            "address_line1_check": null,
                            "address_postal_code_check": null,
                            "cvc_check": null
                        },
                        "country": "US",
                        "exp_month": 6,
                        "exp_year": 2022,
                        "fingerprint": "pK3vfoIdlJBTpWwt",
                        "funding": "credit",
                        "installments": null,
                        "last4": "4242",
                        "network": "visa",
                        "three_d_secure": null,
                        "wallet": null
                    },
                    "type": "card"
                },
                "receipt_email": null,
                "receipt_number": null,
                "receipt_url": "https://pay.stripe.com/receipts/acct_1IwUdhHB575KhiFT/ch_1IynRTHB575KhiFTSq22PEFx/rcpt_Jc1UsCR5il3OQs1jt6FdCtQpjZzDIEl",
                "refunded": false,
                "refunds": {
                    "object": "list",
                    "data": [],
                    "has_more": false,
                    "total_count": 0,
                    "url": "/v1/charges/ch_1IynRTHB575KhiFTSq22PEFx/refunds"
                },
                "review": null,
                "shipping": null,
                "source": null,
                "source_transfer": null,
                "statement_descriptor": null,
                "statement_descriptor_suffix": null,
                "status": "succeeded",
                "transfer_data": null,
                "transfer_group": null
            }
        ],
        "has_more": false,
        "total_count": 1,
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
    "payment_method": "pm_1IynBQHB575KhiFT0h2nB8nN",
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
    "status": "succeeded",
    "transfer_data": null,
    "transfer_group": null
}
```
## Flow chart 
[Overture coding flow.pdf](https://github.com/Gabrielle-Tobermann/Overture/files/6602658/Overture.coding.flow.pdf)

## User flow chart 
[Overture user flow.pdf](https://github.com/Gabrielle-Tobermann/Overture/files/6602660/Overture.user.flow.pdf)


## Helper chart for Stripe and OrderForm 
[OrderFormComponent.pdf](https://github.com/Gabrielle-Tobermann/Overture/files/6602665/OrderFormComponent.pdf)


## Wireframe 
https://www.figma.com/file/m559biWxFK2CleVPh4298G/Overture?node-id=0%3A1

## Portfolio site 
https://gabrielletobermann.netlify.app/

## Project Board
https://github.com/Gabrielle-Tobermann/Overture/projects/1

## Features
- Google authentication - Users must log in to access any of the feaures
- An instrument inventory view where the user can read, add, update, delete items.
- A bow inventory with CRUD on items. 
- Users can search instruments and bows by ID 
- An orders view for users to view exisiting orders, add or delete orders.
- Users can search order by customer name
- A financial reports view just for the admin (shop owner) to see a chart of rental and sales revenue on instruments/bows for the year.

## Loom 



## Contributor
https://github.com/Gabrielle-Tobermann
