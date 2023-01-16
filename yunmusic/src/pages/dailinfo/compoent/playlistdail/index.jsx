import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendPlaylistDetail, sendPlaylistTracks, sendRelatedPlaylist } from '../../store/action'
import { useLocation } from "react-router-dom";
import './index.css'
const PlayListDail = () => {
    //获取歌单id
    const location = useLocation().search.split('?')[1];
    const urlres = location.replace(/&/g, '","').replace(/=/g, '":"');
    const reqDataString = '{"' + decodeURIComponent(urlres) + '"}';
    const query = JSON.parse(reqDataString);
    //获取歌单详情
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    useEffect(() => {
        dispatch(sendPlaylistDetail(query))
        dispatch(sendPlaylistTracks({ id: query.id, limit: 10, offset: 0 }))
        dispatch(sendRelatedPlaylist(query))
    }, [location])
    const PlaylistDetail = state.PlaylistDetail
    const PlaylistTracks = state.PlaylistTracks
    const RelatedPlaylist = state.RelatedPlaylist
    console.log(RelatedPlaylist);
    //时间戳转换
    function setTime(d) {
        let date = new Date(d);
        date.setMinutes(date.getMinutes() - date.getTimezoneOffset()); // 时区补偿
        return date.toJSON().substr(0, 10) //2022-10-11
    }
    function setsonglong(d) {
        let date = new Date(d);
        date.setMinutes(date.getMinutes() - date.getTimezoneOffset()); // 时区补偿
        return date.toJSON().substr(14, 5) //2022-10-11
    }
    if (PlaylistDetail.playlist !== undefined && PlaylistTracks[0] !== undefined && RelatedPlaylist !== undefined) {
        return (
            <div className="dail-c">
                <div className="dail-c-left">
                    {/* 歌单信息 */}
                    <div className="playlist-introduce">
                        <div className="playlist-img">
                            <div className="msk"></div>
                            <img src={PlaylistDetail.playlist.coverImgUrl} alt="" />
                        </div>
                        <div className="playlist-cntc">
                            <p className="t">{PlaylistDetail.playlist.name}</p>
                            <div className="creator">
                                <a href="/">
                                    <img src={PlaylistDetail.playlist.creator.avatarUrl} alt="" />
                                </a>
                                <span>{PlaylistDetail.playlist.creator.nickname}</span>
                                <span>{setTime(PlaylistDetail.playlist.createTime)} 创建</span>
                            </div>
                            <div className="playlist-btn">
                                <span className="play">
                                    <i></i>
                                    播放
                                </span>
                                <span className="add">
                                </span>
                                <span className="save">
                                    <i></i>
                                    {Math.floor(PlaylistDetail.playlist.subscribedCount / 10000)}万
                                </span>
                                <span className="share">
                                    <i></i>
                                    {Math.floor(PlaylistDetail.playlist.shareCount)}
                                </span>
                                <span className="down">
                                    <i></i>
                                    下载
                                </span>
                                <span className="comment">
                                    <i></i>
                                    评论
                                </span>
                            </div>
                            <div className="playlist-tag">
                                <span>标签:</span>
                                {
                                    PlaylistDetail.playlist.tags.map((item, index) => {
                                        let dom = ''
                                        dom = item.replace("/", "%2F")
                                        dom = dom.replace("&", "%26")
                                        return (
                                            <a key={index} href={`/#/discover/playlist?cat=${dom}&order=hot`}>{item}</a>
                                        )
                                    })
                                }
                            </div>
                            <div className="playlist-description">
                                <p>介绍: {PlaylistDetail.playlist.description}</p>
                            </div>
                        </div>
                    </div>
                    {/* 歌单列表 */}
                    <div className="playlist-tracks">
                        <div className="tracks-dail">
                            <span className="t-title">歌曲列表</span>
                            <span className="t-trackCount">{PlaylistDetail.playlist.trackCount}首歌</span>
                            <span className="t-playCount">
                                播放次数
                                <i>{PlaylistDetail.playlist.playCount}</i>
                                次
                            </span>
                        </div>
                        <div className="tracks-songs">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>歌曲列表</th>
                                        <th>时长</th>
                                        <th>歌手</th>
                                        <th>专辑</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        PlaylistTracks.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td><a href={`/#/song?id=${item.id}`}>{item.name}</a></td>
                                                    <td>{setsonglong(item.dt)}</td>
                                                    <td><a href="">{item.ar[0].name}</a></td>
                                                    <td><a href="">{item.al.name}</a></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <p>更多内容请下载客户端</p>
                            <a className="down" href="https://music.163.com/#/download">点击下载</a>
                        </div>
                    </div>
                </div>
                <div className="dail-c-right">
                    <p className="r-title">喜欢这个歌单的人</p>
                    <ul className="subscribers">
                        {
                            PlaylistDetail.playlist.subscribers.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <img src={item.avatarUrl} alt="" />
                                        <span>{item.nickname}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <p className="r-title">热门歌单</p>
                    <ul className="hot-playlist">
                        {
                            RelatedPlaylist.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={`/#/playlist?id=${item.id}`}><img src={item.coverImgUrl} alt="" /></a>
                                        <p className="p-name">
                                            <a href={`/#/playlist?id=${item.id}`}>{item.name}</a>
                                            <span>by {item.creator.nickname}</span>
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default PlayListDail