import React from 'react';
import './cart-item.styles.scss';

const CartItem = (props)=> {

    return (
        <div className="cart-item">
            <div className="cart-item-image" style={{backgroundImage : `url(${props.img})`}}></div>
            <div className="cart-item-tag">
                <div className="cart-item-tag-name">{props.name}</div>
                <div className="cart-item-tag-qxp">{props.quantity} x {` $${props.price}`}</div>
            </div>
            
        </div>   
    );
};

export default CartItem;