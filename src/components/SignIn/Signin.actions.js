export const googleSigninInit_A= ()=>{
    const action ={
        type: 'GOOGLE_SIGN_IN_INIT'
    }
    return action;
}

export const emailSigninInit_A= (emailAndPassword)=>{
    const action ={
        type: 'EMAIL_SIGN_IN_INIT',
        payload: emailAndPassword
    }
    return action;
}

export const signinFailed_A= (err)=>{
    const action ={
        type: 'SIGN_IN_FAILED',
        payload: err
    }
    return action;
}

export const signinSuccess_A= (user)=>{
    const action ={
        type: 'SIGN_IN_SUCCESS',
        payload: user
    }
    return action;
}

//This is for the App.js starter file
export const checkSession_A= ()=>{
    const action ={
        type: 'CHECK_SESSION'
    }
    return action;
}

//This is for header file to sign out
export const signOutInit_A= ()=>{
    const action ={
        type: 'SIGN_OUT_INIT'
    }
    return action;
}

export const signOutFailed_A= (err)=>{
    const action ={
        type: 'SIGN_OUT_FAILED',
        payload: err
    }
    return action;
}

export const signOutSuccess_A= ()=>{
    const action ={
        type: 'SIGN_OUT_SUCCESS'
    }
    return action;
}
 