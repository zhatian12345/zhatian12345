const { PlaylistDetail,PlaylistTracks,RelatedPlaylist,SongDetail,SongLyric } = require('./actionCreators')
const { getPlaylistDetail,getPlaylistTracks,getRelatedPlaylist,getSongDetail,getSongLyric } = require('./api')

//发送歌单分类数据
const sendPlaylistDetail = (d) => {
  return (dispatch) => {
    getPlaylistDetail(d).then((res) => {
      const result = res;
      const action = PlaylistDetail(result)
      dispatch(action)
    })
  }
}
// 歌单歌曲
const sendPlaylistTracks = (d) => {
  return (dispatch) => {
    getPlaylistTracks(d).then((res) => {
      const result = res.songs;
      const action = PlaylistTracks(result)
      dispatch(action)
    })
  }
}
// 相关歌单
const sendRelatedPlaylist = (d) => {
  return (dispatch) => {
    getRelatedPlaylist(d).then((res) => {
      const result = res.playlists;
      const action = RelatedPlaylist(result)
      dispatch(action)
    })
  }
}
// 歌曲信息 
const sendSongDetail = (d) => {
  return (dispatch) => {
    getSongDetail(d).then((res) => {
      const result = res.songs;
      const action = SongDetail(result)
      dispatch(action)
    })
  }
}
// 歌曲歌词
const sendSongLyric = (d) => {
  return (dispatch) => {
    getSongLyric(d).then((res) => {
      const result = res;
      const action = SongLyric(result)
      dispatch(action)
    })
  }
}
module.exports = { sendPlaylistDetail,sendPlaylistTracks,sendRelatedPlaylist,sendSongDetail,sendSongLyric } 