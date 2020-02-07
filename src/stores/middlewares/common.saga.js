import { call, put } from 'redux-saga/effects';
import * as API from './api';
import * as ActionTypes from '../actions';

const USER_URL = '/user';

export function* getUserInfo(action) {
  try {
    const response = yield call(API.get, {
      url: USER_URL,
      params: action.payload 
    });
    const {
      data: { user }
    } = response;
    yield put({ type: ActionTypes.GET_USER_INFO_SUCCESS, payload: user });
  } catch (error) {
    const {
      data: { errors }
    } = error.response;
    yield put({ type: ActionTypes.GET_USER_INFO_FAILURE, payload: errors });
  }
}

export function* saveSetting(action) {
  try {
    const response = yield call(API.put, {
      url: USER_URL,
      params: action.payload 
    });
    const {
      data: { user }
    } = response;
    yield put({ type: ActionTypes.SAVE_SETTING_SUCCESS, payload: user });
  } catch (error) {
    const {
      data: { errors }
    } = error.response;
    yield put({ type: ActionTypes.SAVE_SETTING_FAILURE, payload: errors });
  }
}
