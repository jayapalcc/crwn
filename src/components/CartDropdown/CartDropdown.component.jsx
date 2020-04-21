import React from 'react'
import { connect } from 'react-redux'
import './cart-dropdown.styles.scss';
import FormButton from '../FormButton/FormButton.component'
import CartItem from '../CartItem/CartItem.component'
import {withRouter} from 'react-router-dom';

export const CartDropdown = (props) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {props.items.map(item=>(<CartItem key={item.id} img={item.imageUrl} quantity={item.quantity} price={item.price} name={item.name} className="cart-item"/>))}
            </div>
            <FormButton className="cart-btn btn black-bg__white-text" onClick={()=> {props.clickCart();(props.history.push(`${props.match.url}checkout`))}}>CHECKOUT</FormButton>
        </div>
    )
}

function mapStateToProps(state){
    return{
        items: state.cart.items
    }
}

function mapDispatchToProps(dispatch){
    return{
      clickCart: ()=>{
        const action ={
          type: 'CHANGE_STATE'
        }
        dispatch(action);
      }
    }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));