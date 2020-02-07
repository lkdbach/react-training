import {
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  REGISTER_REQUEST
} from '../actions';

const initState = {
  inProgress: false,
  errors: null
};

export default (state = initState, action) => {
  const { payload } = action;
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return {
        ...state,
        inProgress: true
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        inProgress: false,
        errors: payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        inProgress: false,
        errors: null
      };
    default:
      return state;
  }
};
