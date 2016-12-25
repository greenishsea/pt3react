// ------------------------------
// location
// ------------------------------

/**
 * __Comment_for_action__
 */
export const LOCATION_GET_ITEMS = "LOCATION_GET_ITEMS";
export function location_getItems() {
  return {
    type: LOCATION_GET_ITEMS,
  };
}

/**
 * __Comment_for_action__
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
 * __Comment_for_action__
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
 * __Comment_for_action__
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
 * __Comment_for_action__
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
 * @param {string} payload.id  :Location id
 */
export const LOCATION_TOGGLE_PICK_STATE = "LOCATION_TOGGLE_PICK_STATE";
export function location_togglePickState(id) {
  return {
    type: LOCATION_TOGGLE_PICK_STATE,
    payload: {
      id
    }
  };
}

/**
 * end to sort picked location box
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
 * click unpick button
 * @param {string} payload.id  :Location id
 */
export const LOCATION_CLICK_UNPICK_BUTTON = "LOCATION_CLICK_UNPICK_BUTTON";
export function location_clickUnpickButton(payload) {
  return {
    type: LOCATION_CLICK_UNPICK_BUTTON,
    payload
  };
}

/**
 * update specified flags
 * @param {object} payload.targetFlags  :target flags
 */
export const LOCATION_UPDATE_FLAGS = "LOCATION_UPDATE_FLAGS";
export function location_updateFlags(targetFlags) {
  return {
    type: LOCATION_UPDATE_FLAGS,
    payload: {targetFlags}
  };
}
