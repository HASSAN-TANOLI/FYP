import axios from "axios";

import {
  LOGIN_VENDOR_REQUEST,
  LOGIN_VENDOR_SUCCESS,
  LOGIN_VENDOR_FAIL,
  CLEAR_ERRORS,
  REGISTER_VENDOR_REQUEST,
  REGISTER_VENDOR_SUCCESS,
  REGISTER_VENDOR_FAIL,
  LOAD_VENDOR_REQUEST,
  LOAD_VENDOR_SUCCESS,
  LOAD_VENDOR_FAIL,
  LOGOUT_VENDOR_SUCCESS,
  LOGOUT_VENDOR_FAIL,
} from "../constants/vendorConstants";

// Login
export const vendorLoginn = (vendoremail, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_VENDOR_REQUEST });

    const config = {
      //because we are sending post request
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/v1/loginvendor",
      { vendoremail, password },
      config
    );

    dispatch({
      type: LOGIN_VENDOR_SUCCESS,
      payload: data.vendor,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_VENDOR_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Register User
export const registerVendor = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_VENDOR_REQUEST });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      "/api/v1/registervendor",
      userData,
      config
    );

    dispatch({
      type: REGISTER_VENDOR_SUCCESS,
      payload: data.vendor,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_VENDOR_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const loadVendor = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_VENDOR_REQUEST });

    const { data } = await axios.get("/api/v1/vendor");

    dispatch({
      type: LOAD_VENDOR_SUCCESS,
      payload: data.vendor,
    });
  } catch (error) {
    dispatch({
      type: LOAD_VENDOR_FAIL,
      payload: error.response.data.message,
    });
  }
};

//LogoutUser
export const logoutVendor = () => async (dispatch) => {
  try {
    await axios.get("/api/v1/logoutvendor");

    dispatch({
      type: LOGOUT_VENDOR_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_VENDOR_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Clear Errors

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
