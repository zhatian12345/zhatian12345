//歌单分类
export const PlaylistDetail = (data) => {
    return {
        type: 'PlaylistDetail',
        data
    }
}
//歌单歌曲
export const PlaylistTracks = (data) => {
    return {
        type: 'PlaylistTracks',
        data
    }
}
//相关歌单
export const RelatedPlaylist = (data) => {
    return {
        type: 'RelatedPlaylist',
        data
    }
}
//歌曲详情
export const SongDetail = (data) => {
    return {
        type: 'SongDetail',
        data
    }
}
//歌曲歌词
export const SongLyric = (data) => {
    return {
        type: 'SongLyric',
        data
    }
}

