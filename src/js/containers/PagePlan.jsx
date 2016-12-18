import React, {Component} from 'react';
import {connect} from 'react-redux'
import LocationPickedContainer from './LocationPickedContainer.jsx';
import ShareIconContainer from './ShareIconContainer.jsx'
import FeatureBox from '../components/FeatureBox.jsx';
import {PAGE_PLAN} from '../constants/common'

class PagePlan extends Component {
  render() {
    return (
      <section className="contents">
        <FeatureBox items={this.props.items}/>
        <div className="row rank-section">
          <h3 className="rank-section-heading">Candidates</h3>
          <LocationPickedContainer />
        </div>
        <ShareIconContainer />
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    items: state.features.items.filter((item) => { return item.displayTarget === PAGE_PLAN; })
  };
}

export default connect(mapStateToProps, {})(PagePlan);
