import {
    LIST_TRANSPORT,
    GET_TRANSPORT,
    ADD_TRANSPORT,
    UPDATE_TRANSPORT,
    DELETE_TRANSPORT,
  } from "../action_types";
  import axios from "axios";

  export const listTransport =
  (params, limit = 1000) =>
  async (dispatch) => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/transport?limit=${limit}`,
        params
      });
      dispatch({
        type: LIST_TRANSPORT,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: LIST_TRANSPORT,
        payload: {
          data: [],
          isLoading: false,
          hasError: true,
        }
      });
    }
  };

  export const getTransport = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/transport/${id}`,
      });
      dispatch({
        type: GET_TRANSPORT,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: GET_TRANSPORT,
        payload: {
          data: {},
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  export const addTransport = (data) => async dispatch => {
    try {
      let res = await axios({
        method: 'POST',
        url: `/transport`,
        data
      });
      dispatch({
        type: ADD_TRANSPORT,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: ADD_TRANSPORT,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  export const updateTransport = (data, id) => async dispatch => {
    try {
      let res = await axios({
        method: 'PUT',
        url: `/transport/${id}`,
        data
      });
      dispatch({
        type: UPDATE_TRANSPORT,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: UPDATE_TRANSPORT,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }

  export const deleteTransport = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'DELETE',
        url: `/transport/${id}`,
      });
      dispatch({
        type: DELETE_TRANSPORT,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_TRANSPORT,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
