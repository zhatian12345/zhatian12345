import React, { useEffect } from "react"
import store from '../../store/store'
import { useSelector, useDispatch } from "react-redux";
import { sendToplist, sendPlayListMusic } from '../../store/action'
import './index.css'
const TopList = () => {
    const dispatch = useDispatch()
    const indextArr = useSelector(state => state)
    useEffect(() => {
        dispatch(sendToplist)
        dispatch(sendPlayListMusic({ id: 19723756, limit: 10 }))
        dispatch(sendPlayListMusic({ id: 3779629, limit: 10 }))
        dispatch(sendPlayListMusic({ id: 2884035, limit: 10 }))
    }, [])
    const toplist = indextArr.toplist
    const toplistMusic = indextArr.playListMusic
    return (
        <div className="TopList">
            <div className="discover-list toplist">
                <div className="list-title">
                    <div className="iconfont icon-double-circle-full"></div>
                    榜单
                    <a className="more" href="/">更多<div className="iconfont icon-youjiantou"></div></a>
                </div>
                <div className="top-flag">
                    {
                        toplist[0] === undefined && toplistMusic[0] === undefined ? null : toplist.map((item, index) => {
                            return (
                                <dl key={index}>
                                    <dt>
                                        <div className="occlusion"></div>
                                        <img src={item.coverImgUrl} alt="" />
                                        <div className="tit">
                                           <h3>{item.name}</h3> 
                                           <div className="btn">
                                            <div className="iconfont icon-bofang1"></div>
                                            <div className="iconfont icon-shoucang"></div>
                                           </div>
                                        </div>
                                        
                                    </dt>
                                    {toplistMusic[index] === undefined ? '' : toplistMusic[index].songs.map((item, index) => {
                                        return (
                                            <dd key={index}>
                                                <span>{index+1}</span>
                                                <a href="/">{item.name}</a>
                                                <div className="btn">
                                                    <div className="iconfont icon-bofang1"></div>
                                                    <div className="iconfont icon-tianjia"></div>
                                                    <div className="iconfont icon-shoucang"></div>
                                                </div>
                                            </dd>
                                        )
                                    })}
                                    <dd className="lookall"><a href="/">查看全部></a></dd>
                                </dl>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default TopList