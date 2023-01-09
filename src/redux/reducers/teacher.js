import {
  ADD_TEACHER,
  DELETE_TEACHER,
  GET_TEACHER,
  LIST_TEACHER,
  UPDATE_TEACHER,
} from '../action_types';

const initialState = {
  data: null,
  isLoading: false,
  hasError: false
}

const teacher = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_TEACHER:
      return {
        ...state,
        ...payload,
      };
    case ADD_TEACHER:
      return {
        ...state,
        ...payload,
      };
    case UPDATE_TEACHER:
      return {
        ...state,
        ...payload,
      };
    case DELETE_TEACHER:
      return {
        ...state,
        ...payload,
      };
    case GET_TEACHER:
      return {
        ...state,
        ...payload,
      };
    default: return state;
  }
}

export default teacher;