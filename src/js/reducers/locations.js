import { combineReducers } from 'redux';
import { LOCATION_GET_ITEMS,
         LOCATION_SUCCESS_GET_ITEMS,
         LOCATION_FAILURE_GET_ITEMS,
         LOCATION_CLICK_MORE_BUTTON,
         LOCATION_SCROLL_CONTAINER_END,
         LOCATION_TOGGLE_PICK_STATE,
         LOCATION_PICKEDLOCATION_SORT_END,
         LOCATION_CLICK_UNPICK_BUTTON } from '../actions';
import * as initialState from './initialState';
import { URL_FOR_IMAGE_LOADING } from '../constants/url';
import * as locationReducerHelper from '../logic/helpers/locationReducerHelper';
import { arrayMove } from 'react-sortable-hoc';

export function locations(state = initialState.locations, action) {
  switch (action.type) {
    case LOCATION_GET_ITEMS:
      return state;
    case LOCATION_SUCCESS_GET_ITEMS:
      // return { ...state, items: state.items.concat(action.payload.locations) }; // codes when have not connected server
      return {
        ...state,
        items: action.payload.locations.map(location => {
          location.imagePath = location.image; // with mock locations.json
          // location.imagePath = './assets/images/samples/' + location.image; // with local image files
          // location.imagePath = URL_FOR_IMAGE_LOADING + location.image; // in production (retrive images from storage server or sth)
          return location;
        })
      };
    case LOCATION_FAILURE_GET_ITEMS:
      return state;
    case LOCATION_CLICK_MORE_BUTTON:
      return {
        ...state,
        isMoreButtonClicked: true,
        locationsDisplayedIndex: state.locationsDisplayedIndex + 10
      };
    case LOCATION_SCROLL_CONTAINER_END:
      return {
        ...state,
        locationsDisplayedIndex: state.locationsDisplayedIndex + 10
      };
    case LOCATION_PICKEDLOCATION_SORT_END:
      return {
        ...state,
        itemsPicked: arrayMove(state.itemsPicked, action.payload.oldIndex, action.payload.newIndex)
      };
    case LOCATION_CLICK_UNPICK_BUTTON:
    if ( action.payload ) {
      const targetId = action.payload.id;
      return {
        ...state,
        items: state.items.map((location) => locationReducerHelper.dropIsSelectedOfTarget(location, targetId)),
        itemsPicked: state.itemsPicked.filter((location) => { return location.id !== targetId; })
      };
    } else {
      return state;
    }
    case LOCATION_TOGGLE_PICK_STATE:
      return locationReducerHelper.updatePickedLocation(state, action);
    default:
      return state;
  }
}

