import React from 'react';
import './checkout-page.styles.scss';
import { connect } from 'react-redux';
import CheckoutItem from '../components/CheckoutItem/CheckoutItem.component';
import StripeBtn from '../components/Stripe/Stripe.component';

const CheckoutPage = (props)=> {
    return (<div className="checkout-page">
                <div className="checkout-header">
                    <span className="checkout-header-entry">Product</span>
                    <span className="checkout-header-entry">Description</span>
                    <span className="checkout-header-entry">Quantity</span>
                    <span className="checkout-header-entry">Price</span>
                    <span className="checkout-header-entry">Remove</span>
                </div>
                <div className="checkout-options">
                   {props.cart_items.map(item=>(<CheckoutItem className="checkout-options-item" key={`checkout-${item.id}`} el={item}/>))}
                </div>
                <div className="checkout-footer">
                    <span>{`Total : $ ${props.items_total}`}</span>
                </div>
                <div className="checkout-options-footer">
                    <StripeBtn priceTotal={props.items_total}/>
                </div>
            </div>);
};

function mapStateToProps(state){
    return{
        items_total: state.cart.items.reduce((total_sum, item)=> (total_sum + item.quantity*item.price), 0),
        cart_items: state.cart.items
    }
}

export default connect(mapStateToProps, null)(CheckoutPage); 