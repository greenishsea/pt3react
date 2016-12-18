import React, {Component} from 'react'
import {connect} from 'react-redux'
import LocationContainer from './LocationContainer.jsx';
import FeatureBox from '../components/FeatureBox.jsx';
import {PAGE_HOME} from '../constants/common'

class PageHome extends Component {
  render () {
    const items = this.props.items;

    return (
      <section className="contents">
        <FeatureBox items={items}/>
        <LocationContainer />
      </section>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    items: state.features.items.filter((item) => { return item.displayTarget === PAGE_HOME; })
  };
}

export default connect(mapStateToProps, {})(PageHome);
