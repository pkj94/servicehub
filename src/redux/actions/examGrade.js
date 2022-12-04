import {
    LIST_EXAMGRADE,
    GET_EXAMGRADE,
    ADD_EXAMGRADE,
    UPDATE_EXAMGRADE,
    DELETE_EXAMGRADE,
  } from '../action_types';
  import axios from 'axios';
  // import { QS } from '../../utils/urlHelper';
  
  export const listExamgrade = (params, limit = 1000) => async dispatch => {
    // let queryString = QS(params)
    try {
      let res = await axios({
        method: 'GET',
        url: `/examGrade?limit=${limit}`,
        params
      });
      dispatch({
        type: LIST_EXAMGRADE,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: LIST_EXAMGRADE,
        payload: {
          data: [],
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  
  export const getExamgrade = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/examGrade/${id}`,
      });
      dispatch({
        type: GET_EXAMGRADE,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: GET_EXAMGRADE,
        payload: {
          data: {},
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  
  export const addExamgrade = (data) => async dispatch => {
    try {
      let res = await axios({
        method: 'POST',
        url: `/examGrade`,
        data
      });
      dispatch({
        type: ADD_EXAMGRADE,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: ADD_EXAMGRADE,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  
  export const updateExamgrade = (data, id) => async dispatch => {
    try {
      let res = await axios({
        method: 'PUT',
        url: `/examGrade/${id}`,
        data
      });
      dispatch({
        type: UPDATE_EXAMGRADE,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: UPDATE_EXAMGRADE,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  
  export const deleteExamgrade = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'DELETE',
        url: `/examGrade/${id}`,
      });
      dispatch({
        type: DELETE_EXAMGRADE,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_EXAMGRADE,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }