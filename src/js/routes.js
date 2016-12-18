import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import PageHome from './containers/PageHome.jsx';
import PagePlan from './containers/PagePlan.jsx';
import PageLogin from './containers/PageLogin.jsx';
import PageDashboard from './components/PageDashboard.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import { PATH_ROOT, PATH_PLAN, PATH_LOGIN, PATH_DASHBOARD } from './constants/path';
import auth from './logic/common/auth';

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
          pathname: PATH_LOGIN,
          // TODO: redirect properly from LoginPage to Dashboard Page
          //       need to pass original path ( /sample/dashboard ) to LoginPage or sequence
          state: { location: nextState.location.pathname }
        })
    }
}

export default (
  <Route path={PATH_ROOT} component={App}>
    <IndexRoute component={PageHome}/>
    <Route path={PATH_LOGIN} component={PageLogin} />
    <Route path={PATH_PLAN} component={PagePlan} />
    <Route onEnter={requireAuth}>
      <Route path={PATH_DASHBOARD} component={PageDashboard} />
    </Route>
    <Route path="*" component={PageNotFound}/>
  </Route>
);
