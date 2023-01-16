import request from '../../../request/request';


//歌单
//歌单详情
export let getPlaylistDetail= (d)=> {return request("get",'/playlist/detail',d)}
//歌单歌曲
export let getPlaylistTracks= (d)=> {return request("get",'/playlist/track/all',d)}
//相关歌单
export let getRelatedPlaylist= (d)=> {return request("get",'/related/playlist',d)}

//歌曲
//歌曲内容
export let getSongDetail= (d)=> {return request("get",'/song/detail',d)}
//歌曲歌词
export let getSongLyric= (d)=> {return request("get",'/lyric',d)}