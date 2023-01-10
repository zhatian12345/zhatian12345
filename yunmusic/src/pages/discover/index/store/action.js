const { Banners, Playlist, CateHot, AlbumNews, Toplist, PlayListMusic,Artistlist } = require('./actionCreators')
const { getBanner, getPlaylist, getCateHot, getAlbumNews, getToplist, getPlayListMusic,getArtistlist } = require('./api')
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
      const result = res.tags.slice(0,5);
      const action = CateHot(result)
      dispatch(action)
    })
  }
}
//发送歌单列表
const sendPlaylist = (d) => {
  return (dispatch) => {
    getPlaylist(d).then((res) => {
      let math = Math.ceil(Math.random() * 100)
      const result = res.playlists.slice(math,math+8);
      const action = Playlist(result)
      dispatch(action)
    })
  }
}

//发送新碟上架
const sendAlbumNews = () => {
  return (dispatch) => {
    getAlbumNews().then((res) => {
      const result = res.albums;
      const action = AlbumNews(result)
      dispatch(action)
    })
  }
}
//发送榜单
const sendToplist = () => {
  return (dispatch) => {
    getToplist().then((res) => {
      const result = res.list.slice(0, 3);
      const action = Toplist(result)
      dispatch(action)
    })
  }
}
//发送歌单音乐
const sendPlayListMusic = (d) => {
  return (dispatch) => {
    getPlayListMusic(d).then((res) => {
      const result = res;
      const action = PlayListMusic(result)
      dispatch(action)
    })
  }
}
//发送入驻歌手
const sendArtistlist = (d) => {
  return (dispatch) => {
    getArtistlist(d).then((res) => {
      const result = res.artists.slice(0,5);
      const action = Artistlist(result)
      dispatch(action)
    })
  }
}
module.exports = { sendBanner, sendPlaylist, sendCateHot, sendAlbumNews, sendToplist, sendPlayListMusic,sendArtistlist } 