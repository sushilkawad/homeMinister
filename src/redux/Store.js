import {createStore, applyMiddleware, compose} from 'redux';
import Middleware from 'redux-thunk';
import logger from 'redux-logger';
import Reducer from './Reducer';

const middlewares = [Middleware];
middlewares.push(logger);

const middleware = applyMiddleware(...middlewares);
const enhancers = [middleware];

export default createStore(Reducer, compose(...enhancers));
