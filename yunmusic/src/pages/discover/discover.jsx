import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './discover.css'
import { useLocation } from "react-router-dom";


const items: MenuProps['items'] = [
    {
      label: (
        <Link to="/discover">推荐</Link>
      ),
      key: '/discover',
    },
    {
      label: (
        <Link to="/discover/toplist">排行榜</Link>
      ),
      key: '/discover/toplist',
    },
    {
      label: (
        <Link to="/discover/playlist">歌单</Link>
      ),
      key: '/discover/playlist',
    },
    {
      label: (
        <Link to="/discover/djradio">主播电台</Link>
      ),
      key: '/discover/djradio',
    },
    {
      label: (
        <Link to="/discover/artist">歌手</Link>
      ),
      key: '/discover/artist',
    },
    {
      label: (
        <Link to="/discover/album">新碟上架</Link>
      ),
      key: '/discover/album',
    },
  ]
const Discover = () => {
    document.title = '网易云音乐'
    const location = useLocation();
    const [key, setKey] = useState(location.pathname)
    const hanleClick = (e) => {
        setKey(e.key)
    }
    return (
        <div className="discover">
        <Menu className="nvbar" onClick={hanleClick} selectedKeys={[key]} mode="horizontal" items={items} />
        </div>
    )
}

export default Discover;