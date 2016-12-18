import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import rootSaga from '../logic/sagas/saga';
import init from './init';

const logger = createLogger({
  // Ignore `CHANGE_FORM` actions in the logger, since they fire after every keystroke
  predicate: (getState, action) => action.type !== 'CHANGE_FORM'
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [ sagaMiddleware, thunk, logger ];

// Optional :if want to save data on browser local/session storage
// const savedState = ('sessionStorage' in window && window.sessionStorage !== null) ?
//                     sessionStorage.getItem('something') : {};
const savedState = {};

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    {...preloadedState, ...savedState},
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f // for Redux dev tools
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  // setup saga
  sagaMiddleware.run(rootSaga);

  // init action
  init(store);

  return store;
};
