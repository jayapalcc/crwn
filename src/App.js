import React from 'react';
import './App.css';
import HomePage from './HomePage/HomePage.components';
import SigninPage from './SignInPage/SigninPage.component';
import CheckoutPage from './CheckoutPage/CheckoutPage.component';

import Shop from './components/shop/Shop.component'
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/Header/Header.component';
import {connect} from 'react-redux';
import UncontrolledLottie from '../src/Lottie/Lottie.component';
import {checkSession_A} from './components/SignIn/Signin.actions';

class App extends React.Component{

  componentDidMount(){
    this.props.checkSession();
  }
  render(){

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/lottie' component={UncontrolledLottie}></Route>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={Shop}></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          <Route exact path='/signin' render={()=>{ return (this.props.currentUser ? (<Redirect to="/"/>) : (<SigninPage/>))}}></Route>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.user.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return{
    checkSession: ()=> {
      dispatch(checkSession_A());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);