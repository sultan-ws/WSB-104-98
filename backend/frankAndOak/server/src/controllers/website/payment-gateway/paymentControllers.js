const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const buySomething = async (req, res) => {
    try {
        console.log(req.body);

        const lineItems = req.body.map((item) => (
            {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: item.product.name
                    },
                    unit_amount: item.product.price * 100
                },
                quantity: item.quentity
            }
        ));

        const customer = await stripe.customers.create({
            name: 'rahul',
            address:{
                line1:"Broadway 10th street",
                line2: 'bombay motors',
                city:'jodhpur',
                state: 'rajasthan',
                postal_code: '342001',
                country: 'in',
            }
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/payment-failed',
            customer: customer.id
        });


        console.log(customer, session);



        res.status(200).json({ message: 'success' , session:session.id });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });
    }
};

module.exports = {
    buySomething
}