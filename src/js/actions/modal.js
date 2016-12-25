// ------------------------------
// Modal
// ------------------------------

/**
 * show modal
 * @param {object} payload.content  :modal content
 */
export const MODAL_SHOW = "MODAL_SHOW";
export function modal_show(content) {
  return {
    type: MODAL_SHOW,
    payload: {
      content
    }
  };
}

/**
 * hide modal
 */
export const MODAL_HIDE = "MODAL_HIDE";
export function modal_hide() {
  return {
    type: MODAL_HIDE
  };
}
