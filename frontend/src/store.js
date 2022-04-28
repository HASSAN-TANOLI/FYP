import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducers,
  productDetailsReducer,
  newProductReducer,
  productReducer,
} from "./reducers/productReducers";
import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
} from "./reducers/userReducers";

import { vendorReducer, vendorrReducer } from "./reducers/vendorReducers";

import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  products: productsReducers,
  productDetails: productDetailsReducer,
  newProduct: newProductReducer,
  product: productReducer,
  auth: authReducer,
  vendor: vendorReducer,
  vendorr: vendorrReducer,

  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
