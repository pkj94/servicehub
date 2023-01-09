import {
    LIST_LIBRARY,
    GET_LIBRARY,
    ADD_LIBRARY,
    UPDATE_LIBRARY,
    DELETE_LIBRARY,
  } from "../action_types";
  import axios from "axios";

  export const listLibrary =
  (params, limit = 1000) =>
  async (dispatch) => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/library?limit=${limit}`,
        params
      });
      dispatch({
        type: LIST_LIBRARY,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: LIST_LIBRARY,
        payload: {
          data: [],
          isLoading: false,
          hasError: true,
        }
      });
    }
  };

  export const getLibrary = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/library/${id}`,
      });
      dispatch({
        type: GET_LIBRARY,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: GET_LIBRARY,
        payload: {
          data: {},
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  export const addLibrary = (data) => async dispatch => {
    try {
      let res = await axios({
        method: 'POST',
        url: `/library`,
        data
      });
      dispatch({
        type: ADD_LIBRARY,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: ADD_LIBRARY,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  export const updateLibrary = (data, id) => async dispatch => {
    try {
      let res = await axios({
        method: 'PUT',
        url: `/library/${id}`,
        data
      });
      dispatch({
        type: UPDATE_LIBRARY,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: UPDATE_LIBRARY,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }

  export const deleteLibrary = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'DELETE',
        url: `/library/${id}`,
      });
      dispatch({
        type: DELETE_LIBRARY,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_LIBRARY,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
