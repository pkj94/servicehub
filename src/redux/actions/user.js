import {
  LIST_USER,
  GET_USER,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  SET_CURRENT_USER
} from '../action_types';
import axios from 'axios';
// import { QS } from '../../utils/urlHelper';

export const listUsers = (params, limit = 1000) => async dispatch => {
  // let queryString = QS(params)
  try {
    let res = await axios({
      method: 'GET',
      url: `/user?limit=${limit}`,
      params
    });
    dispatch({
      type: LIST_USER,
      payload: {
        data: res.data.data,
        isLoading: false,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: LIST_USER,
      payload: {
        data: [],
        isLoading: false,
        hasError: true,
      }
    });
  }
}

export const getUser = (id) => async dispatch => {
  try {
    let res = await axios({
      method: 'GET',
      url: `/user/${id}`,
    });
    dispatch({
      type: GET_USER,
      payload: {
        data: res.data.data,
        isLoading: false,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: GET_USER,
      payload: {
        data: {},
        isLoading: false,
        hasError: true,
      }
    });
  }
}
export const me = (auth) => async dispatch => {
  try {
    let res = await axios({
      method: 'GET',
      url: `/user/${auth._id}`,
    });
    dispatch({
      type: SET_CURRENT_USER,
      payload: {
        data: { ...auth, ...res.data.data },
        isLoading: false,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: GET_USER,
      payload: {
        data: {},
        isLoading: false,
        hasError: true,
      }
    });
  }
}
export const addUser = (data) => async dispatch => {
  try {
    let res = await axios({
      method: 'POST',
      url: `/user`,
      data
    });
    dispatch({
      type: ADD_USER,
      payload: {
        data: res.data.data,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: ADD_USER,
      payload: {
        data: [],
        hasError: true,
      }
    });
  }
}

export const updateUser = (data, id) => async dispatch => {
  try {
    let res = await axios({
      method: 'PUT',
      url: `/user/${id}`,
      data
    });
    dispatch({
      type: UPDATE_USER,
      payload: {
        data: res.data.data,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: UPDATE_USER,
      payload: {
        data: {},
        hasError: true,
      }
    });
  }
}

export const deleteUser = (id) => async dispatch => {
  try {
    let res = await axios({
      method: 'DELETE',
      url: `/user/${id}`,
    });
    dispatch({
      type: DELETE_USER,
      payload: {
        data: res.data.data,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: DELETE_USER,
      payload: {
        data: {},
        hasError: true,
      }
    });
  }
}