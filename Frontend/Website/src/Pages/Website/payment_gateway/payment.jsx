// PaymentForm.js
import React ,{useEffect , useState} from 'react';
import './PaymentForm.scss';
import axios from 'axios';
const visa = require("../../../assets/visacard.png")
import { CardNumberElement, CardExpiryElement, CardCvcElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51P7It6RvUoIKTFiLEIooBA1WdiXmYnaySktQGZjqUhs5uYFUSQoZzMLO6uXWpgQtyKx4FxjRmAwlGo1LE19iCydg00gnRmS4ll');
const PaymentForm = ({ total, onClose, onPaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
   
    const [cardHolder, setCardHolder] = useState('');
    
    const [saveCard, setSaveCard] = useState(false);
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
          return <div>Loading...</div>;
        }  
    

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement,
      billing_details:{
        name :cardHolder,
      }
    });
    
        if (error) {
          console.error(error);
        } else {
          try {
            const response = await axios.post('http://localhost:4000/cart/purchase', {
              total,
              stripeTokenId: paymentMethod.id,
            });
    
            const paymentResponse = response.data;
    
            if (response.status === 200) {
                console.log(paymentResponse )
                console.log("payment succeed")
              
             
            } else {
              console.log("payment failed")
            }
          } catch (err) {
            console.error('Payment error:', err);
            alert('Payment failed');
          }
        }
      };

      const cardElementOptions = {
        style: {
          base: {
            fontSize: '16px',
            color: '#32325d',
            fontWeight: 'bold',
            '::placeholder': {
              color: '#aab7c4',
              
            },
          },
          invalid: {
            color: '#fa755a',
          },
        },
      };
  return (
    <div className="payment-form-container">
      <div className="payment-form">
        
        <h2>PAYMENT</h2>
        <div className="card-image">
          <img src={visa} alt="Visa Card" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Credit Card Number</label>
            <CardNumberElement className='elements' options={cardElementOptions} />
            {/* <input type="text" id="cardNumber" placeholder="XXXX XXXX XXXX 8014" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} /> */}
          </div>
          <div className="form-group">
            <label htmlFor="cardHolder">Card Holder Name</label>
            <input type="text" id="cardHolder" placeholder="NAME NAME"  value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiry">Expiry</label>
              <CardExpiryElement className='elements' options={cardElementOptions} />
              {/* <input type="text" id="expiry" placeholder="08/21"  value={expiry} onChange={(e) => setExpiry(e.target.value)}/> */}
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <CardCvcElement className='elements' options={cardElementOptions} />
              {/* <input type="text" id="cvv" placeholder="XXX" value={cvv} onChange={(e) => setCvv(e.target.value)} /> */}
            </div>
          </div>

          <div className="form-check mr-10">
            <input className='mr-1 checked:bg-black' type="checkbox" id="saveCard" checked={saveCard} onChange={(e) => setSaveCard(e.target.checked)} />
            <label htmlFor="saveCard" >Save this card for future transactions</label>
          </div>
          <hr className="divider" />
          <div className="total-section">
            <p className="total">TOTAL: {total} DZD</p>
            <button type="submit" className="pay-button" >
              PROCEED TO PAY
            </button>
          </div>
          
        </form>
        
      </div>
    </div>


  );
};

export default PaymentForm;











