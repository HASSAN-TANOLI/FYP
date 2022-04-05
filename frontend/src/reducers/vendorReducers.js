import {
  LOGIN_VENDOR_REQUEST,
  LOGIN_VENDOR_SUCCESS,
  LOGIN_VENDOR_FAIL,
  REGISTER_VENDOR_REQUEST,
  REGISTER_VENDOR_SUCCESS,
  REGISTER_VENDOR_FAIL,
  LOAD_VENDOR_REQUEST,
  LOAD_VENDOR_SUCCESS,
  LOAD_VENDOR_FAIL,
  LOGOUT_VENDOR_SUCCESS,
  LOGOUT_VENDOR_FAIL,
  CLEAR_ERRORS,
} from "../constants/vendorConstants";

export const vendorReducer = (state = { vendor: {} }, action) => {
  switch (action.type) {
    case LOGIN_VENDOR_REQUEST:
    case REGISTER_VENDOR_REQUEST:
    case LOAD_VENDOR_REQUEST:
      return {
        loadingg: true,
        isAuthenticatedVendor: false,
      };

    case LOGIN_VENDOR_SUCCESS:
    case REGISTER_VENDOR_SUCCESS:
    case LOAD_VENDOR_SUCCESS:
      return {
        ...state,
        loadingg: false,
        isAuthenticatedVendor: true,
        vendor: action.payload,
      };

    case LOGOUT_VENDOR_SUCCESS:
      return {
        loadingg: false,
        isAuthenticatedVendor: false,
        vendor: null,
      };

    case LOAD_VENDOR_FAIL:
      return {
        loadingg: false,
        isAuthenticatedVendor: false,
        vendor: null,
        error: action.payload,
      };

    case LOGOUT_VENDOR_FAIL:
      return {
        ...state,
        erroe: action.payload,
      };

    case LOGIN_VENDOR_FAIL:
    case REGISTER_VENDOR_FAIL:
      return {
        ...state,
        loadingg: false,
        isAuthenticatedVendor: false,
        vendor: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
