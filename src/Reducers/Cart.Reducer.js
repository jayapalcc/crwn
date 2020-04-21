import {CartDropdownFilter, CartDecrement, CartIncrement} from './Utils/Cart.Reducer.Utils';

const  INITIAL_STATE = {
    visible: false,
    items: []
}

const CartReducer =(state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'CHANGE_STATE':
            //console.log(Object.assign({},state, {visible: !state.visible}));
            return ({...state,visible: !state.visible})
        case 'ADD_TO_CART':
            return CartDropdownFilter(state, action.payload);
            //return Object.assign({},state, {items: [...state.items, action.payload]})
        case 'DELETE_FROM_CART':
            return ({...state,items: state.items.filter(item=>(item.id!==action.payload.id))})
        case 'DEC_FROM_CART':
            return CartDecrement(state, action.payload);
        case 'INC_FROM_CART':
            return CartIncrement(state, action.payload);
        default:
            return state;
    }
};

export default CartReducer;