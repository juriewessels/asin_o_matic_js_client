import { combineReducers } from 'redux';

import app from './app';
import products from './products';

const rootReducer = combineReducers({ app, products });

export default rootReducer;
