const { Search, Banners, Playlist,CateHot } = require('./actionCreators')
const { getBanner, getSearch, getPlaylist, getCateHot } = require('../request/api')
//发送轮播图数据
const sendBanner = () => {
  return (dispatch) => {
    getBanner().then((res) => {
      const result = res.banners;
      const action = Banners(result)
      dispatch(action)
    })
  }
}
//发送歌单数据
const sendPlaylist = (d) => {
  return (dispatch) => {
    getPlaylist(d).then((res) => {
      const result = res.playlists;
      const action = Playlist(result)
      dispatch(action)
    })
  }
}
//发送热门分类
const sendCateHot = (d) => {
  return (dispatch) => {
    getCateHot(d).then((res) => {
      const result = res.tags;
      const action = CateHot(result)
      dispatch(action)
    })
  }
}
//搜索歌曲数据
const sendSearch = (keywords) => {
  return (dispatch) => {
    getSearch({ keywords: keywords }).then((res) => {
      const result = res.result.songs;
      const action = Search(result)
      dispatch(action)
    })
  }
}
module.exports = { sendBanner, sendSearch, sendPlaylist,sendCateHot } 