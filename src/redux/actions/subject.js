import {
  LIST_SUBJECT,
  GET_SUBJECT,
  ADD_SUBJECT,
  UPDATE_SUBJECT,
  DELETE_SUBJECT,
} from '../action_types';
import axios from 'axios';
// import { QS } from '../../utils/urlHelper';

export const listSubjects = (params, limit = 1000) => async dispatch => {
  // let queryString = QS(params)
  try {
    let res = await axios({
      method: 'GET',
      url: `/subject?limit=${limit}`,
      params
    });
    dispatch({
      type: LIST_SUBJECT,
      payload: {
        data: res.data.data,
        isLoading: false,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: LIST_SUBJECT,
      payload: {
        data: [],
        isLoading: false,
        hasError: true,
      }
    });
  }
}

export const getSubject = (id) => async dispatch => {
  try {
    let res = await axios({
      method: 'GET',
      url: `/subject/${id}`,
    });
    dispatch({
      type: GET_SUBJECT,
      payload: {
        data: res.data.data,
        isLoading: false,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: GET_SUBJECT,
      payload: {
        data: {},
        isLoading: false,
        hasError: true,
      }
    });
  }
}

export const addSubject = (data) => async dispatch => {
  try {
    let res = await axios({
      method: 'POST',
      url: `/subject`,
      data
    });
    dispatch({
      type: ADD_SUBJECT,
      payload: {
        data: res.data.data,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: ADD_SUBJECT,
      payload: {
        data: [],
        hasError: true,
      }
    });
  }
}

export const updateSubject = (data, id) => async dispatch => {
  try {
    let res = await axios({
      method: 'PUT',
      url: `/subject/${id}`,
      data
    });
    dispatch({
      type: UPDATE_SUBJECT,
      payload: {
        data: res.data.data,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: UPDATE_SUBJECT,
      payload: {
        data: {},
        hasError: true,
      }
    });
  }
}

export const deleteSubject = (id) => async dispatch => {
  try {
    let res = await axios({
      method: 'DELETE',
      url: `/subject/${id}`,
    });
    dispatch({
      type: DELETE_SUBJECT,
      payload: {
        data: res.data.data,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: DELETE_SUBJECT,
      payload: {
        data: {},
        hasError: true,
      }
    });
  }
}