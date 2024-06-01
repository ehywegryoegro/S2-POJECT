// PaymentForm.js
import React ,{useEffect , useState} from 'react';
import './PaymentForm.scss';
import axios from 'axios';
const visa = require("../../../assets/visacard.png")
import { CardNumberElement, CardExpiryElement, CardCvcElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import {  AnimatePresence } from 'framer-motion';
const stripePromise = loadStripe('pk_test_51P7It6RvUoIKTFiLEIooBA1WdiXmYnaySktQGZjqUhs5uYFUSQoZzMLO6uXWpgQtyKx4FxjRmAwlGo1LE19iCydg00gnRmS4ll');



const PaymentForm = ({ total, onClose , ID}) => {
  
  useEffect(() => {
    console.log(ID)
  }, []);

  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage2, setErrorMessage2] = useState(false);
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
          setErrorMessage2(true);
          setTimeout(() => setErrorMessage2(false), 3000);
        } else {
          try {
            const response = await axios.post('http://localhost:4000/cart/purchase', {
              total,
              stripeTokenId: paymentMethod.id,
              ids : ID,
              
              
            },{ withCredentials: true });
    
            const paymentResponse = response.data;
    
            if (response.status === 200) {
                console.log(paymentResponse )
                console.log("payment succeed")
                setSuccessMessage(true)
                setTimeout(() => setSuccessMessage(false), 3000);
             
            } else {
              console.log("payment failed")
            }
          } catch (err) {
            console.error('Payment error:', err);
            setErrorMessage(true);
          setTimeout(() => setErrorMessage(false), 3000);
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
      <div className="payment-form ">
        <button onClick={onClose} className='close'><IoMdClose className='icon' /></button>
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
        <AnimatePresence>
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className='w-64 ml-14 flex  justify-center items-center rounded bg-red-200 h-9 mt-3'
                >
                  <p className='text-sm text-red-600 w-full flex items-center justify-items-start ml-2'>
                    <IoIosCloseCircleOutline className='mr-1' /> Payment failed
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {errorMessage2 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className='w-64 ml-14 flex  justify-center items-center rounded bg-red-200 h-9 mt-3'
                >
                  <p className='text-sm text-red-600 w-full flex items-center justify-items-start ml-2'>
                    <IoIosCloseCircleOutline className='mr-1' /> Invalid card information
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
        <AnimatePresence>
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className='w-64 flex ml-14 justify-center items-center rounded bg-green-200 h-9 mt-3'
                >
                  <p className='text-sm text-green-600 w-full flex items-center justify-items-start ml-2'>
                  <CiCircleCheck className="mr-1" /> Payment succeed
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
      </div>
    </div>


  );
};

export default PaymentForm;











