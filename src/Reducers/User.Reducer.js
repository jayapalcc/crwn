const  INITIAL_STATE = {
    currentUser: null,
    isInitialising: false,
    errorMessage: []
}

const userReducer =(state = INITIAL_STATE, action)=>{
    //console.log('Fired Now')
    switch (action.type) {
        case 'GOOGLE_SIGN_IN_INIT':
            return {...state, isInitialising: true}
        case 'EMAIL_SIGN_IN_INIT':
            return {...state, isInitialising: true}
        case 'SIGN_IN_SUCCESS':
            return {...state, currentUser: action.payload, isInitialising: false}
        case 'SIGN_IN_FAILED':
            return {...state, isInitialising: false, errorMessage: action.payload}
        case 'SIGN_OUT_INIT':
            return {...state, isInitialising: true}
        case 'SIGN_OUT_SUCCESS':
            return {...state, currentUser: null, isInitialising: false, errorMessage: ''}
        case 'SIGN_OUT_FAILED':
            return {...state, isInitialising: false, errorMessage: action.payload}
        case 'SIGN_UP_INIT':
            return {...state, isInitialising: true}
        case 'SIGN_UP_SUCCESS':
            return {...state, isInitialising: true}
        case 'SIGN_UP_FAILED':
            return {...state, isInitialising: false, errorMessage: action.payload}
        
        default:
            return state;
    }
};

export default userReducer; 