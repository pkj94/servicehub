import {
    LIST_PARENT,
    GET_PARENT,
    ADD_PARENT,
    UPDATE_PARENT,
    DELETE_PARENT,
  } from '../action_types';
  import axios from 'axios';
  // import { QS } from '../../utils/urlHelper';
  
  export const listParents = (params, limit = 1000) => async dispatch => {
    // let queryString = QS(params)
    try {
      let res = await axios({
        method: 'GET',
        url: `/parent?limit=${limit}`,
        params
      });
      dispatch({
        type: LIST_PARENT,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: LIST_PARENT,
        payload: {
          data: [],
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  
  export const getParent = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/parent/${id}`,
      });
      dispatch({
        type: GET_PARENT,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: GET_PARENT,
        payload: {
          data: {},
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  
  export const addParent = (data) => async dispatch => {
    try {
      let res = await axios({
        method: 'POST',
        url: `/parent`,
        data
      });
      dispatch({
        type: ADD_PARENT,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: ADD_PARENT,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  
  export const updateParent = (data, id) => async dispatch => {
    try {
      let res = await axios({
        method: 'PUT',
        url: `/parent/${id}`,
        data
      });
      dispatch({
        type: UPDATE_PARENT,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: UPDATE_PARENT,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  
  export const deleteParent = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'DELETE',
        url: `/parent/${id}`,
      });
      dispatch({
        type: DELETE_PARENT,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_PARENT,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }