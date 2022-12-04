import {
  ADD_SCHOOL,
  DELETE_SCHOOL,
  GET_SCHOOL,
  LIST_SCHOOL,
  UPDATE_SCHOOL,
} from '../action_types';

const initialState = {
  data: null,
  isLoading: false,
  hasError: false
}

const school = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_SCHOOL:
      return {
        ...state,
        ...payload,
      };
    case ADD_SCHOOL:
      return {
        ...state,
        ...payload,
      };
    case UPDATE_SCHOOL:
      return {
        ...state,
        ...payload,
      };
    case GET_SCHOOL:
      return {
        ...state,
        ...payload,
      };
    case DELETE_SCHOOL:
      return {
        ...state,
        ...payload,
      };
    default: return state;
  }
}

export default school;