import { 
    SET_CURRENT_USER,
  } from '../action_types';
  
  const initialState = {
    data: null,
    isLoading: false,
    hasError: false
  }
  
  const auth = (state=initialState, action)  => {
    const { type, payload } = action;
  
    switch(type) {
      case SET_CURRENT_USER: 
        return {
          ...state,
          ...payload,
        };
      default: return state;
    }
  }
  
  export default auth;