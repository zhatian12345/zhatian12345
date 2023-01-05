import React, { useState, useEffect } from "react";
import './index.css'
import { Carousel } from 'antd';
import { sendBanner } from '../../../store/action'
import { useSelector, useDispatch } from "react-redux";
import store from '../../../store/store'


console.log(store.dispatch(sendBanner()))
console.log(store.getState());
const DiscoverInx = () => {
    //首页轮播图
    //store 轮播图调用
    const Banneraction = sendBanner()
    const [Banner, setBanner] = useState([])
    React.useEffect(() => {
        setBanner(Banneraction.value)
    })
    return (
        <div className="yBody">
            {/* 轮播图 */}
            <div className="download">
                <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
            <div className='Banner'>
                {/* 轮播图中间部分 */}
                {/* 轮播图片 */}
                
                <Carousel effect="fade" className="bImage" autoplay>
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
            <div className="yContent">
                <div className="yList">
                </div>
                <div className="userList">
                </div>
            </div>
        </div >
    )
}

export default DiscoverInx;