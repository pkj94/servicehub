import {
    ADD_EXAMGRADE,
    LIST_EXAMGRADE,
    UPDATE_EXAMGRADE,
    DELETE_EXAMGRADE,
    GET_EXAMGRADE
  } from '../action_types';
  
  const initialState = {
    data: null,
    isLoading: false,
    hasError: false
  }
  
  const examg = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case LIST_EXAMGRADE:
        return {
          ...state,
          ...payload,
        };
      case ADD_EXAMGRADE:
        return {
          ...state,
          ...payload,
        };
      case UPDATE_EXAMGRADE:
        return {
          ...state,
          ...payload,
        };
      case GET_EXAMGRADE:
        return {
          ...state,
          ...payload,
        };
      case DELETE_EXAMGRADE:
        return {
          ...state,
          ...payload,
        };
      default: return state;
    }
  }
  
  export default examg;