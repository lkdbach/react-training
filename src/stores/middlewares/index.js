import { all, takeLatest } from 'redux-saga/effects';
import { login, register, logout } from './auth.saga';
import { getUserInfo, saveSetting } from './common.saga';
import { createArticle } from './articles.saga';
import * as ActionTypes from '../actions';

function* watchSources() {
    yield takeLatest(ActionTypes.LOGIN_REQUEST, login);
    yield takeLatest(ActionTypes.LOGOUT, logout);
    yield takeLatest(ActionTypes.REGISTER_REQUEST, register);
    yield takeLatest(ActionTypes.GET_USER_INFO_REQUEST, getUserInfo);
    yield takeLatest(ActionTypes.SAVE_SETTING_REQUEST, saveSetting);
    yield takeLatest(ActionTypes.CREATE_ARTICLE_REQUEST, createArticle);
}

export default function* rootSaga() {
    yield all([watchSources()])
}