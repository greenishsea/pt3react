import { Record, List, fromJS } from 'immutable';
import Location from './Location';
import { MAX_NUM_PICKED_LOCATION } from '../../constants/common'

const LocationsRecord = Record({
  items: List(),
  itemsPicked: List(),
  locationsDisplayedIndex: 10,
  isMoreButtonClicked: false,
  isReachedMaxPick: false,
  isAlreadyReachedMaxPick: false,
});

class Locations extends LocationsRecord {

  addLocationItems(locationsNew) {
    return this.set(
      'items',
      this.items.concat(fromJS(locationsNew.map(location => { return new Location(location) })))
    );
  }

  increaseLocationsDisplayed() {
    return this.locationsDisplayedIndex + 10;
  }

  getSelectedTotal() {
    return this.itemsPicked.size;
  }

  willEqualToMaxPick(size) {
    return MAX_NUM_PICKED_LOCATION === size;
  }

  willBeUnderMaxPick(size) {
    return MAX_NUM_PICKED_LOCATION > size;
  }
}

export default Locations;
