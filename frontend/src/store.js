import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducers,
  productDetailsReducer,
} from "./reducers/productReducers";
import {
  authReducer,
  authvReducer,
  userReducer,
  forgotPasswordReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  products: productsReducers,
  productDetails: productDetailsReducer,
  auth: authReducer,
  authv: authvReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
