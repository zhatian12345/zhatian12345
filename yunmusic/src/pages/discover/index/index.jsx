import React, { useState, useEffect, useRef } from "react";
import './index.css'
import '../../../style/icon/iconfont.css'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import store from '../../../store/store'
import { sendBanner, sendPlaylist,sendCateHot } from '../../../store/action'

const DiscoverInx = () => {
    // 获取redux数据
    const dispatch = useDispatch()
    const indexInfo = useSelector((state) => state);
    useEffect(() => {
        action()
    }, []);
    const action = () => {
        dispatch(sendBanner());
        dispatch(sendCateHot());
        dispatch(sendPlaylist({ order: 'hot', limit: 100 }));
    }
    //1.轮播图功能
    //轮播图数据
    const Banner = indexInfo.banners
    const Bannerswitch = useRef(null)
    const BannerPrev = () => {
        Bannerswitch.current.prev()
    }
    const BannerNext = () => {
        Bannerswitch.current.next()
    }
    //2.左侧列表功能
    //热门分类
    const catehot = []
    for (let i = 0; i < 5; i++) {
        catehot.push(indexInfo.catehot[i])
    }
    //热门推荐
    const hotList = []
    for (let i = 0; i < 8; i++) {
        let math = Math.ceil(Math.random() * 100)
        hotList.push(indexInfo.playlists[math])
    }
    return (
        <div className="yBody">
            {/* 轮播图 */}
            <div className="download">
                <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
            <div className='Banner'>
                {/* 轮播图中间部分 */}
                {/* 轮播图片 */}
                <div className="ban-btn">
                    <button className="Bannerswitch left" onClick={BannerPrev}>
                        <span className="iconfont icon-xiangzuo1 "></span>
                    </button>
                    <button className="Bannerswitch right" onClick={BannerNext}>
                        <span className="iconfont icon-xiangyou1 "></span>
                    </button>
                </div>
                <Carousel ref={Bannerswitch} effect="fade" className="bImage" autoplay>
                    {Banner.map((item, index) => {
                        const backstyle = {
                            backgroundImage: 'url(' + item.imageUrl + '?imageView&blur=40x20)',
                            backgroundSize: '6000px',
                        }
                        return (
                            <div key={index}>
                                <div style={backstyle}>
                                    <div className="ban-img">
                                        {/* 轮播图片 */}
                                        <img src={item.imageUrl} alt="" />
                                        {/* 客户端下载 */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            {/* 内容 */}
            <div className="yContent">
                {/* 左侧列表 */}
                <div className="yList">
                    <ul className="discover-list">
                        <div className="list-title">
                            <div className="iconfont icon-rementuijian"></div>
                            热门推荐
                            <div className="discover-tab">
                              {catehot[4]===undefined?'':catehot.map((item,index)=>{
                                return (
                                    <a key={index}>{item.name}</a>
                                )
                            })}  
                            </div>
                        </div>
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
                <div className="userList">
                </div>
            </div>
        </div >
    )
}

export default DiscoverInx;