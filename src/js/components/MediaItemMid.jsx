import React, { Component, PropTypes } from 'react';
import Lightbox from 'react-images';

const propTypes = {
  imagePath: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isSelected: PropTypes.bool,
  buttonClickHandler: PropTypes.func
};

/*
 * INFO: This component has state by itself for react-image.
 */
export default class MediaItemMid extends Component {
  constructor () {
    super();

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  }

  componentDidMount () {
    this.setState({
			lightboxIsOpen: false,
		});
	}

	openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
    this.render();
	}

	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}

  render() {
    const dummyf = function(){};
    return (
        <div className="media--mid">
            <hr className="hr--gray" />
            <div className="img-wrapper">
              <a href={this.props.imagePath} onClick={(e) => this.openLightbox(this.props.key, e)}>
                <img src={this.props.imagePath} alt="" />
              </a>
              <Lightbox
                backdropClosesModal={true}
                currentImage={this.state.currentImage}
                showThumbnails={false}
                images={[{ src: this.props.imagePath, caption: this.props.title, thumbnail: 'true'}]}
                isOpen={this.state.lightboxIsOpen}
                onClose={this.closeLightbox}
              />
            </div>
            <div>
              <h2>{this.props.title}</h2>
              <p>{this.props.description}</p>
              <button className={ 'btn btn--full-width' + (this.props.isSelected ? ' btn__selected' : '')}
                 href="javascript:void(0);"
                 role="button"
                 onClick={this.props.buttonClickHandler}>{this.props.isSelected ? 'Picked!' : 'Pick this out?'}</button>
            </div>
        </div>
    );
  }
}

MediaItemMid.propTypes = propTypes;
