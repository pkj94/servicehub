import {
  LIST_SCHOOL,
  GET_SCHOOL,
  ADD_SCHOOL,
  UPDATE_SCHOOL,
  DELETE_SCHOOL,
} from '../action_types';
import axios from 'axios';
// import { QS } from '../../utils/urlHelper';

export const listSchools = (params, limit = 1000) => async dispatch => {
  // let queryString = QS(params)
  try {
    let res = await axios({
      method: 'GET',
      url: `/school?limit=${limit}`,
      params
    });
    dispatch({
      type: LIST_SCHOOL,
      payload: {
        data: res.data.data,
        isLoading: false,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: LIST_SCHOOL,
      payload: {
        data: [],
        isLoading: false,
        hasError: true,
      }
    });
  }
}

export const getSchool = (id) => async dispatch => {
  try {
    let res = await axios({
      method: 'GET',
      url: `/school/${id}`,
    });
    dispatch({
      type: GET_SCHOOL,
      payload: {
        data: res.data.data,
        isLoading: false,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: GET_SCHOOL,
      payload: {
        data: {},
        isLoading: false,
        hasError: true,
      }
    });
  }
}

export const addSchool = (data) => async dispatch => {
  try {
    let res = await axios({
      method: 'POST',
      url: `/school`,
      data
    });
    dispatch({
      type: ADD_SCHOOL,
      payload: {
        data: res.data.data,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: ADD_SCHOOL,
      payload: {
        data: {},
        hasError: true,
      }
    });
  }
}

export const updateSchool = (data, id) => async dispatch => {
  try {
    let res = await axios({
      method: 'PUT',
      url: `/school/${id}`,
      data
    });
    dispatch({
      type: UPDATE_SCHOOL,
      payload: {
        data: res.data.data,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: UPDATE_SCHOOL,
      payload: {
        data: {},
        hasError: true,
      }
    });
  }
}

export const deleteSchool = (id) => async dispatch => {
  try {
    let res = await axios({
      method: 'DELETE',
      url: `/school/${id}`,
    });
    dispatch({
      type: DELETE_SCHOOL,
      payload: {
        data: res.data.data,
        hasError: false,
      }
    });
  } catch (err) {
    dispatch({
      type: DELETE_SCHOOL,
      payload: {
        data: {},
        hasError: true,
      }
    });
  }
}