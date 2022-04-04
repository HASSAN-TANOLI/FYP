import {
  LOGIN_VENDOR_REQUEST,
  LOGIN_VENDOR_SUCCESS,
  LOGIN_VENDOR_FAIL,
  CLEAR_ERRORS,
} from "../constants/vendorConstants";

export const vendorReducer = (state = { vendor: {} }, action) => {
  switch (action.type) {
    case LOGIN_VENDOR_REQUEST:
      return {
        loading: true,
        isAuthenticatedVendor: false,
      };

    case LOGIN_VENDOR_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticatedVendor: true,
        user: action.payload,
      };

    case LOGIN_VENDOR_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticatedVendor: false,
        user: null,
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
