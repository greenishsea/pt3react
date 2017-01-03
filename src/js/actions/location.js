// ------------------------------
// location
// ------------------------------

/**
 * Get location items
 */
export const LOCATION_GET_ITEMS = "LOCATION_GET_ITEMS";
export function location_getItems() {
  return {
    type: LOCATION_GET_ITEMS,
  };
}

/**
 * Got location items successfuly
 * @param {array} payload  :Locations
 */
export const LOCATION_SUCCESS_GET_ITEMS = 'LOCATION_SUCCESS_GET_ITEMS';
export function location_successGetItems(payload) {
  return {
    type: LOCATION_SUCCESS_GET_ITEMS,
    payload
  };
}

/**
 * Getting location items failed
 * @param {object} payload  :error object
 */
export const LOCATION_FAILURE_GET_ITEMS = 'LOCATION_FAILURE_GET_ITEMS';
export function location_failureGetItems(payload) {
  return {
    type: LOCATION_FAILURE_GET_ITEMS,
    payload
  };
}

/**
 * Clicked location container's more button
 * @param {object} payload  :error object
 */
export const LOCATION_CLICK_MORE_BUTTON = "LOCATION_CLICK_MORE_BUTTON";
export function location_clickMoreButton(payload) {
  return {
    type: LOCATION_CLICK_MORE_BUTTON,
    payload
  };
}

/**
 * Reached the end of the location container
 * @param {object} payload  :error object
 */
export const LOCATION_SCROLL_CONTAINER_END = "LOCATION_SCROLL_CONTAINER_END";
export function location_scrollContainerEnd(payload) {
  return {
    type: LOCATION_SCROLL_CONTAINER_END,
    payload
  };
}

/**
 * Toggle location pick state
 * @param {Location} location  :Location instance
 */
export const LOCATION_TOGGLE_PICK_STATE = "LOCATION_TOGGLE_PICK_STATE";
export function location_togglePickState(location) {
  return {
    type: LOCATION_TOGGLE_PICK_STATE,
    payload: {
      location: location.toggleIsSelected()
    }
  };
}

/**
 * End to sort picked location box
 * @param {number} payload.oldIndex  :Location oldIndex
 * @param {number} payload.newIndex  :Location newIndex
 */
export const LOCATION_PICKEDLOCATION_SORT_END = "LOCATION_PICKEDLOCATION_SORT_END";
export function location_pickedLocationSortEnd(payload) {
  return {
    type: LOCATION_PICKEDLOCATION_SORT_END,
    payload
  };
}

/**
 * Clicked unpick button
 * @param {Location} location  :Location instance
 */
export const LOCATION_CLICK_UNPICK_BUTTON = "LOCATION_CLICK_UNPICK_BUTTON";
export function location_clickUnpickButton(location) {
  return {
    type: LOCATION_CLICK_UNPICK_BUTTON,
    payload: {
      location: location.dropIsSelected()
    }
  };
}

/**
 * Will update specified flags
 * @param {object} payload.targetFlags  :target flags (varying)
 */
export const LOCATION_UPDATE_FLAGS = "LOCATION_UPDATE_FLAGS";
export function location_updateFlags(targetFlags) {
  return {
    type: LOCATION_UPDATE_FLAGS,
    payload: {targetFlags}
  };
}
