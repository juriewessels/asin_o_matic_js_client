import { createStore, applyMiddleware } from 'redux';

import thunnkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import rootReducer from './reducers/root';

const defaultState = {
  app: { isLoading: false, displayMessage: false },
  products: []
};

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunnkMiddleware, loggerMiddleware)
);

export default store;
