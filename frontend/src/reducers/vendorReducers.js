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
  CLEAR_ERRORS,
} from "../constants/vendorConstants";

export const vendorReducer = (state = { vendor: {} }, action) => {
  switch (action.type) {
    case LOGIN_VENDOR_REQUEST:
    case REGISTER_VENDOR_REQUEST:
    case LOAD_VENDOR_REQUEST:
      return {
        loading: true,
        isAuthenticatedVendor: false,
      };

    case LOGIN_VENDOR_SUCCESS:
    case REGISTER_VENDOR_SUCCESS:
    case LOAD_VENDOR_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticatedVendor: true,
        vendor: action.payload,
      };

    case LOAD_VENDOR_FAIL:
      return {
        loading: false,
        isAuthenticatedVendor: false,
        vendor: null,
        error: action.payload,
      };

    case LOGIN_VENDOR_FAIL:
    case REGISTER_VENDOR_FAIL:
      return {
        ...state,
        loading: false,
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
