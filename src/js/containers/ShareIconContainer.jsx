import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { TwitterButton } from "react-social";
import Box from '../components/Box.jsx'
import BoxItemWithImage from '../components/BoxItemWithImage.jsx'
import { URL_FOR_TWITTER_LINK } from '../constants/url';
import { MSG_TWITTER_LEADING } from '../constants/message';

class ShareIconContainer extends Component {

  render() {
    const { items, additionalClassNames, itemsPicked } = this.props;
    const link = URL_FOR_TWITTER_LINK;
    let message = MSG_TWITTER_LEADING + '\n';
    message += itemsPicked.map((item, index) => { return String(index + 1) + '. ' + item.title }).join(', ');

    return (
      <Box additionalClassNames={additionalClassNames}>
        <div className="flex-item">
            <TwitterButton title="Share via Twitter" message={message} url={link} element="a" className="share-icon">
              <img src={items[0].imagePath} className="share-icon__img--big" alt=""/>
              <div>
                <h2 className="share-icon__title--big">{items[0].title}</h2>
                <p>{items[0].description}</p>
              </div>
            </TwitterButton>
        </div>
      </Box>
    )
  }
};

const _additionalClassNames = [ 'flex-container', 'feature-row', 'share-icon-container' ];

function mapStateToProps(state, ownProps) {
  return {
    items: state.shareTargets.items,
    additionalClassNames: _additionalClassNames,
    itemsPicked: state.locations.itemsPicked,
  };
}

export default connect(mapStateToProps, {})(ShareIconContainer);
