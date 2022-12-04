import {
    ADD_EXAM,
    LIST_EXAM,
    UPDATE_EXAM,
    DELETE_EXAM,
    GET_EXAM
  } from '../action_types';
  
  const initialState = {
    data: null,
    isLoading: false,
    hasError: false
  }
  
  const exam = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case LIST_EXAM:
        return {
          ...state,
          ...payload,
        };
      case ADD_EXAM:
        return {
          ...state,
          ...payload,
        };
      case UPDATE_EXAM:
        return {
          ...state,
          ...payload,
        };
      case GET_EXAM:
        return {
          ...state,
          ...payload,
        };
      case DELETE_EXAM:
        return {
          ...state,
          ...payload,
        };
      default: return state;
    }
  }
  
  export default exam;