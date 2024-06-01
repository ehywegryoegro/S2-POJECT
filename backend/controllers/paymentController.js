
const OrderModel = require("../models/Orders");
const stripe = require('stripe')
const Stripe = stripe('sk_test_51P7It6RvUoIKTFiLsl31LHPzTZuKHBHZC27NIVj2ao2B0391LR0336aEDeKhhnLrQlfxV95QuUUvNIhINrDacVlM00ugXozuhk')

exports.processPayment = async (req, res) => {
  try {
    console.log("we are here now")
    if (!req.user || !req.user[0].id) {
      console.log("we are here now 2")
      console.log("unauthorized")
      return res.status(401).json({ status: "error", error: "Unauthorized" });
  }
    const { total, stripeTokenId , ids } = req.body;
  console.log(total)
  console.log(stripeTokenId)
  console.log(ids)
    const amount = Math.round(total * 100);
   
    const paymentIntent = await Stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: stripeTokenId,
      payment_method_types: ['card'],
      confirmation_method: 'manual',
      confirm: true,
    });
    console.log("we are here now 3")
    // const charge = await Stripe.charges.create({
    //   amount: total,
    //   source: stripeTokenId,
    //   currency: 'usd',

    // });
    console.log('Payment Intent:', paymentIntent);
    for(let i=0 ; i<ids.length ; i++){
      OrderModel.updatePaidOrder(req.user[0].id , ids[i])
    }

    res.json({ message: 'Successfully processed payment', paymentIntent });
    // console.log('Charge Successful:', charge);
    // res.json({ message: 'Successfully purchased items' });
  } catch (error) {
    console.error('Charge Fail:', error);
    res.status(500).json({ error: 'Payment failed' });
  }
};

