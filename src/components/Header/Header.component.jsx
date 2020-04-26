import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import {signOutInit_A} from '../SignIn/Signin.actions';
import {connect} from 'react-redux';
import Cart from '../Cart/Cart.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import LoadingLottie from '../../Lottie/Lottie.component';

const Header = (props)=>{
    return (<div className="header-main" >
                {
                  props.loader
                  ?<div className="lottie-canvas"><LoadingLottie/></div> 
                  :null
                }
              <div className="header">
                  <Link className="logo-box" to="/" ><Logo/></Link>
                  <div className="options">
                      <Link className="option" to="/shop">SHOP</Link>    
                      <Link className="option" to="/shop">CONTACT</Link>    
                      {
                          props.currentUser
                          ?<div className="option" onClick={props.signOutClick}> SIGNOUT</div>
                          :<Link className="option" to="/signin">SIGN IN</Link>
                      }
                  </div>
              </div>
              <div className="cart-option" onClick={props.clickCart}>
                <Cart/>
              </div>
              {
                (props.cart_visibility===true && props.cart_items.length>0)
                ?(<CartDropdown className="checkout" />)
                :(null)
              }
              
            </div> 
    );
};

function mapStateToProps(state){
    return{
      currentUser: state.user.currentUser,
      cart_visibility: state.cart.visible,
      cart_items: state.cart.items,
      loader: state.user.isInitialising
    }
  }
  

function mapDispatchToProps(dispatch){
  return{
    clickCart: ()=>{
      const action ={
        type: 'CHANGE_STATE'
      }
      dispatch(action);
    },
    signOutClick: ()=>{
      dispatch(signOutInit_A());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);