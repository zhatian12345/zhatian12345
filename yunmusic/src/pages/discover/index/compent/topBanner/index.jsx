import React, { useState, useEffect, useRef } from "react";
import './index.css'
import { Carousel } from 'antd';
import store from '../../store/store'
import { useSelector, useDispatch } from "react-redux";
import { sendBanner } from '../../store/action'
const TopBanner=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const indexInfo = useSelector((state) => state);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        dispatch(sendBanner());
    }, []);
    const Banner = indexInfo.banners
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const Bannerswitch = useRef(null)
    const BannerPrev = () => {
        Bannerswitch.current.prev()
    }
    const BannerNext = () => {
        Bannerswitch.current.next()
    }
    return (
        <div className="TopBanner">
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
            </div >
        </div>
    )
}
export default TopBanner