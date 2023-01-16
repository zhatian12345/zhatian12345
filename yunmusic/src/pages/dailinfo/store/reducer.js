/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
    inputValue: '',
    PlaylistDetail: {},
    PlaylistTracks:[],
    RelatedPlaylist:[],
    SongDetail:[],
    SongLyric:{}
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        //歌单分类
        case 'PlaylistDetail':
            newState.PlaylistDetail = action.data
            return newState; 
        case 'PlaylistTracks':
            newState.PlaylistTracks = action.data
            return newState; 
        case 'RelatedPlaylist':
            newState.RelatedPlaylist = action.data
            return newState; 
        case 'SongDetail':
            newState.SongDetail = action.data
            return newState; 
        case 'SongLyric':
            newState.SongLyric = action.data
            return newState; 
        default: return state;
    }
}
