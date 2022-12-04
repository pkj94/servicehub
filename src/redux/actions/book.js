import {
    LIST_BOOK,
    GET_BOOK,
    ADD_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK,
  } from '../action_types';
  import axios from 'axios';
  // import { QS } from '../../utils/urlHelper';
  
  export const listBooks = (params, limit = 1000) => async dispatch => {
    // let queryString = QS(params)
    try {
      let res = await axios({
        method: 'GET',
        url: `/book?limit=${limit}`,
        params
      });
      dispatch({
        type: LIST_BOOK,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: LIST_BOOK,
        payload: {
          data: [],
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  
  export const getBook = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/book/${id}`,
      });
      dispatch({
        type: GET_BOOK,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: GET_BOOK,
        payload: {
          data: {},
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  
  export const addBook = (data) => async dispatch => {
    try {
      let res = await axios({
        method: 'POST',
        url: `/book`,
        data
      });
      dispatch({
        type: ADD_BOOK,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: ADD_BOOK,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  
  export const updateBook = (data, id) => async dispatch => {
    try {
      let res = await axios({
        method: 'PUT',
        url: `/book/${id}`,
        data
      });
      dispatch({
        type: UPDATE_BOOK,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: UPDATE_BOOK,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  
  export const deleteBook = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'DELETE',
        url: `/book/${id}`,
      });
      dispatch({
        type: DELETE_BOOK,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_BOOK,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }