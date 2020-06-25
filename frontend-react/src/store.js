import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import Cookie from 'js-cookie';
import thunk from 'redux-thunk';
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
import { orderDetailsReducer, orderPayReducer, myOrderListReducer, orderListReducer, orderDeleteReducer, orderCreateReducer} from './reducers/orderReducers'

const cartItems = Cookie.getJSON("cartItems")||[];
const userInfo = Cookie.getJSON("userInfo")||null;

const initialState ={cart:{cartItems,shipping:{},payment:{}}, userSignin:{userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    
    userUpdate: userUpdateReducer,

    orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer
})

const composeEnhancer= window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;

