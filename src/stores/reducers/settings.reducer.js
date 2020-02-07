import {
  SAVE_SETTING_SUCCESS,
  SAVE_SETTING_FAILURE,
  SAVE_SETTING_REQUEST,
} from '../actions';

const initState = {
  inProgress: false,
  errors: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case SAVE_SETTING_REQUEST:
      return {
        ...state,
        inProgress: true
      }
    case SAVE_SETTING_SUCCESS:
      return {
        ...state,
        inProgress: false
      }
    case SAVE_SETTING_FAILURE:
      return {
        ...state,
        inProgress: false,
        errors: action.payload
      };
    default:
      return state;
  }
};
