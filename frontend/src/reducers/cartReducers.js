import { ADD_TO_CART } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  //cart items mean what does user has selected how many items he selected
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload; //payload is the product we have put it in the cart
      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      ); //find the product in the cart

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item], //if item is not in the cart then add it to the cart
        };
      }

    default:
      return state;
  }
};
