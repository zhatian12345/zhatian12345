const { PlaylistCatlist,Playlist } = require('./actionCreators')
const { getPlaylistCatlist,getPlaylist } = require('./api')

//发送歌单分类数据
const sendPlaylistCatlist = () => {
  return (dispatch) => {
    getPlaylistCatlist().then((res) => {
      const result = res;
      const action = PlaylistCatlist(result)
      dispatch(action)
    })
  }
}
//发送歌单列表数据
const sendPlaylist = (d) => {
  return (dispatch) => {
    getPlaylist(d).then((res) => {
      const result = res;
      const action = Playlist(result)
      dispatch(action)
    })
  }
}
module.exports = { sendPlaylistCatlist,sendPlaylist } 