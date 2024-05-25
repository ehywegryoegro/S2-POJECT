

const stripe = require('stripe')
const Stripe = stripe('sk_test_51P7It6RvUoIKTFiLsl31LHPzTZuKHBHZC27NIVj2ao2B0391LR0336aEDeKhhnLrQlfxV95QuUUvNIhINrDacVlM00ugXozuhk')

exports.processPayment = async (req, res) => {
  try {

    const { total, stripeTokenId } = req.body;

    const amount = Math.round(total * 100);
   
    const paymentIntent = await Stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: stripeTokenId,
      payment_method_types: ['card'],
      confirmation_method: 'manual',
      confirm: true,
    });

    // const charge = await Stripe.charges.create({
    //   amount: total,
    //   source: stripeTokenId,
    //   currency: 'usd',

    // });
    console.log('Payment Intent:', paymentIntent);

    res.json({ message: 'Successfully processed payment', paymentIntent });
    // console.log('Charge Successful:', charge);
    // res.json({ message: 'Successfully purchased items' });
  } catch (error) {
    console.error('Charge Fail:', error);
    res.status(500).json({ error: 'Payment failed' });
  }
};

