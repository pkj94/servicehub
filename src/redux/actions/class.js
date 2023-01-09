import {
  LIST_CLASS,
  GET_CLASS,
  ADD_CLASS,
  UPDATE_CLASS,
  DELETE_CLASS,
} from '../action_types';
import axios from 'axios';
// import { QS } from '../../utils/urlHelper';

export const listClasses = (params, limit = 1000) => async dispatch => {
  // let queryString = QS(params)
  try {
    let res = await axios({
      method: 'GET',
      url: `/class?limit=${limit}`,
      params
    });
    dispatch({
      type: LIST_CLASS,
      payload: {
        data: res.data.data,
        isLoading: false,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: LIST_CLASS,
      payload: {
        data: [],
        isLoading: false,
        hasError: true,
      }
    });
  }
}

export const getClass = (id) => async dispatch => {
  try {
    let res = await axios({
      method: 'GET',
      url: `/class/${id}`,
    });
    dispatch({
      type: GET_CLASS,
      payload: {
        data: res.data.data,
        isLoading: false,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: GET_CLASS,
      payload: {
        data: {},
        isLoading: false,
        hasError: true,
      }
    });
  }
}

export const addClass = (data) => async dispatch => {
  try {
    let res = await axios({
      method: 'POST',
      url: `/class`,
      data
    });
    dispatch({
      type: ADD_CLASS,
      payload: {
        data: res.data.data,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: ADD_CLASS,
      payload: {
        data: [],
        hasError: true,
      }
    });
  }
}

export const updateClass = (data, id) => async dispatch => {
  try {
    let res = await axios({
      method: 'PUT',
      url: `/class/${id}`,
      data
    });
    dispatch({
      type: UPDATE_CLASS,
      payload: {
        data: res.data.data,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: UPDATE_CLASS,
      payload: {
        data: {},
        hasError: true,
      }
    });
  }
}

export const deleteClass = (id) => async dispatch => {
  try {
    let res = await axios({
      method: 'DELETE',
      url: `/class/${id}`,
    });
    dispatch({
      type: DELETE_CLASS,
      payload: {
        data: res.data.data,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: DELETE_CLASS,
      payload: {
        data: {},
        hasError: true,
      }
    });
  }
}