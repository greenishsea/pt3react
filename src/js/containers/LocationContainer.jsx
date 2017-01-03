import React, { Component, PropTypes } from 'react';
// import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux'
import Box from '../components/Box.jsx'
import MediaItemMid from '../components/MediaItemMid.jsx'
import { location_togglePickState,
         location_clickMoreButton,
         location_scrollContainerEnd,
         location_updateFlags,
         modal_show } from '../actions';
import { LOADING_POSITION_AWAY_FROM_BOTTOM_DECIMAL } from '../constants/common';
import { params_modal_location_justReachedMaxPick,
         params_modal_location_hasAlreadyReachedMaxPick } from '../params/modal'


class LocationContainer extends Component {

  componentDidMount() {
    // this.boundOnScroll = this.onScroll.bind(this);
    this.boundOnScroll = (ev) => { this.onScroll(ev); };
    window.addEventListener('scroll', this.boundOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.boundOnScroll);
  }

  componentDidUpdate() {
    const {modal_show, location_updateFlags} = this.props;
    const {isAlreadyReachedMaxPick, isReachedMaxPick} = this.props.locations;

    // Show modal if flagged
    if (isAlreadyReachedMaxPick) {
        modal_show(params_modal_location_hasAlreadyReachedMaxPick);
        location_updateFlags({isAlreadyReachedMaxPick: !isAlreadyReachedMaxPick});
    } else if (isReachedMaxPick) {
        modal_show(params_modal_location_justReachedMaxPick);
        location_updateFlags({isReachedMaxPick: !isReachedMaxPick});
    }
  }

  onScroll(ev) {
    if ( this.isMoreButtonClicked === false ) {
      return;
    }
    const scrollHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight <= LOADING_POSITION_AWAY_FROM_BOTTOM_DECIMAL) {
        // append more location
        this.props.location_scrollContainerEnd({});
    }

    // // TODO: use browser native method instead of jQuery
    // const scrollHeight = document.style.height;
    // const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    // const scrollPosition = window.style.height + scrollTop;
    // if ( (scrollHeight - scrollPosition) / scrollHeight === 0) {
    //   // $(obj).trigger("bottom");
    //   alert("aa");
    // }

  }

  render() {
    const { locations, additionalClassNames } = this.props;
    const items = locations.items;
    const locationsDisplayed = items.slice(0, locations.locationsDisplayedIndex);

    // for onScroll event handler
    this.isMoreButtonClicked = locations.isMoreButtonClicked;

    let content;
    if (items === null || items.length === 0) {
      content = <div style={{paddingTop: 100 + 'px', paddingBottom: 300 + 'px', textAlign: 'center'}}>
                  <img src="/assets/images/svg/loader-spin-gray.svg" width="78" height="78" alt="" />
                </div>;

    } else {
      content = <Box additionalClassNames={additionalClassNames}>
                  {locationsDisplayed.map(location =>
                    <MediaItemMid
                      key={location.id}
                      imagePath={location.imagePath}
                      title={location.title}
                      description={location.description}
                      isSelected={location.isSelected}
                      buttonClickHandler={() => this.props.location_togglePickState(location)} />
                  )}
                </Box>
    }

    return (
      <div>
        {content}
        <div className="action-button-row">
            { this.isMoreButtonClicked === false && <a id="moreButton" className="flex-item btn btn--success btn--over-harf-row" onClick={() => this.props.location_clickMoreButton({})}>More</a> }
        </div>
      </div>
    )
  }


};

const _additionalClassNames = [ 'item-wrapper' ];

function mapStateToProps(state, ownProps) {
  return {
    locations: state.locations,
    additionalClassNames: _additionalClassNames,
  };
}

export default connect(mapStateToProps, {
  location_togglePickState,
  location_clickMoreButton,
  location_scrollContainerEnd,
  location_updateFlags,
  modal_show
})(LocationContainer);
