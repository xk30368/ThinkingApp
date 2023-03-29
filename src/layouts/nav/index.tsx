import React from 'react';
import { Link } from 'umi';
import { Layout } from 'antd';
import './index.less';

const Header = Layout.Header;
const Nav: React.FC = () => {
  return <Header className="ysj-header">
      <a className="ysj-logo">YSJ</a>
      <ul className="ysj-menu">
        <li>
          <Link to={'/'}>{'主页'}</Link>
        </li>
        <li>
          <Link to={'/audio'}>{'音乐'}</Link>
        </li>
        {/*<li>*/}
        {/*  <Link to={'#'}>{'博文'}</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link to={'#'}>{'关于我'}</Link>*/}
        {/*</li>*/}
      </ul>
    </Header>
}

export default Nav;