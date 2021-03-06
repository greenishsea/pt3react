import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import MediaItemSmall from '../components/MediaItemSmall.jsx'
import { location_pickedLocationSortEnd,
         location_clickUnpickButton } from '../actions';


const SortableItem = SortableElement(({value, order, buttonClickHandler}) =>  <MediaItemSmall
            key={value.id}
            order={order}
            imagePath={value.imagePath}
            title={value.title}
            description={value.description}
            buttonClickHandler={(ev) => {
              ev.stopPropagation();
              buttonClickHandler(value); }} />);

const SortableList = SortableContainer(({items, buttonClickHandler}) => {
    return (
        // due to sortable malfunction, added disable property to SortableItem for making Unpick button work.
        // disabled={true}
        <div className='rank-section-media-container' >
            {items.map((location, index) =>
                <SortableItem key={`item-${index}`} disabled={true} index={index} value={location} order={index + 1} buttonClickHandler={buttonClickHandler}/>
            )}
        </div>
    );
});


class LocationPickedContainer extends Component {

  onSortEnd = ({oldIndex, newIndex}) => {

      if (oldIndex === newIndex) {
        return;
      }
      // TODO:<critical> After first sorting, moved div (only) will be unable to move again.
      this.props.location_pickedLocationSortEnd({oldIndex, newIndex});
  };

  render() {
    const { itemsPicked } = this.props;
    return (
      itemsPicked == null || itemsPicked.size === 0 ?
        <div className='rank-section-content-none'>(No Pick)</div>
          :
        <SortableList items={itemsPicked} buttonClickHandler={this.props.location_clickUnpickButton} onSortEnd={this.onSortEnd} />
    )
  }
};


function mapStateToProps(state, ownProps) {
  return {
    itemsPicked: state.locations.itemsPicked,
  };
}

export default connect(mapStateToProps, {
  location_pickedLocationSortEnd,
  location_clickUnpickButton
})(LocationPickedContainer);
