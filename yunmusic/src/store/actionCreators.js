//轮播图
export const Banners = (data) => {
    return {
        type: 'Banner',
        data
    }
}
//歌单
export const Playlist = (data) => {
    return {
        type: 'Playlist',
        data
    }

}
//热门分类
export const CateHot = (data) => {
    return {
        type: 'CateHot',
        data
    }

}
//搜索
export const Search = (data) => {
    return {
        type: 'Search',
        data
    }

}
