import 'whatwg-fetch';
import { API_VERSION } from '../constants/url';
import _locations from './json/locations.json'; // mock data when not connecting server

export function getLocations() {
  return { res: _locations, error: null }; // return mock data when not connecting server
  // return fetch( API_VERSION + '/locations')
  //   .then(res => res.json())
  //   .then(res => { return { res }; })
  //   .catch(error => { return { error }; });
}


// TODO: request with authenticated header
// const option = {
//   headers: {
//       'Authorization': 'Token ' + localStorage.token // django rest f auth token
//       // 'Authorization': localStorage.token // rails devise?
//   },
// };
// // export function getSomethingthatNeedsToBeAuthenticated() {
// export function getLocations() {
//   return fetch( API_VERSION + '/locations', option)
//     .then(res => res.json())
//     .then(res => { return { res }; })
//     .catch(error => { return { error }; });
// }
