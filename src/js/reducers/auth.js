import {
  AUTH_LOGIN_USER_REQUEST,
  AUTH_LOGIN_USER_SUCCESS,
  AUTH_LOGIN_USER_FAILURE,
  AUTH_LOGOUT_USER
} from '../actions';
import * as initialState from './initialState';

export function auth(state = initialState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_USER_REQUEST: {
      return Object.assign({}, state, {
          isAuthenticating: true,
          statusText: null
      });
    }
    case AUTH_LOGIN_USER_SUCCESS: {
      if (action.payload.hasError) {
        return Object.assign({}, state, {
            isAuthenticating: false,
            isAuthenticated: false,
            token: null,
            statusText: 'Authentication Error:'
        });
      } else {
        return Object.assign({}, state, {
            isAuthenticating: false,
            isAuthenticated: true,
            token: action.payload.token,
            statusText: 'You have been successfully logged in.'
        });
      }
    }
    case AUTH_LOGIN_USER_FAILURE: {
      return Object.assign({}, state, {
          isAuthenticating: false,
          isAuthenticated: false,
          token: null,
          userName: null,
          statusText: `Authentication Error:`
      });
    }
    case AUTH_LOGOUT_USER: {
      return Object.assign({}, state, {
          isAuthenticated: false,
          token: null,
          userName: null,
          statusText: 'You have been successfully logged out.'
      });
    }
    default: {
      return state;
    }
  }
}
