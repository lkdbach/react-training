export const ARTICLE_SUBMITTED = 'ARTICLE_SUBMITTED';
export const SETTINGS_SAVED = 'SETTINGS_SAVED';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const EDITOR_PAGE_UNLOADED = 'EDITOR_PAGE_UNLOADED';
export const ARTICLE_PAGE_UNLOADED = 'ARTICLE_PAGE_UNLOADED';
export const HOME_PAGE_UNLOADED = 'HOME_PAGE_UNLOADED';
export const PROFILE_PAGE_UNLOADED = 'PROFILE_PAGE_UNLOADED';
export const PROFILE_FAVORITES_PAGE_UNLOADED = 'PROFILE_FAVORITES_PAGE_UNLOADED';
export const LOGIN_PAGE_UNLOADED = 'LOGIN_PAGE_UNLOADED';
export const REGISTER_PAGE_UNLOADED = 'REGISTER_PAGE_UNLOADED';

export const APP_LOAD = 'APP_LOAD';
export const onAppLoad = data => ({
  type: APP_LOAD,
  payload: data
});

export const REDIRECT = 'REDIRECT';
export const onRedirect = () => ({
  type: REDIRECT
});

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const login = data => ({
  type: LOGIN_REQUEST,
  payload: data
});

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const register = data => ({
  type: REGISTER_REQUEST,
  payload: data
});

export const RESET_AUTH_DATA = 'RESET_AUTH_DATA';
export const resetAuthData = () => ({
  type: RESET_AUTH_DATA
});

export const UPDATE_AUTH_DATA = 'UPDATE_AUTH_DATA';
export const updateAuthData = data => ({
  type: UPDATE_AUTH_DATA,
  payload: data
});

export const AUTO_LOGIN = 'AUTO_LOGIN';
export const autoLogin = token => ({
  type: AUTO_LOGIN,
  payload: token
});

export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';
export const getUserInfo = () => ({
  type: GET_USER_INFO_REQUEST
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT
});

export const SETTINGS_PAGE_UNLOADED = 'SETTINGS_PAGE_UNLOADED';
export const settingPageUnloaded = () => ({
  type: SETTINGS_PAGE_UNLOADED
});

export const SAVE_SETTING_REQUEST = 'SAVE_SETTING_REQUEST';
export const SAVE_SETTING_SUCCESS = 'SAVE_SETTING_SUCCESS';
export const SAVE_SETTING_FAILURE = 'SAVE_SETTING_FAILURE';
export const saveSetting = data => ({
  type: SAVE_SETTING_REQUEST,
  payload: data
});
