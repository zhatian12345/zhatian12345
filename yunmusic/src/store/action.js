const { Search, Banners, Playlist,CateHot,AlbumNews } = require('./actionCreators')
const { getBanner, getSearch, getPlaylist, getCateHot,getAlbumNews } = require('../request/api')
//搜索歌曲数据
const sendSearch = (d) => {
  return (dispatch) => {
    getSearch(d).then((res) => {
      const result = res.result.songs;
      const action = Search(result)
      dispatch(action)
    })
  }
}
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

//发送新碟上架
const sendAlbumNews = () => {
  return (dispatch) => {
    getAlbumNews().then((res) => {
      console.log(res);
      const result = res.albums;
      const action = AlbumNews(result)
      dispatch(action)
    })
  }
}
module.exports = { sendSearch,sendBanner, sendPlaylist,sendCateHot,sendAlbumNews } 