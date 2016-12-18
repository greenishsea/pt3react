// ------------------------------
// auth
// ------------------------------

export const AUTH_LOGIN_USER_REQUEST = 'AUTH_LOGIN_USER_REQUEST';
export function authLoginUserRequest(userid, password) {
  sessionStorage.removeItem('token');
  return {
    type: AUTH_LOGIN_USER_REQUEST,
    payload: {
      userid,
      password
    }
  };
}

export const AUTH_LOGIN_USER_SUCCESS = 'AUTH_LOGIN_USER_SUCCESS';
export function authLoginUserSuccess(payload) {
  return {
    type: AUTH_LOGIN_USER_SUCCESS,
    payload
  };
}

export const AUTH_LOGIN_USER_FAILURE = 'AUTH_LOGIN_USER_FAILURE';
export function authLoginUserFailure(error) {
  sessionStorage.removeItem('token');
  return {
    type: AUTH_LOGIN_USER_FAILURE,
    payload: {
      // TODO: show error message using below
      //  status: error.response.status,
      //  statusText: error.response.statusText
    }
  };
}

export const AUTH_LOGOUT_USER = 'AUTH_LOGOUT_USER';
export function authLogout() {
  sessionStorage.removeItem('token');
  return {
    type: AUTH_LOGOUT_USER
  };
}

// export function authLogoutAndRedirect() {
//   return(dispatch, state) => {
//     dispatch(authLogout());
//     dispatch(push('/login'));
//     return Promise.resolve(); // TOOD: we need  promise here because of tests, find a better way
//   };
// }
