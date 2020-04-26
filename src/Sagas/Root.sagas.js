import {all, call} from 'redux-saga/effects';
import fetchCollectionsInit from '../components/shop/Shop.saga';
import {googleSigninInit_S, emailSigninInit_S, checkSession_S, signOut_S, signUpIntoSignIn_S} from '../components/SignIn/Signin.sagas';
import clearCart_S from '../components/Cart/Cart.sagas';
import {signUpInit_S} from '../components/SignUp/SignUp.sagas'


export default function* rootSaga(){
    yield all([call(fetchCollectionsInit), call(googleSigninInit_S), call(emailSigninInit_S), call(checkSession_S), call(signOut_S), call(clearCart_S), call(signUpInit_S), call(signUpIntoSignIn_S)]);
} 