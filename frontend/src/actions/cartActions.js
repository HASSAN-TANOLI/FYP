import axios from "axios";
import { ADD_TO_CART } from "../constants/cartConstants";

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
  //getState is to get the current state

  const { data } = await axios.get(`/api/v1/product/${id}`); //get the product details from the api

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.stock,
      quantity,
    },
  });

  //saving data into the local storage beacuse if we reload the page we have to display the cart item which we will get from local storage

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
