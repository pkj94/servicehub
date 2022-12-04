import {
    LIST_STUDENT,
    GET_STUDENT,
    ADD_STUDENT,
    UPDATE_STUDENT,
    DELETE_STUDENT,
  } from '../action_types';
  import axios from 'axios';
  // import { QS } from '../../utils/urlHelper';
  
  export const listStudents = (params, limit = 1000) => async dispatch => {
    // let queryString = QS(params)
    try {
      let res = await axios({
        method: 'GET',
        url: `/student?limit=${limit}`,
        params
      });
      dispatch({
        type: LIST_STUDENT,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: LIST_STUDENT,
        payload: {
          data: [],
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  
  export const getStudent = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/student/${id}`,
      });
      dispatch({
        type: GET_STUDENT,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: GET_STUDENT,
        payload: {
          data: {},
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  
  export const addStudent = (data) => async dispatch => {
    try {
      let res = await axios({
        method: 'POST',
        url: `/student`,
        data
      });
      dispatch({
        type: ADD_STUDENT,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: ADD_STUDENT,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  
  export const updateStudent = (data, id) => async dispatch => {
    try {
      let res = await axios({
        method: 'PUT',
        url: `/student/${id}`,
        data
      });
      dispatch({
        type: UPDATE_STUDENT,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: UPDATE_STUDENT,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  
  export const deleteStudent = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'DELETE',
        url: `/student/${id}`,
      });
      dispatch({
        type: DELETE_STUDENT,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_STUDENT,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }