import {takeLatest, put} from 'redux-saga/effects';
import {signUpUserSuccess_A, signUpUserFailed_A} from './SignUp.actions';
import {auth, createUserProfileDocument} from '../../Firebase/Firebase.utils';

function* signUpInit(signUpCredentials){
    try{
        const {email, password, displayName} = signUpCredentials.payload;
        //console.log(email, password, displayName);
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield createUserProfileDocument(user, {displayName});
        //console.log('Successfully Created User.');
        yield put(signUpUserSuccess_A({email, password}));

    }catch(error){
        yield put(signUpUserFailed_A(error.message));
    }
}

export function* signUpInit_S(){
    yield takeLatest('SIGN_UP_INIT', signUpInit)
}
