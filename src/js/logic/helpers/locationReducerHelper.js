import { showAlertDialog, showConfirmDialog } from '../utils/modalUtil'
import { navigateTo } from '../utils/navigationUtil'
import { MAX_NUM_PICKED_LOCATION } from '../../constants/common'
import { PATH_PLAN } from '../../constants/path'
import { MSG_WHEN_REACHED_3, MSG_WHEN_OVER_3 } from '../../constants/message'

export function updatePickedLocation(state, action) {

  const targetId = action.payload.id;
  const newState = _getLocationNewState(state, targetId);
  const newItemsPicked = newState.items.filter(location => {
    return location.isSelected;
  });
  const newItemsPickedLen = newItemsPicked.length;

  if(newItemsPickedLen < MAX_NUM_PICKED_LOCATION) {
    newState.itemsPicked = newItemsPicked;
    // return updated state
    return newState;

  } else if(newItemsPickedLen === MAX_NUM_PICKED_LOCATION) {
    const isConfirmed = showConfirmDialog(MSG_WHEN_REACHED_3);
    if(isConfirmed) {
      navigateTo(PATH_PLAN);
    }

    newState.itemsPicked = newItemsPicked;
    // return updated state
    return newState;

  } else {
    // when over 3
    showAlertDialog(MSG_WHEN_OVER_3);
    // return original state ( not new state )
    return state;
  }
};


function _getLocationNewState(state, targetId) {

  return {
    ...state,
    items: state.items.map(location => {
      if(location.id === targetId) {
        if(location.isSelected) {
          return Object.assign({}, location, {
            isSelected: false
          });
        } else {
          return Object.assign({}, location, {
            isSelected: true
          });
        }
      } else {
        return location;
      }
    })
  };
};



export function dropIsSelectedOfTarget(location, targetId) {
  if(location.isSelected === true && location.id === targetId) {
    location.isSelected = false;
  }
  return location;
}
