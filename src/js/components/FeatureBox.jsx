import React, { Component, PropTypes } from 'react';
import Box from './Box.jsx'
import BoxItemWithImage from './BoxItemWithImage.jsx'

const propTypes = {
    items: PropTypes.array.isRequired
};

export default class FeatureBox extends Component {
  render() {
    const _additionalClassNames = [ 'flex-container', 'feature-row' ];
    const { items } = this.props;

    return (
      <Box additionalClassNames={_additionalClassNames}>
        {items.map(item =>
          <BoxItemWithImage
            key={item.id}
            imagePath={item.imagePath}
            title={item.title}
            description={item.description} />
        )}
      </Box>
    )
  }
};

FeatureBox.propTypes = propTypes;
