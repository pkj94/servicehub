import {
    ADD_STUDENT,
    LIST_STUDENT,
  } from '../action_types';
  
  const initialState = {
    data: null,
    isLoading: false,
    hasError: false
  }
  
  const student = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case LIST_STUDENT:
        return {
          ...state,
          ...payload,
        };
      case ADD_STUDENT:
        return {
          ...state,
          ...payload,
        };
      default: return state;
    }
  }
  
  export default student;