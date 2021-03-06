import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

class LocationPickCounter extends Component {

  componentWillUpdate() {
    // TODO:optional: It might be a better way to add/remove class like jQuery
    this.counterPulse.className = 'a-pick-counter';
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.counterPulse.className = '';
    }, 1000);
  }

  render() {
    const { selectedTotal } = this.props;
    const counter = <span key={selectedTotal}>{selectedTotal}</span>;

    return (
      <div className="locationPickCounter">
        {counter}
        <div ref={(el) => { this.counterPulse = el; }} className=""></div>
      </div>
    )
  }

  // // INFO: standard react animation feature is below.
  // import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
  //
  // <ReactCSSTransitionGroup transitionName="sample"
  //                     transitionEnterTimeout={500}
  //                     transitionLeave={false}>
  //   <div ref={(el) => { this.counterPulse = el; }} className=""></div>
  // </ReactCSSTransitionGroup>

};

function mapStateToProps(state, ownProps) {
  return {
    selectedTotal: state.locations.getSelectedTotal()
  };
}

export default connect(mapStateToProps, {})(LocationPickCounter);
