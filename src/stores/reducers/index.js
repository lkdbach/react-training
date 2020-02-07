import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import common from './common.reducer';
import auth from './auth.reducer';
import settings from './settings.reducer';
import editor from './editor.reducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    common,
    auth,
    settings,
    editor
  });

export default createRootReducer;
