import React, { useState, useEffect, useRef } from "react";
import store from '../../store/store'
import { useSelector, useDispatch } from "react-redux";
import { sendBanner } from '../../store/action'
import './index.css'
import { sendCateHot, sendToplist } from '../../store/action'

const HotList = () => {
    const dispatch = useDispatch()
    const indexInfo = useSelector((state) => state);
    useEffect(() => {
        dispatch(sendCateHot());
        dispatch(sendToplist())
    }, []);
    const catehot = indexInfo.catehot
    //热门推荐
    const hotList = indexInfo.playlists
    return (
        <div className='HotList'>
            <ul className="discover-list catehot">
                <div className="list-title">
                    <div className="iconfont icon-double-circle-full"></div>
                    热门推荐
                    {/* 热门歌单分类 */}
                    <div className="discover-tab">
                        {catehot[4] === undefined ? '' : catehot.map((item, index) => {
                            return (
                                <a key={index} href='/'>{item.name}</a>
                            )
                        })}
                    </div>
                    <a className="more" href="/">更多<div className="iconfont icon-youjiantou"></div></a>
                </div>
                {/* 热门推荐列表 */}
                {hotList[0] === undefined ? null : hotList.map((item, index) => {
                    const coverStyle = {
                        backgroundImage: 'url(' + item.coverImgUrl + ')',
                        backgroundSize: '100%',
                    }
                    return (
                        <li key={index}>
                            <div style={coverStyle} className="list-cover"></div>
                            <a href='/'>{item.name}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default HotList