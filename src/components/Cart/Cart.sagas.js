import {put, takeLatest} from 'redux-saga/effects';
import clearCart_A from './Cart.actions'

function* clearCart(){
    yield put(clearCart_A())
}

export default function* clearCart_S(){
    yield takeLatest('SIGN_OUT_SUCCESS', clearCart);
}