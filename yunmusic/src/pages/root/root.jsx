import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { MenuProps } from 'antd';
import { Menu } from 'antd';
import './root.css'
import { useLocation } from "react-router-dom";
import { Header } from "antd/es/layout/layout";

import Player from './player/player'

//导航栏路由
const items: MenuProps['items'] = [
  {
    label: (
      <div className="class">
        <a href="/">发现音乐</a>
        <div className="sub"></div>
      </div>
    ),
    key: '/',
  },
  {
    label: (
      <div className="class">
        <Link to="/my">我的音乐</Link>
        <div className="sub"></div>
      </div>
    ),
    key: '/my',
  },
  {
    label: (
      <div className="class">
        <Link to="/friend">关注</Link>
        <div className="sub"></div>
      </div>
    ),
    key: '/friend',
  },
  {
    label: (
      <div className="class">
        <Link to="/shop">商城</Link>
        <div className="sub"></div>
      </div>
    ),
    key: '/shop',
  },
  {
    label: (
      <div className="class">
        <Link to="/musician">音乐人</Link>
        <div className="sub"></div>
      </div>
    ),
    key: '/musician',
  },
]
const ROOT = () => {
  //导航栏功能
  const location = useLocation();
  const [key, setKey] = useState(location.pathname)
  if(key === '/discover'){
    setKey('/')
  }
  const hanleClick = (e) => {
    setKey(e.key)
  }
  return (
    // 头部组件
    <div>
      <Header>
        {/* 导航栏 */}
        <Menu className="nvbar" onClick={hanleClick} selectedKeys={[key]} mode="horizontal" items={items} />
      </Header>
    </div>

  )
}

export default ROOT;
