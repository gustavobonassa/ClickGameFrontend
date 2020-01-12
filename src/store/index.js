
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import history from '../routes/history';

import reducers from './ducks';
import sagas from './sagas';


const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];


const composer = compose(applyMiddleware(...middlewares));

const store = createStore(reducers(history), composer);

sagaMiddleware.run(sagas);

export default store;
