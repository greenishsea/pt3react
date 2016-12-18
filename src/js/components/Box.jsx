import React, {Component} from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this._classNames = props.additionalClassNames ? props.additionalClassNames.join(' ') : '';
  }

  render() {
    return (
        <div className={this._classNames}>
          {this.props.children}
        </div>
    );
  }
}

export default Box;
