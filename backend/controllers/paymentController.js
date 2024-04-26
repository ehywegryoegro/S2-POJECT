

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (req, res) => {
  try {
    const { items, stripeTokenId } = req.body;
    let total = 0;
    items.forEach(function(item) {
      total += item.price * item.quantity;
    });

    const charge = await stripe.charges.create({
      amount: total,
      source: stripeTokenId,
      currency: 'usd'
    });

    console.log('Charge Successful:', charge);
    res.json({ message: 'Successfully purchased items' });
  } catch (error) {
    console.error('Charge Fail:', error);
    res.status(500).json({ error: 'Payment failed' });
  }
};

