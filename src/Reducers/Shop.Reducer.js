import ShopData from '../components/shop/Shop.data'

const  INITIAL_STATE = {
    collections : ShopData
}

const ShopReducer =(state = INITIAL_STATE, action)=>{
    switch (action.type) {
        default:
            return state;
    }
};

export default ShopReducer;