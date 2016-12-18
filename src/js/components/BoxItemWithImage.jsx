import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  imagePath: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default class BoxItemWithImage extends Component {
  render() {
    let img;
    if (this.props.imagePath === undefined || typeof(this.props.imagePath) !== "string") {
      img =  null;

    } else if ( this.props.imagePath.match(/svg$/)) {
      img = <div className="">
              <img src={this.props.imagePath} alt="" width="180px"/>
            </div>;

    } else {
      img = <div className="img-wrapper">
              <a href={this.props.imagePath} data-title={this.props.title}>
                <img src={this.props.imagePath} alt="" />
              </a>
            </div>;
    }

    return (
        <div className="flex-item">
          {img}
          <div>
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
          </div>
        </div>
    );
  }
}

BoxItemWithImage.propTypes = propTypes;
