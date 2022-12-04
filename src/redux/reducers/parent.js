import {
  ADD_PARENT,
  DELETE_PARENT,
  GET_PARENT,
  LIST_PARENT,
  UPDATE_PARENT,
} from '../action_types';

const initialState = {
  data: null,
  isLoading: false,
  hasError: false
}

const parent = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_PARENT:
      return {
        ...state,
        ...payload,
      };
    case ADD_PARENT:
      return {
        ...state,
        ...payload,
      };
    case GET_PARENT:
      return {
        ...state,
        ...payload,
      };
    case UPDATE_PARENT:
      return {
        ...state,
        ...payload,
      };
    case DELETE_PARENT:
      return {
        ...state,
        ...payload,
      };

    default: return state;
  }
}

export default parent;