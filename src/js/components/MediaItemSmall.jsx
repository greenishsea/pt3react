import React, { Component, PropTypes } from 'react';

const propTypes = {
  imagePath: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonClickHandler: PropTypes.func
};

export default class MediaItemSmall extends Component {

  render() {
    return (
        <div className="col-sm4 rank-media-row">
            <div className="rank-badge">{this.props.order}</div>
            <div className="media--small sortable">
                <a className="pull-left u-unclickable" href="#">
                    <img className="media-object" src={this.props.imagePath} alt="Image" />
                </a>
                <div className="media-body">
                    <h4 className="media__heading">{this.props.title}</h4>
                    <button className="btn btn--xs u-pull-right" onClick={this.props.buttonClickHandler}>Unpick</button>
                </div>
            </div>
        </div>
    );
  }
}

MediaItemSmall.propTypes = propTypes;
