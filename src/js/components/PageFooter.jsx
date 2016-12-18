import React, {Component} from 'react';
import { IndexLink, Link } from 'react-router'
import { PATH_ROOT, PATH_PLAN, PATH_LOGIN, PATH_DASHBOARD } from '../constants/path';

class  PageFooter extends Component {
  render() {
    return (
      <div className ="footer">
        <ul>
          <li>
            <IndexLink to={PATH_ROOT} className="link--normal" activeClassName="link--normal--active">HOME</IndexLink>
          </li>/
          <li>
            <Link to={PATH_PLAN} className="link--normal" activeClassName="link--normal--active">PLAN</Link>
          </li>/
          <li>
            <Link to={PATH_DASHBOARD} className="link--normal" activeClassName="link--normal--active">MYPAGE</Link>
          </li>/
          <li>
            <Link to={PATH_LOGIN} className="link--normal" activeClassName="link--normal--active">LOGIN</Link>
          </li>/
          <li>
            <a href="/">INTRO</a>
          </li>
        </ul>
        <div>
            <div>Location Data taken by LinkData.</div>
            <div>Photo taken by Sapporo City.</div>
            <div>Copyright &copy; 2016 PickThree3 All Rights Reserved.</div>
        </div>
      </div>
    );
  }
}

export default PageFooter;
