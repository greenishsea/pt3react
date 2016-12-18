import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
import classNames from 'classnames';
import {
  authLoginUserSuccess,
  authLoginUserFailure,
  authLoginUserRequest,
  authLogout,
  authLogoutAndRedirect,
} from '../actions/auth';
import FeatureBox from '../components/FeatureBox.jsx';
import {PAGE_LOGIN} from '../constants/common'


const propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isAuthenticating: PropTypes.bool.isRequired,
  statusText: PropTypes.string,
  actions: PropTypes.object.isRequired,
  // location: PropTypes.object  // this comes from react-router, not required
};

/*
 * INFO: This component has state by itself for form input values.
 */
class PageLogin extends Component {
  constructor(props) {
    super(props);

    // INFO: routes.js set -> state: { nextPathname: nextState.location.pathname }
    const redirectRoute = this.props.location ? this.props.location.query.next || '/' : '/';
    this.state = {
      email: '',
      password: '',
      redirectTo: redirectRoute
    };

    this._login = this._login.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _login (e) {
    e.preventDefault();
    this.props.authLoginUserRequest(this.state.email, this.state.password, this.state.redirectTo);
  };

  _handleInputChange (e, state) {
    this.setState({
      [state]: e.currentTarget.value
    });
  };

  render() {
    const { isAuthenticated, isAuthenticating, statusText } = this.props;

    let visibleStatusText = null;
    if (statusText) {
      const statusTextClassNames = classNames({
        alert: true,
        alert__error: statusText.indexOf('Authentication Error') === 0,
        alert__success: statusText.indexOf('Authentication Error') !== 0
      });

      visibleStatusText = (
        <div className="">
          <div className="">
            <div className={statusTextClassNames}>
                {statusText}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="login-form-wrapper">
        <FeatureBox items={this.props.items}/>
        <div className="login-form">
          <div className="">

            {visibleStatusText}

            <form>
              <div className="login-form-row">
                <div className="">
                  <input type="text"
                          className="form-control input-lg"
                          placeholder="Email"
                          onChange={(e) => { this._handleInputChange(e, 'email'); }}
                  />
                </div>
              </div>
              <div className="login-form-row">
                <div className="">
                  <input type="password"
                          className="form-control input-lg"
                          placeholder="Password"
                          onChange={(e) => { this._handleInputChange(e, 'password'); }}
                  />
                </div>
              </div>
              <div className="login-form-row">
                <div className="clearfix">
                  <button type="submit"
                          className="btn u-pull-right"
                          onClick={this._login}
                          disabled={isAuthenticating}
                  >
                      Submit
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isAuthenticating: state.auth.isAuthenticating,
    statusText: state.auth.statusText,
    items: state.features.items.filter((item) => { return item.displayTarget === PAGE_LOGIN; })
  };
}

export default connect(mapStateToProps, {
  authLoginUserSuccess,
  authLoginUserFailure,
  authLoginUserRequest,
  authLogout,
  authLogoutAndRedirect,
})(PageLogin);
