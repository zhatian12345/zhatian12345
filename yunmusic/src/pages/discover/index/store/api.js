import request from '../../../../request/request';


//首页功能
//首页轮播图
export let getBanner = ()=> {return request("get",'/banner')}
//热门分类
export let getCateHot = ()=> {return request("get",'/playlist/hot')}
//歌单
export let getPlaylist = (d)=> {return request("get",'/top/playlist',d)}
//歌单歌曲
export let getPlayListMusic = (d)=> {return request("get",'/playlist/track/all',d)}
//新碟上架
export let getAlbumNews = ()=> {return request("get",'/album/newest')}
//榜单
export let getToplist = ()=> {return request("get",'/toplist')}
//入驻歌手
export let getArtistlist = ()=> {return request("get",'/artist/list')}
