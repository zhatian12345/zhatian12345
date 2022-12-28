import request from './request.js';

//搜索
export let getsearch = (d)=> {return request("get",'/search',d)}
//获取歌曲
export let getSong = (d)=> {return request("get",'/song/url',d)}