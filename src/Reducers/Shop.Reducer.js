//import ShopData from '../components/shop/Shop.data'

const  INITIAL_STATE = {
    collections : [],
    loader : false
}

const ShopReducer =(state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'UPDATE_COLLECTION':
            return {...state, collections: action.payload}
        case 'LOAD_ANIMATION':
            return {...state, loader : true}
        case 'END_ANIMATION':
            return {...state, loader : false}
        default:
            return state;
    }
};

export default ShopReducer;