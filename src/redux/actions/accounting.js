import {
    LIST_ACCOUNTING,
    GET_ACCOUNTING,
    ADD_ACCOUNTING,
    UPDATE_ACCOUNTING,
    DELETE_ACCOUNTING,
  } from "../action_types";
  import axios from "axios";

  export const listAcconting =
  (params, limit = 1000) =>
  async (dispatch) => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/accounting?limit=${limit}`,
        params
      });
      dispatch({
        type: LIST_ACCOUNTING,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: LIST_ACCOUNTING,
        payload: {
          data: [],
          isLoading: false,
          hasError: true,
        }
      });
    }
  };

  export const getAccounting = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/accounting/${id}`,
      });
      dispatch({
        type: GET_ACCOUNTING,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: GET_ACCOUNTING,
        payload: {
          data: {},
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  export const addAccounting = (data) => async dispatch => {
    try {
      let res = await axios({
        method: 'POST',
        url: `/accounting`,
        data
      });
      dispatch({
        type: ADD_ACCOUNTING,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: ADD_ACCOUNTING,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  export const updateAccounting = (data, id) => async dispatch => {
    try {
      let res = await axios({
        method: 'PUT',
        url: `/accounting/${id}`,
        data
      });
      dispatch({
        type: UPDATE_ACCOUNTING,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: UPDATE_ACCOUNTING,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }

  export const deleteAccounting = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'DELETE',
        url: `/accounting/${id}`,
      });
      dispatch({
        type: DELETE_ACCOUNTING,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_ACCOUNTING,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
