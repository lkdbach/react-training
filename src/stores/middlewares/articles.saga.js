import { call, put } from 'redux-saga/effects';
import * as API from './api';
import * as ActionTypes from '../actions';

const ARTICLES_URL = '/articles';

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = article => ({ ...article, slug: undefined });

export function* getArticles(action) {
  try {
    const { payload } = action;
    const endpoint = `${ARTICLES_URL}?${limit(10, payload.page)}`;
    const response = yield call(API.get, { url: endpoint });
    const {
      data: { articles }
    } = response;
    yield put({ type: ActionTypes.GET_ARTICLES_SUCCESS, payload: articles });
  } catch (error) {
    const {
      data: { errors }
    } = error.response;
    yield put({ type: ActionTypes.GET_ARTICLES_FAILURE, payload: errors });
  }
}

export function* getArticlesByAuthor(action) {
  try {
    const { payload } = action;
    const endpoint = `${ARTICLES_URL}?author=${encodeURIComponent(payload.author)}&${limit(
      10,
      payload.page
    )}`;
    const response = yield call(API.get, { url: endpoint });
    const {
      data: { articles }
    } = response;
    yield put({ type: ActionTypes.GET_ARTICLES_BY_AUTHOR_SUCCESS, payload: articles });
  } catch (error) {
    const {
      data: { errors }
    } = error.response;
    yield put({ type: ActionTypes.GET_ARTICLES_BY_AUTHOR_FAILURE, payload: errors });
  }
}

export function* getArticlesByTag(action) {
  try {
    const { payload } = action;
    const endpoint = `${ARTICLES_URL}?tag=${encodeURIComponent(payload.tag)}&${limit(
      10,
      payload.page
    )}`;
    const response = yield call(API.get, { url: endpoint });
    const {
      data: { articles }
    } = response;
    yield put({ type: ActionTypes.GET_ARTICLES_BY_TAG_SUCCESS, payload: articles });
  } catch (error) {
    const {
      data: { errors }
    } = error.response;
    yield put({ type: ActionTypes.GET_ARTICLES_BY_TAG_FAILURE, payload: errors });
  }
}

export function* getArticlesFavoritedBy(action) {
  try {
    const { payload } = action;
    const endpoint = `${ARTICLES_URL}?favorited=${encodeURIComponent(payload.author)}&${limit(
      10,
      payload.page
    )}`;
    const response = yield call(API.get, { url: endpoint });
    const {
      data: { articles }
    } = response;
    yield put({ type: ActionTypes.GET_ARTICLES_FAVORITED_BY_SUCCESS, payload: articles });
  } catch (error) {
    const {
      data: { errors }
    } = error.response;
    yield put({ type: ActionTypes.GET_ARTICLES_FAVORITED_BY_FAILURE, payload: errors });
  }
}

export function* getArticleFeed() {
  try {
    const endpoint = `${ARTICLES_URL}/feed?limit=10&offset=0`;
    const response = yield call(API.get, { url: endpoint });
    const {
      data: { articles }
    } = response;
    yield put({ type: ActionTypes.GET_ARTICLE_FEED_SUCCESS, payload: articles });
  } catch (error) {
    const {
      data: { errors }
    } = error.response;
    yield put({ type: ActionTypes.GET_ARTICLE_FEED_FAILURE, payload: errors });
  }
}

export function* getArticle(action) {
  try {
    const { payload } = action;
    const endpoint = `${ARTICLES_URL}/${payload.slug}`;
    const response = yield call(API.get, { url: endpoint });
    const {
      data: { article }
    } = response;
    yield put({ type: ActionTypes.GET_ARTICLE_SUCCESS, payload: article });
  } catch (error) {
    const {
      data: { errors }
    } = error.response;
    yield put({ type: ActionTypes.GET_ARTICLE_FAILURE, payload: errors });
  }
}

export function* updateArticle(action) {
  try {
    const { payload } = action;
    const endpoint = `${ARTICLES_URL}/${payload.article.slug}`;
    const response = yield call(API.put, {
      url: endpoint,
      params: { article: omitSlug(payload.article) }
    });
    const {
      data: { article }
    } = response;
    yield put({ type: ActionTypes.UPDATE_ARTICLE_SUCCESS, payload: article });
  } catch (error) {
    const {
      data: { errors }
    } = error.response;
    yield put({ type: ActionTypes.UPDATE_ARTICLE_FAILURE, payload: errors });
  }
}

export function* createArticle(action) {
  try {
    const { payload } = action;
    const response = yield call(API.post, {
      url: ARTICLES_URL,
      params: { article: payload }
    });
    const {
      data: { article }
    } = response;
    yield put({ type: ActionTypes.CREATE_ARTICLE_SUCCESS, payload: article });
  } catch (error) {
    const {
      data: { errors }
    } = error.response;
    yield put({ type: ActionTypes.CREATE_ARTICLE_FAILURE, payload: errors });
  }
}

export function* deleteArticle(action) {
  try {
    const { payload } = action;
    const endpoint = `${ARTICLES_URL}/${payload.slug}`;
    const response = yield call(API.del, {
      url: endpoint,
    });
    const {
      data: { article }
    } = response;
    yield put({ type: ActionTypes.DELETE_ARTICLE_SUCCESS, payload: article });
  } catch (error) {
    const {
      data: { errors }
    } = error.response;
    yield put({ type: ActionTypes.DELETE_ARTICLE_FAILURE, payload: errors });
  }
}

export function* favoriteArticle(action) {
  try {
    const { payload } = action;
    const endpoint = `${ARTICLES_URL}/${payload.slug}/favorite`;
    const response = yield call(API.post, {
      url: endpoint,
    });
    const {
      data: { article }
    } = response;
    yield put({ type: ActionTypes.FAVORITE_ARTICLE_SUCCESS, payload: article });
  } catch (error) {
    const {
      data: { errors }
    } = error.response;
    yield put({ type: ActionTypes.FAVORITE_ARTICLE_FAILURE, payload: errors });
  }
}

export function* unfavoriteArticle(action) {
  try {
    const { payload } = action;
    const endpoint = `${ARTICLES_URL}/${payload.slug}/favorite`;
    const response = yield call(API.del, {
      url: endpoint,
    });
    const {
      data: { article }
    } = response;
    yield put({ type: ActionTypes.UNFAVORITE_ARTICLE_SUCCESS, payload: article });
  } catch (error) {
    const {
      data: { errors }
    } = error.response;
    yield put({ type: ActionTypes.UNFAVORITE_ARTICLE_FAILURE, payload: errors });
  }
}
