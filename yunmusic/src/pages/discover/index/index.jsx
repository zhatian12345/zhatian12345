import React, { useState, useEffect, useRef } from "react";
import './index.css'
import '../../../style/icon/iconfont.css'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import store from '../../../store/store'
import { sendBanner, sendPlaylist, sendCateHot, sendAlbumNews } from '../../../store/action'

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
        dispatch(sendAlbumNews());
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
    //新碟上架
    const AlbumNewsList = []
    for (let i = 0; i < 10; i++) {
        AlbumNewsList.push(indexInfo.albumnews[i])
    }
    //新碟上架走马灯切换按钮
    const Albumswitch = useRef(null)
    const AlbumPrev = () => {
        Albumswitch.current.prev()
    }
    const AlbumNext = () => {
        Albumswitch.current.next()
    }
    return (
        <div className="yBody">
            {/* 轮播图 */}
            <div className="download">
                <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
            <div className='Banner'>
                {/* 轮播图中间部分 */}
                {/* 轮播图前后按钮 */}
                <div className="ban-btn">
                    <button className="Bannerswitch left" onClick={BannerPrev}>
                        <span className="iconfont icon-xiangzuo1 "></span>
                    </button>
                    <button className="Bannerswitch right" onClick={BannerNext}>
                        <span className="iconfont icon-xiangyou1 "></span>
                    </button>
                </div>
                {/* 轮播图走马灯 */}
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
                    {/* 热门推荐 */}
                    <ul className="discover-list catehot">
                        <div className="list-title">
                            <div className="iconfont icon-rementuijian"></div>
                            热门推荐
                        {/* 热门歌单分类 */}
                            <div className="discover-tab">
                                {catehot[4] === undefined ? '' : catehot.map((item, index) => {
                                    return (
                                        <a key={index} href='/'>{item.name}</a>
                                    )
                                })}
                            </div>
                            <a className="more" href="/">更多</a>
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
                    {/* 新碟上架 */}
                    <div className="discover-list albumnews">
                        <div className="list-title">
                            <div className="iconfont icon-rementuijian"></div>
                            新碟上架
                        </div>
                        <button className="btn-left" onClick={AlbumPrev}>
                            <span className="iconfont icon-xiangzuo1 "></span>
                        </button>
                        {/* 新碟上架走马灯 */}
                        <ul>
                            <Carousel ref={Albumswitch} className="ban-albumnews" dots={false}>
                                <div>
                                    {
                                        AlbumNewsList[0] === undefined ? '' : AlbumNewsList.slice(0, 5).map((item, index) => {
                                            return (
                                                <li>
                                                    <img src={item.blurPicUrl} alt="" />
                                                    <div className="ostback"></div>
                                                    <p>{item.name}</p>
                                                    <p className="artistName">{item.artist.name}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </div>
                                <div>
                                    {
                                        AlbumNewsList[0] === undefined ? '' : AlbumNewsList.slice(5, 10).map((item, index) => {
                                            return (
                                                <li>
                                                    <img src={item.blurPicUrl} alt="" />
                                                    <div className="ostback"></div>
                                                    <p>{item.name}</p>
                                                    <p className="artistName">{item.artist.name}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </div>
                            </Carousel>
                        </ul>
                        <button className="btn-right" onClick={AlbumNext}>
                            <span className="iconfont icon-xiangyou1 ">
                            </span>
                        </button>
                    </div>
                </div>
                <div className="userList">
                </div>
            </div>
        </div >
    )
}

export default DiscoverInx;