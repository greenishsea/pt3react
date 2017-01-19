import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { LOCATION_GET_ITEMS,
         LOCATION_SUCCESS_GET_ITEMS,
         LOCATION_FAILURE_GET_ITEMS,
         LOCATION_CLICK_MORE_BUTTON,
         LOCATION_SCROLL_CONTAINER_END,
         LOCATION_TOGGLE_PICK_STATE,
         LOCATION_PICKEDLOCATION_SORT_END,
         LOCATION_CLICK_UNPICK_BUTTON,
         LOCATION_UPDATE_FLAGS } from '../actions';
import * as initialState from './initialState';
import { arrayMove } from 'react-sortable-hoc';
import Location from '../logic/models/Location';

export function locations(state = initialState.locations, action) {
  let targetId;
  let itemsNew;
  let itemsPickedNew;

  switch (action.type) {
    case LOCATION_GET_ITEMS: {
      return state;
    }
    case LOCATION_SUCCESS_GET_ITEMS: {
      return state.addLocationItems(action.payload.locations);
    }
    case LOCATION_FAILURE_GET_ITEMS: {
      return state;
    }
    case LOCATION_CLICK_MORE_BUTTON: {
      return state.withMutations(s =>
        s.set('isMoreButtonClicked', true)
         .set('locationsDisplayedIndex', state.increaseLocationsDisplayed())
      );
    }
    case LOCATION_SCROLL_CONTAINER_END: {
      return state.set('locationsDisplayedIndex', state.increaseLocationsDisplayed());
    }
    case LOCATION_PICKEDLOCATION_SORT_END: {
      return state.set('itemsPicked', arrayMove(state.itemsPicked, action.payload.oldIndex, action.payload.newIndex));
    }
    case LOCATION_CLICK_UNPICK_BUTTON: {
      targetId = action.payload.location.id;
      itemsNew = state.items.set(state.items.findIndex(t => t.get('id') === targetId),
                                                             action.payload.location);
      itemsPickedNew = itemsNew.filter(location => { return location.isSelected });
      return state.withMutations(s =>
        s.set('items', itemsNew)
         .set('itemsPicked', itemsPickedNew)
      );
    }
    case LOCATION_TOGGLE_PICK_STATE: {
      targetId = action.payload.location.id;
      itemsNew = state.items.set(state.items.findIndex(t => t.get('id') === targetId),
                                                             action.payload.location);
      itemsPickedNew = itemsNew.filter(location => { return location.isSelected });

      // Decide to show which modal or not after toggling pick state
      if ( state.willBeUnderMaxPick(itemsPickedNew.size) ) {
        return state.withMutations(s =>
          s.set('items', itemsNew)
           .set('itemsPicked', itemsPickedNew)
        );

      } else if( state.willEqualToMaxPick(itemsPickedNew.size) ) {
        return state.withMutations(s =>
          s.set('items', itemsNew)
           .set('itemsPicked', itemsPickedNew)
           .set('isReachedMaxPick', true)
        );
      } else {
        // when picked items are over MAX
        return state.set('isAlreadyReachedMaxPick', true);
      }
    }
    case LOCATION_UPDATE_FLAGS: {
      return state.merge(action.payload.targetFlags);
    }
    default: {
      return state;
    }
  }
}

