import {
    ADD_HOSTEL,
    DELETE_HOSTEL,
    GET_HOSTEL,
    LIST_HOSTEL,
    UPDATE_HOSTEL,
  } from '../action_types';
  
  const initialState = {
    data: null,
    isLoading: false,
    hasError: false
  }
  
  const classes = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case LIST_HOSTEL:
        return {
          ...state,
          ...payload,
        };
      case ADD_HOSTEL:
        return {
          ...state,
          ...payload,
        };
      case UPDATE_HOSTEL:
        return {
          ...state,
          ...payload,
        };
      case GET_HOSTEL:
        return {
          ...state,
          ...payload,
        };
      case DELETE_HOSTEL:
        return {
          ...state,
          ...payload,
        };
      default: return state;
    }
  }
  
  export default classes;