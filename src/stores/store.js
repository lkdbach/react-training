import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';
import rootSagas from './middlewares';

export const history = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const getMiddleware = () => {
  return applyMiddleware(myRouterMiddleware, sagaMiddleware);
};

export default function configureStore() {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    composeWithDevTools(getMiddleware())
  )
  sagaMiddleware.run(rootSagas)
  return store;
}
