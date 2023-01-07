import request from './request.js';


//搜索
export let getSearch = (d)=> {return request("get",'/search',d)}
//首页轮播图
export let getBanner = ()=> {return request("get",'/banner')}
//热门分类
export let getCateHot = ()=> {return request("get",'/playlist/hot')}
//歌单
export let getPlaylist = (d)=> {return request("get",'/top/playlist',d)}
//新碟上架
export let getAlbumNews = ()=> {return request("get",'/album/newest')}
//获取歌曲
export let getSong = (d)=> {return request("get",'/song/url',d)}
