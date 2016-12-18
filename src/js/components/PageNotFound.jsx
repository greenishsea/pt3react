import React, { Component } from 'react';
import { Link } from 'react-router';

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h3>
          Page Not Found
        </h3>
        <Link to="/"> Go back to homepage </Link>
      </div>
    );
  }
}

export default PageNotFound;
