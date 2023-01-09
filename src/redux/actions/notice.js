import {
  LIST_NOTICE,
  GET_NOTICE,
  ADD_NOTICE,
  UPDATE_NOTICE,
  DELETE_NOTICE,
} from "../action_types";
import axios from "axios";

export const listNotice =
  (params, limit = 1000) =>
  async (dispatch) => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/notice?limit=${limit}`,
        params
      });
      dispatch({
        type: LIST_NOTICE,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: LIST_NOTICE,
        payload: {
          data: [],
          isLoading: false,
          hasError: true,
        }
      });
    }
  };

  export const getNotice = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/notice/${id}`,
      });
      dispatch({
        type: GET_NOTICE,
        payload: {
          data: res.data.data,
          isLoading: false,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: GET_NOTICE,
        payload: {
          data: {},
          isLoading: false,
          hasError: true,
        }
      });
    }
  }

  export const addNotice = (data) => async dispatch => {
    try {
      let res = await axios({
        method: 'POST',
        url: `/notice`,
        data
      });
      dispatch({
        type: ADD_NOTICE,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: ADD_NOTICE,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }

  export const updateNotice = (data, id) => async dispatch => {
    try {
      let res = await axios({
        method: 'PUT',
        url: `/notice/${id}`,
        data
      });
      dispatch({
        type: UPDATE_NOTICE,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: UPDATE_NOTICE,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }

  export const deleteNotice = (id) => async dispatch => {
    try {
      let res = await axios({
        method: 'DELETE',
        url: `/notice/${id}`,
      });
      dispatch({
        type: DELETE_NOTICE,
        payload: {
          data: res.data.data,
          hasError: false,
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_NOTICE,
        payload: {
          data: {},
          hasError: true,
        }
      });
    }
  }
  
