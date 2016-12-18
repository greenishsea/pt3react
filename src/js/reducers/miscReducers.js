// import { combineReducers } from 'redux';
import * as initialState from './initialState';

export function serverData(state = initialState.serverData, action) {
  return state;
}

export function features(state = initialState.features, action) {
  return state;
}

export function shareTargets(state = initialState.shareTargets, action) {
  return state;
}

// TODO: to use combineReducers will be less dependency ( but i could not work well )
// export default combineReducers({
//   serverData,
//   features,
//   shareTargets
// });
