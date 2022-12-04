import {
    LIST_HOSTEL,
    GET_HOSTEL,
    ADD_HOSTEL,
    UPDATE_HOSTEL,
    DELETE_HOSTEL,
  } from "../action_types";
  import axios from "axios";

  export const listHostel =
  (params, limit = 1000) =>
  async (dispatch) => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/hostel?limit=${limit}`,
        params
      });
      dispatch({
        type: LIST_HOSTEL,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: LIST_HOSTEL,
        payload: {
          data: [],
          isLoading: false,
          hasError: true,
        }
      });
    }
  };

  export const getHostel = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/hostel/${id}`,
      });
      dispatch({
        type: GET_HOSTEL,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: GET_HOSTEL,
        payload: {
          data: {},
          isLoading: false,
          hasError: true,
        }
      });
    }
  }
  export const addHostel = (data) => async dispatch => {
    try {
      let res = await axios({
        method: 'POST',
        url: `/hostel`,
        data
      });
      dispatch({
        type: ADD_HOSTEL,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: ADD_HOSTEL,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  export const updateHostel = (data, id) => async dispatch => {
    try {
      let res = await axios({
        method: 'PUT',
        url: `/hostel/${id}`,
        data
      });
      dispatch({
        type: UPDATE_HOSTEL,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: UPDATE_HOSTEL,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }

  export const deleteHostel = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'DELETE',
        url: `/hostel/${id}`,
      });
      dispatch({
        type: DELETE_HOSTEL,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_HOSTEL,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
