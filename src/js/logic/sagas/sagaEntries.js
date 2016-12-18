import * as AC from '../../actions';
import * as API_location from '../../api/location';
import * as API_auth from '../../api/auth';

export const handleRequestEntries = [
  [API_location.getLocations, AC.LOCATION_GET_ITEMS, AC.location_successGetItems, AC.location_failureGetItems],
  [API_auth.getToken, AC.AUTH_LOGIN_USER_REQUEST, AC.authLoginUserSuccess, AC.authLoginUserFailure],
];
