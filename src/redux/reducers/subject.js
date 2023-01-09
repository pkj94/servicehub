import {
  ADD_SUBJECT,
  DELETE_SUBJECT,
  GET_SUBJECT,
  LIST_SUBJECT,
  UPDATE_SUBJECT,
} from '../action_types';

const initialState = {
  data: null,
  isLoading: false,
  hasError: false
}

const subject = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_SUBJECT:
      return {
        ...state,
        ...payload,
      };
    case ADD_SUBJECT:
      return {
        ...state,
        ...payload,
      };
    case UPDATE_SUBJECT:
      return {
        ...state,
        ...payload,
      };
    case GET_SUBJECT:
      return {
        ...state,
        ...payload,
      };
    case DELETE_SUBJECT:
      return {
        ...state,
        ...payload,
      };
    default: return state;
  }
}

export default subject;