import {
    ADD_ACCOUNTING,
    DELETE_ACCOUNTING,
    GET_ACCOUNTING,
    LIST_ACCOUNTING,
    UPDATE_ACCOUNTING,
  } from '../action_types';
  
  const initialState = {
    data: null,
    isLoading: false,
    hasError: false
  }
  
  const classes = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case LIST_ACCOUNTING:
        return {
          ...state,
          ...payload,
        };
      case ADD_ACCOUNTING:
        return {
          ...state,
          ...payload,
        };
      case UPDATE_ACCOUNTING:
        return {
          ...state,
          ...payload,
        };
      case GET_ACCOUNTING:
        return {
          ...state,
          ...payload,
        };
      case DELETE_ACCOUNTING:
        return {
          ...state,
          ...payload,
        };
      default: return state;
    }
  }
  
  export default classes;