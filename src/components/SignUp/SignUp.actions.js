export const signUpUser_A=(signUpCredentials)=>{

    const action={
        type: 'SIGN_UP_INIT',
        payload: signUpCredentials
    }
    return action;
}

export const signUpUserSuccess_A=(emailAndPassword)=>{

    const action={
        type: 'SIGN_UP_SUCCESS',
        payload: emailAndPassword
    }
    return action;
}

export const signUpUserFailed_A=(eMsg)=>{

    const action={
        type: 'SIGN_UP_FAILED',
        payload: eMsg
    }
    return action;
}


