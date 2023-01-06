/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
    inputValue: '',
    banners: [],
    playlists:[],
    catehot:[],
    searchlist:[],
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        //轮播图
        case 'Banner':
            newState.banners = action.data
            return newState;
        //轮播图
        case 'Playlist':
            newState.playlists = action.data
            return newState;
        //搜索
        case 'CateHot':
            newState.catehot = action.data
            return newState;
        case 'Search':
            newState.searchlist = action.data
            return newState;
        default: return state;
    }
}
