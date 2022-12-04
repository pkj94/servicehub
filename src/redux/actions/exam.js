import {
    LIST_EXAM,
    GET_EXAM,
    ADD_EXAM,
    UPDATE_EXAM,
    DELETE_EXAM,
  } from '../action_types';
  import axios from 'axios';
  // import { QS } from '../../utils/urlHelper';
  
  export const listExam = (params, limit = 1000) => async dispatch => {
    // let queryString = QS(params)
    try {
      let res = await axios({
        method: 'GET',
        url: `/exam?limit=${limit}`,
        params
      });
      dispatch({
        type: LIST_EXAM,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: LIST_EXAM,
        payload: {
          data: [],
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  
  export const getExam = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/exam/${id}`,
      });
      dispatch({
        type: GET_EXAM,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: GET_EXAM,
        payload: {
          data: {},
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  
  export const addExam = (data) => async dispatch => {
    try {
      let res = await axios({
        method: 'POST',
        url: `/exam`,
        data
      });
      dispatch({
        type: ADD_EXAM,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: ADD_EXAM,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  
  export const updateExam = (data, id) => async dispatch => {
    try {
      let res = await axios({
        method: 'PUT',
        url: `/exam/${id}`,
        data
      });
      dispatch({
        type: UPDATE_EXAM,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: UPDATE_EXAM,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  
  export const deleteExam = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'DELETE',
        url: `/exam/${id}`,
      });
      dispatch({
        type: DELETE_EXAM,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_EXAM,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }