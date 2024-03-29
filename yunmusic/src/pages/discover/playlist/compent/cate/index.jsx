import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendPlaylistCatlist } from '../../store/action'
import { useLocation,Link } from "react-router-dom";
import './index.css'

const PlayListCate = () => {
    const dispatch = useDispatch()
    const plistArr = useSelector((state) => state);
    useEffect(() => {
        dispatch(sendPlaylistCatlist())
    }, [])
    //歌单分类
    const cate = plistArr.PlaylistCatlist
    const playlistcate = []
    //分类数组结合
    if (cate.sub !== undefined) {
        for (let i in cate.categories) {
            playlistcate.push({ title: cate.categories[i], arr: [] })
            for (let item of cate.sub) {
                if (item.category == i) {
                    playlistcate[i].arr.push(item)
                };
            }
        }
    }
    //歌单标题名称
    let location = useLocation().search.split('?')[1];
    if(location===undefined) {
        location = 'cat=全部'
    }
    else if (location.indexOf('cat') === -1) {
        location = location+'&cat=全部'
    }
    const urlres= location.replace(/&/g, '","').replace(/=/g, '":"');
	const reqDataString = '{"' + decodeURIComponent(urlres) + '"}';
	const query = JSON.parse(reqDataString);
    let cat = query.cat
    let order = query.order
    console.log(query);
    //歌单选择窗口显示
    const [isshow,setisshow] = useState(false)
    const checkshow = ()=>{
        setisshow(!isshow)
    }
    return (
        <div className="PlayListCate">
            <div className="cateTitle">
                <h3>{cat}</h3>
                <span onClick={checkshow}>全部分类</span>
                <a href={`#/discover/playlist?${cat=='全部'?'order=hot':'cat='+cat+'&order=hot'}`}>热门</a>
            </div>
            <div className={isshow?'cate':"nocate"}>
                <div className="catetop">
                    <i className="icn"></i>
                </div>
                <div className="catebody">
                    <h3>
                        <a href="#/discover/playlist">全部风格</a>
                    </h3>
                    {playlistcate.map((item, index) => {
                        return (
                            <dl key={index}>
                                <dt>
                                    <h4>{item.title}</h4>
                                </dt>
                                <dd>
                                    {
                                        item.arr.map((itm, inx) => {
                                            let dom = ''
                                            dom=itm.name.replace("/","%2F")
                                            dom=dom.replace("&","%26")
                                            return (
                                                <div key={inx}>
                                                    <a className={cat===itm.name?'checked':''} href={`#/discover/playlist?cat=${dom}${order=='hot'?'&order=hot':''}`}>{itm.name}</a>
                                                    <span>|</span>
                                                </div>
                                            )
                                        })
                                    }
                                </dd>

                            </dl>
                        )
                    })}
                </div>
                <div className="catebottom"></div>
            </div>
        </div>
    )
}
export default PlayListCate