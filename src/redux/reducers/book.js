import {
  ADD_BOOK,
  GET_BOOK,
  LIST_BOOK,
  UPDATE_BOOK,
  } from '../action_types';
  
  const initialState = {
    data: null,
    isLoading: false,
    hasError: false
  }
  
  const book = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case LIST_BOOK:
        return {
          ...state,
          ...payload,
        };
        case GET_BOOK:
          return {
            ...state,
            ...payload,
          };
          case UPDATE_BOOK:
      return {
        ...state,
        ...payload,
      };
      case ADD_BOOK:
        return {
          ...state,
          ...payload,
        };
      default: return state;
    }
  }
  
  export default book;