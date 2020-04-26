import {put, call, takeLatest, select} from 'redux-saga/effects';
import {auth, provider, createUserProfileDocument, doesUserExist} from '../../Firebase/Firebase.utils';
import {signinFailed_A, signinSuccess_A, signOutSuccess_A, signOutFailed_A} from './Signin.actions'

function* startGoogleSignIn(){
    /*const state = yield select()
    console.log(state)*/
    try{
    provider.setCustomParameters({prompt: 'select_account'});
    const {user} =yield auth.signInWithPopup(provider);
    const uRef = yield call(createUserProfileDocument,user);
    const userSnapshot =  yield uRef.get();

    yield put(signinSuccess_A({id: userSnapshot.id, ...userSnapshot.data()}));

    }catch(error){
        //console.log(error)
        yield put(signinFailed_A(error.message));
    }
}

function* startEmailSignIn(emailAndPassword){
    try{   //console.log(emailAndPassword.payload.email,emailAndPassword.payload.password)
        const {user} = yield auth.signInWithEmailAndPassword(emailAndPassword.payload.email,emailAndPassword.payload.password);
        const uRef = yield call(createUserProfileDocument, user);
        const userSnapshot =  yield uRef.get();
       
    yield put(signinSuccess_A({id: userSnapshot.id, ...userSnapshot.data()}));

    }catch(error){
        //console.log(error)
        yield put(signinFailed_A(error.message));
    }
} 

function* checkUserSession(){
    try{   
        console.log('Entered for promise check')
        const user = yield doesUserExist();
        
        if(!user) return;

        const uRef = yield call(createUserProfileDocument, user);
        const userSnapshot =  yield uRef.get();
       
    yield put(signinSuccess_A({id: userSnapshot.id, ...userSnapshot.data()}));

    }catch(error){
        //console.log(error)
        yield put(signinFailed_A(error.message));
    }
}


function* signOutUser(){
    try{   
        console.log('Logging Out')
        const obj= yield auth.signOut();
        console.log(obj)
        yield put(signOutSuccess_A());

    }catch(error){
        //console.log(error)
        yield put(signOutFailed_A(error.message));
    }
}


export function* emailSigninInit_S(){
    yield takeLatest('EMAIL_SIGN_IN_INIT', startEmailSignIn);
}

export function* googleSigninInit_S(){
    yield takeLatest('GOOGLE_SIGN_IN_INIT', startGoogleSignIn);
}

export function* checkSession_S(){
    yield takeLatest('CHECK_SESSION', checkUserSession);
}

export function* signOut_S(){
    yield takeLatest('SIGN_OUT_INIT', signOutUser);
} 

export function* signUpIntoSignIn_S(){
    yield takeLatest('SIGN_UP_SUCCESS', startEmailSignIn)
}
