import React, { useState, useEffect, useRef } from "react";
import './index.css'
import { Carousel } from 'antd';
import store from '../../store/store'
import { useSelector, useDispatch } from "react-redux";
import { sendPlaylist, sendAlbumNews } from '../../store/action'
const NewAlbum = () => {
    const dispatch = useDispatch()
    const indexInfo = useSelector((state) => state);
    useEffect(() => {
        dispatch(sendPlaylist({ order: 'hot', limit: 100 }));
        dispatch(sendAlbumNews());
    }, []);
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
        <div className="NewAlbum">
            <div className="discover-list albumnews">
                <div className="list-title">
                    <div className="iconfont icon-double-circle-full"></div>
                    新碟上架
                    <a className="more" href="/">更多<div className="iconfont icon-youjiantou"></div></a>
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
                                        <li key={index}>
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
                                        <li key={index}>
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
    )
}
export default NewAlbum