import { combineReducers } from 'redux';
import { locations } from './locations';
import { auth } from './auth';
import { serverData, features, shareTargets } from './miscReducers';
// import miscReducers from './miscReducers';
// import { routerReducer } from 'react-router-redux'; // if want to react-router and redux, check usage of this.

const rootReducer = combineReducers({
  auth,
  locations,
  serverData, // ** miscReducers for SSR**
  features, // ** miscReducers **
  shareTargets, // ** miscReducers **
});

export default rootReducer;
