import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';

const CheckoutItem = (props)=> {
    console.log()
    return (
                <div className="checkout-options">
                    <div className="checkout-option">
                        <div className="checkout-option-product" style={{backgroundImage: `url(${props.el.imageUrl})`}}>
                            
                        </div>
                        <div className="checkout-op checkout-option-description">
                            {props.el.name}
                        </div>
                        <div className="checkout-op checkout-option-quantity">
                            <div className="checkout-option-div checkout-option-div-ch" onClick={()=>(props.decItem(props.el))}>&lt;</div>

                            <div className="checkout-option-div">
                                {props.el.quantity}
                            </div>

                            <div className="checkout-option-div checkout-option-div-ch" onClick={()=>(props.incItem(props.el))}>&gt;</div>
                        </div>
                        <div className="checkout-op checkout-option-price">
                            {`$ ${props.el.price}`}
                        </div>
                        <div className="checkout-option-remove" onClick={()=>(props.deleteItem(props.el))}>
                            X
                        </div>
                    </div>
                </div>
            );
};

function mapDispatchToProps(dispatch){
    return{
        deleteItem: (delItem)=>{
            const action ={
                type: 'DELETE_FROM_CART',
                payload: delItem
            }
            dispatch(action);
        },
        decItem: (decItem)=>{
            const action ={
                type: 'DEC_FROM_CART',
                payload: decItem
            }
            dispatch(action);
        },
        incItem: (incItem)=>{
            const action ={
                type: 'INC_FROM_CART',
                payload: incItem
            }
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem); 