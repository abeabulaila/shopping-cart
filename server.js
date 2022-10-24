const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51LwUsGCRCPPM8IlHjsU1UXSERxjPJfhG17SvDcKAOC6B87qsH0RMqKyxicK437SwTTGsqb7te6KB1LYsPS2XLlwZ00KAwSko9K')

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

//Stripe item formatting
app.post('/checkout', async (req, res) => {
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push({
            price: item.id,
            quantity: item.quantity
        })
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
    })

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log('Listening on port 4000'))