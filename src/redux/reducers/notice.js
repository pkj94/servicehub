import {
  ADD_NOTICE,
  DELETE_NOTICE,
  GET_NOTICE,
  LIST_NOTICE,
  UPDATE_NOTICE,
} from '../action_types';

const initialState = {
  data: null,
  isLoading: false,
  hasError: false
}

const classes = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_NOTICE:
      return {
        ...state,
        ...payload,
      };
    case ADD_NOTICE:
      return {
        ...state,
        ...payload,
      };
    case UPDATE_NOTICE:
      return {
        ...state,
        ...payload,
      };
    case GET_NOTICE:
      return {
        ...state,
        ...payload,
      };
    case DELETE_NOTICE:
      return {
        ...state,
        ...payload,
      };
    default: return state;
  }
}

export default classes;