import { MAX_NUM_PICKED_LOCATION } from '../../constants/common'

export function updatePickedLocation(state, action) {

  const targetId = action.payload.id;
  const newState = _getLocationNewState(state, targetId);
  const newItemsPicked = newState.items.filter(location => {
    return location.isSelected;
  });
  const newItemsPickedLen = newItemsPicked.length;

  if(newItemsPickedLen < MAX_NUM_PICKED_LOCATION) {
    return {
      ...newState,
      itemsPicked: newItemsPicked
    }
  } else if(newItemsPickedLen === MAX_NUM_PICKED_LOCATION) {
    return {
      ...newState,
      itemsPicked: newItemsPicked,
      isReachedMaxPick: true,
    }
  } else {
    // when over MAX_NUM_PICKED_LOCATION
    return {
      ...state, // original state
      isAlreadyReachedMaxPick: true
    };
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
