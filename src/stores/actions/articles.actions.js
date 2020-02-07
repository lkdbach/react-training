export const GET_ARTICLES_REQUEST = 'GET_ARTICLES_REQUEST';
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_FAILURE = 'GET_ARTICLES_FAILURE';
export const getArticles = data => ({
  type: GET_ARTICLES_REQUEST,
  payload: data
});

export const GET_ARTICLES_BY_AUTHOR_REQUEST = 'GET_ARTICLES_BY_AUTHOR_REQUEST';
export const GET_ARTICLES_BY_AUTHOR_SUCCESS = 'GET_ARTICLES_BY_AUTHOR_SUCCESS';
export const GET_ARTICLES_BY_AUTHOR_FAILURE = 'GET_ARTICLES_BY_AUTHOR_FAILURE';
export const getArticlesByAuthor = data => ({
  type: GET_ARTICLES_BY_AUTHOR_REQUEST,
  payload: data
});

export const GET_ARTICLES_BY_TAG_REQUEST = 'GET_ARTICLES_BY_TAG_REQUEST';
export const GET_ARTICLES_BY_TAG_SUCCESS = 'GET_ARTICLES_BY_TAG_SUCCESS';
export const GET_ARTICLES_BY_TAG_FAILURE = 'GET_ARTICLES_BY_TAG_FAILURE';
export const getArticlesByTag = data => ({
  type: GET_ARTICLES_BY_TAG_REQUEST,
  payload: data
});

export const FAVORITE_ARTICLE_REQUEST = 'FAVORITE_ARTICLE_REQUEST';
export const FAVORITE_ARTICLE_SUCCESS = 'FAVORITE_ARTICLE_SUCCESS';
export const FAVORITE_ARTICLE_FAILURE = 'FAVORITE_ARTICLE_FAILURE';
export const favoriteArticle = data => ({
  type: FAVORITE_ARTICLE_REQUEST,
  payload: data
});

export const UNFAVORITE_ARTICLE_REQUEST = 'UNFAVORITE_ARTICLE_REQUEST';
export const UNFAVORITE_ARTICLE_SUCCESS = 'UNFAVORITE_ARTICLE_SUCCESS';
export const UNFAVORITE_ARTICLE_FAILURE = 'UNFAVORITE_ARTICLE_FAILURE';
export const unfavoriteArticle = data => ({
  type: UNFAVORITE_ARTICLE_REQUEST,
  payload: data
});

export const GET_ARTICLES_FAVORITED_BY_REQUEST = 'GET_ARTICLES_FAVORITED_BY_REQUEST';
export const GET_ARTICLES_FAVORITED_BY_SUCCESS = 'GET_ARTICLES_FAVORITED_BY_SUCCESS';
export const GET_ARTICLES_FAVORITED_BY_FAILURE = 'GET_ARTICLES_FAVORITED_BY_FAILURE';
export const getArticlesFavoritedBy = data => ({
  type: GET_ARTICLES_FAVORITED_BY_REQUEST,
  payload: data
});

export const GET_ARTICLE_REQUEST = 'GET_ARTICLE_REQUEST';
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS';
export const GET_ARTICLE_FAILURE = 'GET_ARTICLE_FAILURE';
export const getArticle = data => ({
  type: GET_ARTICLE_REQUEST,
  payload: data
});

export const UPDATE_ARTICLE_REQUEST = 'UPDATE_ARTICLE_REQUEST';
export const UPDATE_ARTICLE_SUCCESS = 'UPDATE_ARTICLE_SUCCESS';
export const UPDATE_ARTICLE_FAILURE = 'UPDATE_ARTICLE_FAILURE';
export const updateArticle = data => ({
  type: UPDATE_ARTICLE_REQUEST,
  payload: data
});

export const CREATE_ARTICLE_REQUEST = 'CREATE_ARTICLE_REQUEST';
export const CREATE_ARTICLE_SUCCESS = 'CREATE_ARTICLE_SUCCESS';
export const CREATE_ARTICLE_FAILURE = 'CREATE_ARTICLE_FAILURE';
export const createArticle = data => ({
  type: CREATE_ARTICLE_REQUEST,
  payload: data
});

export const DELETE_ARTICLE_REQUEST = 'DELETE_ARTICLE_REQUEST';
export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS';
export const DELETE_ARTICLE_FAILURE = 'DELETE_ARTICLE_FAILURE';
export const deleteArticle = data => ({
  type: DELETE_ARTICLE_REQUEST,
  payload: data
});

export const GET_ARTICLE_FEED_REQUEST = 'GET_ARTICLE_FEED_REQUEST';
export const GET_ARTICLE_FEED_SUCCESS = 'GET_ARTICLE_FEED_SUCCESS';
export const GET_ARTICLE_FEED_FAILURE = 'GET_ARTICLE_FEED_FAILURE';
export const getArticleFeed = () => ({
  type: GET_ARTICLE_FEED_REQUEST
});
