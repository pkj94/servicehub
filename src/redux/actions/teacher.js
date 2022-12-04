import {
    LIST_TEACHER,
    GET_TEACHER,
    ADD_TEACHER,
    UPDATE_TEACHER,
    DELETE_TEACHER,
  } from '../action_types';
  import axios from 'axios';
  // import { QS } from '../../utils/urlHelper';
  
  export const listTeachers = (params, limit = 1000) => async dispatch => {
    // let queryString = QS(params)
    try {
      let res = await axios({
        method: 'GET',
        url: `/teacher?limit=${limit}`,
        params
      });
      dispatch({
        type: LIST_TEACHER,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: LIST_TEACHER,
        payload: {
          data: [],
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  
  export const getTeacher = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/teacher/${id}`,
      });
      dispatch({
        type: GET_TEACHER,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: GET_TEACHER,
        payload: {
          data: {},
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  
  export const addTeacher = (data) => async dispatch => {
    try {
      let res = await axios({
        method: 'POST',
        url: `/teacher`,
        data
      });
      dispatch({
        type: ADD_TEACHER,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: ADD_TEACHER,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  
  export const updateTeacher = (data, id) => async dispatch => {
    try {
      let res = await axios({
        method: 'PUT',
        url: `/teacher/${id}`,
        data
      });
      dispatch({
        type: UPDATE_TEACHER,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: UPDATE_TEACHER,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  
  export const deleteTeacher = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'DELETE',
        url: `/teacher/${id}`,
      });
      dispatch({
        type: DELETE_TEACHER,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_TEACHER,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }