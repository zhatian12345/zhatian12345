import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendPlaylist } from '../../store/action'
import { useLocation } from "react-router-dom";
import './index.css'

const PlayListIfo = () => {
    let location = useLocation().search.split('?')[1];
    let path = decodeURIComponent(location)
    if (location === undefined) {
        path = 'cat=全部'
    }
    else if (location.indexOf('cat') == -1) {
        path = 'cat=全部&order=hot'
    }
    const urlres = path.replace(/&/g, '","').replace(/=/g, '":"');
    const reqDataString = '{"' + urlres + '"}';
    const query = JSON.parse(reqDataString);
    let cat = query.cat
    let order = query.order
    query.limit = 35
    query.offset = 0
    console.log(query);
    const dispatch = useDispatch()
    const state = useSelector(state => state.Playlist)
    useEffect(() => {
        dispatch(sendPlaylist(query))
    }, [])
    console.log(state.playlists);
    const pages = Math.ceil(state.total / 35);
    return (
        <div className="PlayListIfo">
            <ul>
                {
                    state.playlists === undefined ? '' : state.playlists.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className="msk" href="/#/discover/playlist"></a>
                                <img src={item.coverImgUrl} alt="" />
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default PlayListIfo