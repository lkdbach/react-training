import { call, put } from 'redux-saga/effects';
import * as API from './api';
import * as ActionTypes from '../actions';

const LOGIN_URL = '/users/login';
const REGISTER_URL = '/users';

export function* login(action) {
  try {
    const response = yield call(API.post, { url: LOGIN_URL, params: action.payload });
    const {
      data: { user }
    } = response;
    yield put({ type: ActionTypes.LOGIN_SUCCESS, payload: user });
    yield API.setToken(user.token);
    yield put(ActionTypes.getUserInfo());
    yield window.localStorage.setItem('jwt', user.token);
  } catch (error) {
    const {
      data: { errors }
    } = error.response;
    yield put({ type: ActionTypes.LOGIN_FAILURE, payload: errors });
  }
}

export function* logout() {
  try {
    yield window.localStorage.removeItem('jwt');
  } catch (error) {
    console.log(error);
  }
}

export function* register(action) {
  try {
    const response = yield call(API.post, { url: REGISTER_URL, params: action.payload });
    const {
      data: { user }
    } = response;
    yield put({ type: ActionTypes.REGISTER_SUCCESS, payload: user });
    yield API.setToken(user.token);
    yield put(ActionTypes.getUserInfo());
    yield window.localStorage.setItem('jwt', user.token);
  } catch (error) {
    const {
      data: { errors }
    } = error.response;
    yield put({ type: ActionTypes.REGISTER_FAILURE, payload: errors });
  }
}
