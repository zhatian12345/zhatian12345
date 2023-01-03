import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { MenuProps, Radio } from 'antd';
import { Menu, Button, Progress } from 'antd';
import './root.css'
import { useLocation } from "react-router-dom";
import { Header } from "antd/es/layout/layout";

import Player from './player/player'

//导航栏路由
const items: MenuProps['items'] = [
  {
    label: (
      <Link to="/discover">发现音乐</Link>
    ),
    key: '/discover',
  },
  {
    label: (
      <Link to="/my">我的音乐</Link>
    ),
    key: '/my',
  },
  {
    label: (
      <Link to="/friend">关注</Link>
    ),
    key: '/friend',
  },
  {
    label: (
      <Link to="/shop">商城</Link>
    ),
    key: '/shop',
  },
  {
    label: (
      <Link to="/musician">音乐人</Link>
    ),
    key: '/musician',
  },
]
const ROOT = () => {
  //导航栏功能
  const location = useLocation();
  const [key, setKey] = useState(location.pathname)
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
