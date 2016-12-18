import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import rootSaga from '../logic/sagas/saga';
import init from './init';

const sagaMiddleware = createSagaMiddleware();
const middleware = [ sagaMiddleware, thunk ];

// Optional :if want to save data on browser local/session storage
// const savedState = ('sessionStorage' in window && window.sessionStorage !== null) ?
//                     sessionStorage.getItem('something') : {};
const savedState = {};

export default function configureStore(preloadedState) {

  const store = createStore(
    rootReducer,
    {...preloadedState, ...savedState},
    applyMiddleware(...middleware)
  );

  // setup saga
  sagaMiddleware.run(rootSaga);

  // init action
  init(store);

  return store;
};
