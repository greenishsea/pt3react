import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Box from '../components/Box.jsx'

class PlanTextContainer extends Component {

  render() {
    const { itemsPicked, additionalClassNames } = this.props;

    // const newLine = '&#13;';
    const newLine = '\n';

    const resultText = itemsPicked.reduce(function(previousValue, currentValue, index, array){
      if (currentValue.isSelected) {
        if (previousValue === '') {
          return currentValue.title;
        } else {
          return previousValue + newLine + currentValue.title;
        }
      } else {
        return previousValue;
      }
    }, '');

    return (
      <Box additionalClassNames={additionalClassNames}>
        <h3>Candidates</h3>
        <textarea name="" id="" cols="30" rows="10" className="result-text" defaultValue={resultText}></textarea>
      </Box>
    )
  }
};

const _additionalClassNames = [ 'result-text-row' ];


function mapStateToProps(state, ownProps) {
  return {
    itemsPicked: state.locations.itemsPicked,
    additionalClassNames: _additionalClassNames
  };
}

export default connect(mapStateToProps, {})(PlanTextContainer);
