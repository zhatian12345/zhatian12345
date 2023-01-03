import request from './request.js';


//首页轮播图
export let getBanner = ()=> {return request("get",'/banner')}
//搜索
export let getsearch = (d)=> {return request("get",'/search',d)}
//获取歌曲
export let getSong = (d)=> {return request("get",'/song/url',d)}