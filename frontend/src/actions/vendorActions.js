import axios from 'axios';

import{
  LOGIN_VENDOR_REQUEST,
  LOGIN_VENDOR_SUCCESS,
  LOGIN_VENDOR_FAIL,
  CLEAR_ERRORS
} from '../constants/userConstants';


// Login
export const login = (vendoremail, password) => async (dispatch) => {
  try {

      dispatch({ type: LOGIN_VENDOR_REQUEST })

      const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      }

      const { data } = await axios.post('/api/v1/loginvendor', { vendoremail, password }, config)

      dispatch({
          type: LOGIN_VENDOR_SUCCESS,
          payload: data.user
      })

  } catch (error) {
      dispatch({
          type: LOGIN_VENDOR_FAIL,
          payload: error.response.data.message
      })
  }
}

//Clear Errors

export const clearErrors = () => async (dispatch) => {

  dispatch({
    type: CLEAR_ERRORS 
  })

}

