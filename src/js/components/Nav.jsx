import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import LocationPickCounter from '../containers/LocationPickCounter.jsx'
import { PATH_ROOT, PATH_PLAN } from '../constants/path';

const propTypes = {
}

export default class Nav extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <header className="header--spa">
        <nav>
          <ul className="main-nav">
            <li><IndexLink to={PATH_ROOT} className="logo-main--spa">Pick Three 3</IndexLink></li>
            <li className="main-nav-item">
              <IndexLink className="btn btn--nav" to={PATH_ROOT} activeClassName="btn--nav-active"><LocationPickCounter />Pick</IndexLink>
            </li>
            <li className="main-nav-item">
              <Link className="btn btn--nav right-most" to={PATH_PLAN} activeClassName="btn--nav-active">Plan</Link>
            </li>
          </ul>
        </nav>
      </header>

    )
  }

}

Nav.propTypes = propTypes;
