import {
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAILURE,
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE,
} from '../actions';

const initState = {
  inProgress: false,
  errors: null,
  article: {
    articleSlug: '',
    title: '',
    description: '',
    body: '',
    tagInput: '',
    tagList: []
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_ARTICLE_REQUEST:
    case CREATE_ARTICLE_REQUEST:
      return {
        ...state,
        inProgress: true
      }
    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        inProgress: false
      }
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        inProgress: false,
        article: {
          ...action.payload,
          articleSlug: action.payload.slug,
          tagInput: ''
        }
      }
    case GET_ARTICLE_FAILURE:
    case CREATE_ARTICLE_FAILURE:
      return {
        ...state,
        inProgress: false,
        errors: action.payload
      };
    default:
      return state;
  }
};
