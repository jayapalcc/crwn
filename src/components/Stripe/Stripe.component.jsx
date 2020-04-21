import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeBtn = (props)=> {
    const stripePrice = props.priceTotal * 100;
    //console.log(props);
    const publicKey = 'pk_test_Qtuf1J8mggEPbzdJSNWcAjoC00sLVI3WtT';
    const onToken = (token)=>{
        console.log(token);
        alert('Payment Successful')
    }
    return (<div>
                <StripeCheckout
                    label='Pay Now'
                    name='Clothin Inc'
                    billingAddress
                    shippingAddress
                    image='https://svgshare.com/i/CUz.svg'
                    description={`Your total bill is $${props.priceTotal}`}
                    amount={stripePrice}
                    panelLabel='PAY NOW'
                    token={onToken}
                    stripeKey={publicKey}
                />
            </div>);
};


export default StripeBtn; 