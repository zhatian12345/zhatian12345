import './index.css'
import store from '../../store/store'
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { sendArtistlist } from '../../store/action'
const User = () => {
    const dispatch = useDispatch()
    const indextArr = useSelector(state => state)
    useEffect(() => {
        dispatch(sendArtistlist({ cat: 5001 }))
    }, [])
    //入驻歌手
    const artistlist = indextArr.Artistlist
    return (
        <div className="user">
            <div className="login">
                <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                <button>用户登录</button>
            </div>
            <div className='userlist artist'>
                <h3 className='title'>
                    热门歌手
                    <a href="/">查看更多></a>
                </h3>
                <ul>
                    {
                        artistlist[0] === undefined ? '' : artistlist.map((item, index) => {
                            console.log(item);
                            return (
                                <li key={index}>
                                    <a href="/">
                                        <img src={item.img1v1Url} alt="" />
                                        <h4>{item.name}</h4>
                                        <p>{item.alias[0]}</p>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default User