import {
  ADD_CLASS,
  DELETE_CLASS,
  GET_CLASS,
  LIST_CLASS,
  UPDATE_CLASS,
} from '../action_types';

const initialState = {
  data: null,
  isLoading: false,
  hasError: false
}

const classes = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_CLASS:
      return {
        ...state,
        ...payload,
      };
    case ADD_CLASS:
      return {
        ...state,
        ...payload,
      };
    case UPDATE_CLASS:
      return {
        ...state,
        ...payload,
      };
    case GET_CLASS:
      return {
        ...state,
        ...payload,
      };
    case DELETE_CLASS:
      return {
        ...state,
        ...payload,
      };
    default: return state;
  }
}

export default classes;