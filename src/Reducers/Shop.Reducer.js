//import ShopData from '../components/shop/Shop.data'

const  INITIAL_STATE = {
    collections : [],
    isFetching: false,
    fetchErrorMessage: []
}

const ShopReducer =(state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'FETCH_COLLECTION_INIT':
            return {...state, isFetching: true}
        case 'FETCH_COLLECTION_SUCCESS':
            return {...state, collections: action.payload, isFetching: false}
        case 'FETCH_COLLECTION_FAILED':
            return {...state, isFetching: false, fetchErrorMessage: action.payload}
        default:
            return state;
    }
};

export default ShopReducer;