import { modal_hide,
         navigate_to_plan } from '../actions';
import { LBL_YES,
         LBL_NO,
         LBL_CLOSE } from '../constants/common';

// ------------------------------
// Default property
// ------------------------------

const modalDefault = {
  title: '',
  subTitle: '',
  bodyText: '',
  buttons: [
    {
      label: LBL_CLOSE,
      className: '',
      onClick: modal_hide,
      plusModalHide: false,
    },
  ],
  attr: {
    backdrop: 'static', // if overriding value by true, you can close modal when clicked backdrop
    bsSize: 'large',
    dialogClassName: '',
    onHide: modal_hide,
  },
};

// ------------------------------
// Related Location
// ------------------------------

export const params_modal_location_justReachedMaxPick = {
  ...modalDefault,
  title: 'You have picked 3 places.',
  subTitle: '',
  bodyText: 'Want to move to Plan page?',
  buttons: [
    {
      label: 'Sure!',
      className: 'btn--success',
      onClick: navigate_to_plan,
      plusModalHide: true,
    },
    {
      label: LBL_NO,
      className: '',
      onClick: modal_hide,
      plusModalHide: false,
    },
  ]
};

export const params_modal_location_hasAlreadyReachedMaxPick = {
  ...modalDefault,
  title: 'You have already picked 3 places.',
  subTitle: '',
  bodyText: 'Please move to Plan page or click "Picked" button for unpicking.',
};
