import React, { useState, useEffect } from "react";
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './discover.css'
import { useLocation } from "react-router-dom";


const items: MenuProps['items'] = [
    {
      label: (
        <a href="/discover">推荐</a>
      ),
      key: '/discover',
    },
    {
      label: (
        <a href="/toplist">排行榜</a>
      ),
      key: '/toplist',
    },
    {
      label: (
        <a href="/playlist">歌单</a>
      ),
      key: '/playlist',
    },
    {
      label: (
        <a href="/djradio">主播电台</a>
      ),
      key: '/djradio',
    },
    {
      label: (
        <a href="/artist">歌手</a>
      ),
      key: '/artist',
    },
    {
      label: (
        <a href="/album">新碟上架</a>
      ),
      key: '/album',
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