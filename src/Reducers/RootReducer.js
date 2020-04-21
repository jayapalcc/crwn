import userReducer from './User.Reducer';
import CartReducer from './Cart.Reducer';
import DirReducer from './Directory.Reducer';
import ShopReducer from './Shop.Reducer';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['cart'] //user is managed by firebase
}

const rootReducer =combineReducers({
    user: userReducer,
    cart: CartReducer,
    dir: DirReducer,
    shop: ShopReducer
});

export default persistReducer(persistConfig,rootReducer);