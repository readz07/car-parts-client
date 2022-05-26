import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { set } from 'react-hook-form';
const CheckOut = ({ paidOrder }) => {
    const {
        _id, 
        productPrice, 
        productQuantity, 
        address,
        email,
        name,
        phone,      
        productName,
        
        } = paidOrder
    const paidPrice = parseFloat(productPrice * productQuantity)
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [loading, setLoading] = useState(false);
    const [transactionId, setTransactionId] = useState('')
    const [cardSuccess, setCardSuccess] = useState('');

    //clien payement API state
    const [clientSecret, setClientSecret] = useState('');
    
    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ paidPrice })
        }).then(res => {
            console.log(res)
            if (res.status === 401 || res.status === 403) {
                // navigate('/')
            }
            return res.json()
        }
        )
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [paidPrice])



    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setCardSuccess('')
        setLoading(true)
        // confirm payment
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: name,                  
                  email: email,
                },
              },
            },
          );
          if(intentError){
              setCardError(intentError?.message)
              setLoading(false)
          } else{
              setCardError('')
              setTransactionId(paymentIntent.id)
              console.log(paymentIntent)
              setCardSuccess('Payment Successful')

              const payment = {
                orderId: _id,
                transactionId: paymentIntent.id
            }

            // fetch data
            fetch(`http://localhost:5000/paidorders/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res=>res.json())
            .then(data => {
                setLoading(false);
                console.log(data);
            })
          }

    };
    return (
        <div>
            <>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#fff',
                                    '::placeholder': {
                                        color: '#fff',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className='btn btn-warning btn-sm my-2' type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </form>
                {cardError && <p className='text-red-500'>{cardError}</p>}
                {cardSuccess && <p className='text-green-500'>{cardSuccess}</p>}
            </>
        </div>
    );
};

export default CheckOut;