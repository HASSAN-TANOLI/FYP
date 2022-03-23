import{
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS
} from '../constants/userConstants';

export const authReducer = (state = {user: {}}, action) => {  //storing user  in state
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
          loading: true,
          isAuthenticatedUser: false, 
          
      }

    case LOGIN_SUCCESS:
      return {
          ...state,
          loading: false,
          isAuthenticatedUser: true,
          user: action.payload
      }

    case LOGIN_FAIL:
      return {
          ...state,
          loading: false,
          isAuthenticatedUser: false,
          user: null,
          error: action.payload
      }

    case CLEAR_ERRORS:
      return {
          ...state,
          error: null
      }


    default:
      return state
  }
}