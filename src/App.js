import React from 'react';
import './App.css';
import HomePage from './HomePage/HomePage.components';
import SigninPage from './SignInPage/SigninPage.component';
import CheckoutPage from './CheckoutPage/CheckoutPage.component';

import Shop from './components/shop/Shop.component'
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/Header/Header.component';
import {auth, createUserProfileDocument} from './Firebase/Firebase.utils';
import {connect} from 'react-redux';
import UncontrolledLottie from '../src/Lottie/Lottie.component';

class App extends React.Component{

  unsubscribeAuth = null;

  componentDidMount(){
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth =>{

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.props.postCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }else{
        this.props.postCurrentUser(userAuth);
      }
    });

    //loadFirestore('collections', this.props.collections);

  }

  componentWillUnmount(){
    this.unsubscribeAuth = null;
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
    //collections: state.shop.collections
  }
}

function mapDispatchToProps(dispatch){
  return{
    postCurrentUser: (user)=>{
      const action ={
        type: 'NEW_USER',
        payload: user
      }
      //console.log(action);
      dispatch(action);
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);