import {
  PAGE_HOME,
  PAGE_PLAN,
  PAGE_LOGIN
} from '../constants/common'

export const serverData = {
  // data store from server when SSR used
};

export const auth = {
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
};

export const modal = {
  show: false,
  content: {},
};

export const locations = {
  items: [],
  itemsPicked: [],
  locationsDisplayedIndex: 10,
  locationsPickedCount: 0,
  isMoreButtonClicked: false
};

export const features = {
  items: [
    {
      id: 1001,
      displayTarget: PAGE_HOME,
      title: "PICK THREE OUT!",
      description: "you can pick out 3 places by clicking each button below.",
      imagePath: "/assets/images/svg/list-numbered.svg"
    },
    {
      id: 2001,
      displayTarget: PAGE_PLAN,
      title: "SORTING",
      description: "* Currently, drag and drop sort acts just once.",
      imagePath: "/assets/images/svg/move-up.svg"
    },
    {
      id: 2002,
      displayTarget: PAGE_PLAN,
      title: "SHARE",
      description: "For your plan info, you can tweet.",
      imagePath: "/assets/images/svg/share2.svg"
    },
    {
      id: 3001,
      displayTarget: PAGE_LOGIN,
      title: "LOGIN",
      description: "After logging in, you can save your plan info.",
      imagePath: "/assets/images/svg/enter.svg"
    },
  ]
};

export const shareTargets = {
  items: [
    {
      id: 1,
      title: "tweet above",
      description: "",
      imagePath: "/assets/images/svg/twitter.svg"
      },
  ]
};

// TODO: For i18n, almost all strings should be provided by server-side? (SSR or sth?)
//       but using reducers with a little hack seem to be redundant? How can i do for this?
// export const messages = {
//   COMMON_MOVE_TO_PLAN_PAGE: 'You have picked 3 places. Want to move to Plan page?'
// };
