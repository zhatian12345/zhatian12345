import React, { useState, useEffect } from "react";
import { MenuProps, Radio } from 'antd';
import { Menu, Button, Progress } from 'antd';
import './root.css'
import { useLocation } from "react-router-dom";
import { Footer, Header } from "antd/es/layout/layout";
import { getSong } from "../../request/api";

//导航栏路由
const items: MenuProps['items'] = [
  {
    label: (
      <a href="/discover">发现音乐</a>
    ),
    key: '/discover',
  },
  {
    label: (
      <a href="/my">我的音乐</a>
    ),
    key: '/my',
  },
  {
    label: (
      <a href="/friend">关注</a>
    ),
    key: '/friend',
  },
  {
    label: (
      <a href="/shop">商城</a>
    ),
    key: '/shop',
  },
  {
    label: (
      <a href="/musician">音乐人</a>
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
  //播放器功能
  //播放器进度条
  const [percent, setPercent] = useState(0);
  // clearInterval控制
  const [timer, setTimer] = useState(null);
  // 是否暂停
  const [isStop, setisStop] = useState(false);
  const [time, setTime] = useState(100);
  getSong({ id: 1330348068 }).then((res) => {
    setTime(res.data[0].time)
    console.log(res.data[0]);
  }).catch((err) => {
    console.log(err.message);
  })
  const increase = () => {
    clearInterval(timer)
    setisStop(!isStop)
    console.log(isStop,time);
    if (isStop === false) {
      setTimer(setInterval(() => {
        setPercent((prevPercent) => {
          let newPercent = prevPercent + 100000/time;
          console.log(newPercent);
          if (newPercent > 100) {
            return time;
          }
          return newPercent;
        });
      }, 1000))
    }
    else if (isStop === true) {
      clearInterval(timer)
    }
  };
  return (
    // 头部组件
    <div>
      <Header>
        {/* 导航栏 */}
        <Menu className="nvbar" onClick={hanleClick} selectedKeys={[key]} mode="horizontal" items={items} />
      </Header>
      <Footer>
        <Progress className="Progress" percent={percent} showInfo={false} />
        <Button.Group>
          <Button className="proButton" onClick={increase}>{isStop ? '暂停' : '播放'}</Button>
          <p>{time}</p>
        </Button.Group>
        <audio src='http://m801.music.126.net/20221228142952/se201230151f3a33c2468b570ec857d1d/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096462065/f8fb/560c/c15d/12a0db051a26b4001cb2db52d488a239.mp3'></audio>
      </Footer>

    </div>

  )
}

export default ROOT;
