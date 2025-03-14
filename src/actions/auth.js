import axios from 'axios';
import {
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

// Load user
export const loadUser = () => async (dispath) => {
  if (localStorage.token) setAuthToken(localStorage.token);

  try {
    const res = await axios.get(`https://backend-8uet.onrender.com/auth`);
    
    dispath({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.lor(err)
    dispath({
      type: AUTH_ERROR,
    });
  }
};

// Register user
export const register =
  ({ firstname, lastname, email, organization, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ firstname, lastname, email, organization, password});

    try {
      const res = await axios.post(
        `https://backend-8uet.onrender.com/user`,
        body,
        config
      );

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      // Load user
      dispatch(loadUser());
    } catch (err) {
      console.log(err.response.data.errors[0].msg)
      // Get errors array sent by api
      if (err.response) {
        dispatch(setAlert('Server error', err.response.data.errors[0].msg));
      } else {
        const errors = err.response.data.errors;
        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
        }
      }

      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

// Login user
export const login = (email, password) => async (dispatch) => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });
  

  try {
    const res = await axios.post(
      `https://backend-8uet.onrender.com/auth`,
      body,
      config
    );
    console.log(res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    // Load user
    dispatch(loadUser());
  } catch (err) {
    // Get errors array sent by api
    if (!err.response) {
      dispatch(setAlert('Server error', 'error'));
    } else {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
      }
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Skip login
export const skipLogin = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = { email: 'test@test.com', password: '123456' };

  try {
    const res = await axios.post(
      `https://backend-8uet.onrender.com/auth`,
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    // Load user
    dispatch(loadUser());
  } catch (err) {
    // Get errors array sent by api
    if (!err.response) {
      dispatch(setAlert('Server error', 'error'));
    } else {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
      }
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};