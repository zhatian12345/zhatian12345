const { getBanner } = require('../request/api')
//轮播图数据
let bannerArr = []
let banner = getBanner().then((res) => {
        res.banners.forEach((item) => {
            bannerArr.push(item)
        })
    })
//轮播图执行函数
const sendBanner = () => {
    return {
        type: 'banner',
        value: bannerArr
    }
}

module.exports = { sendBanner } 