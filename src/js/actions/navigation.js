import { navigateTo } from '../logic/utils/navigationUtil'
import { PATH_PLAN } from '../constants/path'

// ------------------------------
// Navigation
// ------------------------------

/**
 * factory closure
 */
const NAVIGATE_TO = "NAVIGATE_TO";
function _createNavigateTo(path) {
  return () => {
    // This is main logic.
    navigateTo(path);

    // Unused action (currently no need to handle this)
    return {
      type: NAVIGATE_TO
    };
  }
}

/**
 * navigate to plan page
 */
export function navigate_to_plan() {
  return _createNavigateTo(PATH_PLAN);
}
