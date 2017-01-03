import { Record } from 'immutable';
import { URL_FOR_IMAGE_LOADING } from '../../constants/url';

const LocationRecord = Record({
  id: null,
  title: '',
  description: '',
  imagePath: '',
  isSelected: false,
});

class Location extends LocationRecord {
  constructor(obj) {
    super({
      id: obj.id,
      title: obj.title,
      description: obj.description,
      imagePath: obj.image, // with mock locations.json
      // imagePath: './assets/images/samples/' + location.image; // with local image files
      // imagePath: URL_FOR_IMAGE_LOADING + location.image; // in production (retrive images from storage server or sth)
      isSelected: false,
    });
  }

  toggleIsSelected() {
    return this.update('isSelected', v => !v);
  }

  dropIsSelected() {
    return this.set('isSelected', false);
  }
}

export default Location;
