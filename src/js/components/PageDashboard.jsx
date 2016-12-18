import React, {Component} from 'react';
import PlanTextContainer from '../containers/PlanTextContainer.jsx'

class PageDashboard extends Component {
  render() {
    return (
      <section className="contents">
        <div style={{color: 'green', marginTop: 5 + '%', marginLeft: 10 + '%', fontSize: 20 + 'px'}}>My Page ( in construction )</div>
        <PlanTextContainer />
      </section>
    );
  }
}

export default PageDashboard;
