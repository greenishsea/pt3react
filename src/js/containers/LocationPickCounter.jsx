import React, { Component, PropTypes } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux'

class LocationPickCounter extends Component {

  render() {
    const { items } = this.props;

    const count = items.reduce(function(previousValue, currentValue, index, array){
      return currentValue.isSelected === true ? ++previousValue : previousValue;
    }, 0);
    const counter = <span key={count}>{count}</span>;

    // <ReactCSSTransitionGroup transitionName="sample"
    //                     transitionEnterTimeout={500}
    //                     transitionLeave={false}>
    //   {counter}
    // </ReactCSSTransitionGroup>

    return (
      <div className="locationPickCounter">
        {counter}
        <div className="animation-pulse"></div>
      </div>
    )
  }
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.locations.items
  };
}

export default connect(mapStateToProps, {})(LocationPickCounter);
