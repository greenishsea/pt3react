import { location_getItems } from '../actions';

export default function init(store) {

  // get initial data
  store.dispatch(location_getItems());

};
