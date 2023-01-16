import React, { useState, useEffect } from "react";

import { Pagination } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { sendPlaylist } from '../../store/action'
import { useLocation  } from "react-router-dom";
import './index.css'

const PlayListIfo = () => {
    let location = useLocation().search.split('?')[1];
    if (location === undefined) {
        location = 'cat=全部'
    }
    else if (location.indexOf('cat') === -1) {
        location = location+'&cat=全部'
    }
    const urlres = location.replace(/&/g, '","').replace(/=/g, '":"');
    const reqDataString = '{"' + decodeURIComponent(urlres) + '"}';
    const query = JSON.parse(reqDataString);
    let offset = query.offset
    query.offset = offset===undefined?0:Number(offset)
    query.limit = 35
    const dispatch = useDispatch()
    const state = useSelector(state => state.Playlist)
    useEffect(() => {
        dispatch(sendPlaylist(query))
    }, [location])
    // 页码
    const pages = state.total === undefined ? 1 : Math.ceil(state.total / 35);
    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a>&lt;上一页</a>;
        }
        if (type === 'next') {
            return <a>下一页&gt;</a>;
        }
        return originalElement;
    };
    const [current, setCurrent] = useState(1);
    const onChange = (page) => {
        setCurrent(page);
        window.location.href=`/#/discover/playlist?cat=${query.cat}&order=hot&offset=${Number((page-1)*35)}&limit=35`
    };
    return (
        <div className="PlayListIfo">
            <ul className="list">
                {
                    // 歌单列表
                    state.playlists === undefined ? '' : state.playlists.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className="msk" href={`/#/playlist?id=${item.id}`}></a>
                                <img src={item.coverImgUrl} alt="" />
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
            <Pagination className="pages" current={current} onChange={onChange} showSizeChanger={false} total={pages * 10} itemRender={itemRender} />
        </div>
    )
}
export default PlayListIfo