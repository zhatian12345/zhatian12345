/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
    inputValue: '',
    PlaylistCatlist: {},
    Playlist: {}
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        //歌单分类
        case 'PlaylistCatlist':
            newState.PlaylistCatlist = action.data
            return newState; 
        //歌单列表
        case 'Playlist':
            newState.Playlist = action.data
            return newState; 
        default: return state;
    }
}
