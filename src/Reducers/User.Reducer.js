const  INITIAL_STATE = {
    currentUser: null
}

const userReducer =(state = INITIAL_STATE, action)=>{
    //console.log('Fired Now')
    switch (action.type) {
        case 'NEW_USER':
            //console.log(Object.assign({},state, {currentUser: action.payload}));
            return Object.assign({},state, {currentUser: action.payload})
        default:
            return state;
    }
};

export default userReducer;