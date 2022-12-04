import {
    ADD_LIBRARY,
    DELETE_LIBRARY,
    GET_LIBRARY,
    LIST_LIBRARY,
    UPDATE_LIBRARY,
  } from '../action_types';
  
  const initialState = {
    data: null,
    isLoading: false,
    hasError: false
  }
  
  const classes = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case LIST_LIBRARY:
        return {
          ...state,
          ...payload,
        };
      case ADD_LIBRARY:
        return {
          ...state,
          ...payload,
        };
      case UPDATE_LIBRARY:
        return {
          ...state,
          ...payload,
        };
      case GET_LIBRARY:
        return {
          ...state,
          ...payload,
        };
      case DELETE_LIBRARY:
        return {
          ...state,
          ...payload,
        };
      default: return state;
    }
  }
  
  export default classes;