import React from "react";
import './index.css'
import '../../../style/icon/iconfont.css'
import {Provider} from 'react-redux';
import store from './store/store'
import TopBanner from './compent/topBanner/index.jsx'
import HotList from './compent/hotList/index'
import NewAlbum from './compent/newalbum/index'
import TopList from './compent/toplist/index'
import User from './compent/userlist/index'
import Under from '../../under/index'

const DiscoverInx = () => {
    return (
        <Provider store={store}>
             <div className="yBody">
            {/* 轮播图 */}
            <TopBanner/>
            {/* 内容 */}
            <div className="yContent">
                {/* 左侧列表 */}
                <div className="yList">
                    {/* 热门推荐 */}
                    <HotList/>
                    {/* 新碟上架 */}
                    <NewAlbum/>
                    {/* 榜单 */}
                    <TopList/>
                </div>
                {/* 用户列表 */}
                <div className="userList">
                    <User/>
                </div>
            </div>
            <Under/>
        </div >
        </Provider>
       
    )
}

export default DiscoverInx;