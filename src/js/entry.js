import 'babel-polyfill';
import '../styles/index.scss'; // webpack needs this style src entry reference.

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, browserHistory, Router } from 'react-router';
import { useScroll } from 'react-router-scroll';
import configureStore from './store/configureStore';
import routes from './routes';


// A. client side rendering
// ** INFO **
// you can pass very initialState to configureStore exec below.
// initialState would be get to fetch, read json, from browser storage, etc.
render(
  <Provider store={configureStore()}>
    <Router history={browserHistory} routes={routes} render={applyRouterMiddleware(useScroll())} />
  </Provider>,
  document.getElementById('app')
);


// // B. server side rendering with hypernova
// // ** INFO **
// // initialState automatically will pass configureStore in renderReactRedux,
// // if you put rails view's render_react_component func's second argument.
// import { renderReactRedux } from 'hypernova-react-redux';
// module.exports = renderReactRedux(
//   'app-ssr.js',
//   <Router history={browserHistory} routes={routes} render={applyRouterMiddleware(useScroll())} />,
//   configureStore
// );
