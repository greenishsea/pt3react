import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Nav from './Nav.jsx';
import PageFooter from './PageFooter.jsx'

const propTypes = {
  children: React.PropTypes.object
}

export default class App extends Component {

  render() {
    return (
      <div className='wrapper'>
        <Nav />
        {this.props.children}
        <PageFooter />
      </div>
    );
  }
}

App.propTypes = propTypes;
