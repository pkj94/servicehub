import {
    ADD_TRANSPORT,
    DELETE_TRANSPORT,
    GET_TRANSPORT,
    LIST_TRANSPORT,
    UPDATE_TRANSPORT,
  } from '../action_types';
  
  const initialState = {
    data: null,
    isLoading: false,
    hasError: false
  }
  
  const classes = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case LIST_TRANSPORT:
        return {
          ...state,
          ...payload,
        };
      case ADD_TRANSPORT:
        return {
          ...state,
          ...payload,
        };
      case UPDATE_TRANSPORT:
        return {
          ...state,
          ...payload,
        };
      case GET_TRANSPORT:
        return {
          ...state,
          ...payload,
        };
      case DELETE_TRANSPORT:
        return {
          ...state,
          ...payload,
        };
      default: return state;
    }
  }
  
  export default classes;