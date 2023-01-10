/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
    inputValue: '',
    banners: [],
    playlists:[],
    catehot:[],
    albumnews:[],
    toplist:[],
    playListMusic:[],
    Artistlist:[]
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        //轮播图
        case 'Banner':
            newState.banners = action.data
            return newState;
        //热门分类
        case 'CateHot':
            newState.catehot = action.data
            return newState;
        //歌单
        case 'Playlist':
            newState.playlists = action.data
            return newState;
        //新碟上架
        case 'AlbumNews':
            newState.albumnews = action.data
            return newState;
        //榜单
        case 'Toplist':
            newState.toplist = action.data
            return newState;
        //榜单音乐
        case 'PlayListMusic':
            newState.playListMusic.push(action.data)
            return newState;   
        case 'Artistlist':
            newState.Artistlist=action.data
            return newState;   
        default: return state;
    }
}
