# pt3react

A boilerplate for react & redux frontend project.

## Features

* routing
* force transition
* user authentication with login page
* fetch with redux-saga
* triggering event when reaching page bottom with jQuery
* react-images (not properly applied)
* sortable (an issue still remains)
* scss
* Webpack
* BrowserSync

## TODO

* sortable
* user authentication with register/login/logout page
* user myPage with solid auth
* tidy up social buttons
* detailed form (using redux-form?)
* i18n
* SASS to postCSS (but vscode linter? see .css is just css. that's an issue.)
* eslint setting
* stylelint setting
* modal
* slide in/out sidemenu
* CSS Animation (when location Picked Counter changed)

## Pending

* change ext .jsx to .jsx
  (webpack react preset? doesn't need to JSX files's extention is .jsx.
   but snippets and codehint need .jsx extentions...)

* apply HMR other than reducers

## Installation

```
npm install
```

## Start Dev Version With BrowserSync

```
npm start
```

## Build Prod Version

```
npm run build
```

## Misc
- if cloning on a server-side project, recommends to designate the folder name to 'client' 

- Sample App Locations data are retrived from mock json in default.
  In case of retriving from server-side, you should modify files below.
  - api/location.js
  - constants/url.js
  - api/location.js

- You can change root path with modifying a file below.
  - constants/path.js

## License

MIT © [greenishsea]