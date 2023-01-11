import request from '../../../../request/request';


//歌单功能
//歌单分类
export let getPlaylistCatlist = ()=> {return request("get",'/playlist/catlist')}
//歌单列表
export let getPlaylist = (d)=> {return request("get",'/top/playlist',d)}
