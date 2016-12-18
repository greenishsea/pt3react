// import fetch from 'isomorphic-fetch'; // INFO: have not experimented
import 'whatwg-fetch';
// import { push } from 'react-router-redux';
import { API_VERSION } from '../constants/url';

export function getToken(payload) {
  const { userid, password } = payload;
  // return fetch('/api/obtain-auth-token/', {
  return fetch( API_VERSION + '/login/', { // rails devise
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // username: userid, // django-rest-framework authToken
      email: userid, // current rails setting
      password
    })
  })
  .then(res => res.json())
  .then(res => {
    if (res.token) {
      res.hasError = false;
      localStorage.token = res.token; // django-rest-framework authToken
    } else if (res.access_token) {
      res.hasError = false;
      res.token = res.access_token; // rails devise
      localStorage.token = res.token; // rails devise
    } else {
      res.hasError = true;
    }
    return { res };
  })
  .catch(error => { return { error }; });
}

// TODO: redirect has not been implemented. (after authencating)
//             dispatch(push(redirect));
