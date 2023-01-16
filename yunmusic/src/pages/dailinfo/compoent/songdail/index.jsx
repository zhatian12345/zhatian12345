import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendPlaylistDetail, sendPlaylistTracks, sendRelatedPlaylist, sendSongDetail,sendSongLyric } from '../../store/action'
import { useLocation } from "react-router-dom";
import './index.css'
const SongsDail = () => {
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
        dispatch(sendSongDetail({ ids: query.id }))
        dispatch(sendSongLyric(query))
    }, [location])
    const PlaylistDetail = state.PlaylistDetail
    const PlaylistTracks = state.PlaylistTracks
    const RelatedPlaylist = state.RelatedPlaylist
    const SongDetail = state.SongDetail[0]
    const SongLyric = state.SongLyric
    //歌词转换
    function lyric(){
        let lyc = []
        let arr = SongLyric.lrc.lyric.split('\n');
        arr.forEach((item,index)=>{
            lyc.push(item.split(']').splice(1,1))
        })
        return lyc
    }
    //歌词展开
    const [openlyc,setopenlyc] = useState(false)
    function open(){
        setopenlyc(!openlyc)
    }
    if (PlaylistDetail.playlist !== undefined && PlaylistTracks[0] !== undefined && RelatedPlaylist !== undefined && SongDetail !== undefined && SongLyric.lrc!==undefined) {
        return (
            <div className="dail-c">
                <div className="dail-c-left">
                    {/* 歌曲信息 */}
                    <div className="song-introduce">
                        {/* 歌曲封面 */}
                        <div className="song-img">
                            <div className="msk"></div>
                            <img src={SongDetail.al.picUrl} alt="" />
                        </div>
                        <div className="song-cntc">
                            <p className="t">{SongDetail.name}</p>
                            <div className="creator">
                                <p>歌手:
                                    <a href="/">
                                        {SongDetail.ar[0].name}
                                    </a>
                                </p>
                                <p>所属专辑:
                                    <a href="/">
                                        {SongDetail.al.name}
                                    </a>
                                </p>
                            </div>
                            <div className="song-btn">
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
                            <div className={openlyc?'openlyc':'noopen'}>
                                {lyric(SongLyric.lrc.lyric).map((item,index)=>{
                                    return (
                                        <p key={index}>{item}</p>
                                    )
                                })}
                            </div>
                            <p onClick={open} className="open">{openlyc?'收回':'展开'}</p>
                        </div>
                    </div>
                </div>
                <div className="dail-c-right">
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
export default SongsDail