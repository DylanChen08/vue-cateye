module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/production-sub-path/'
        : '/' ,
    devServer: {
        proxy: 'http://p1.meituan.net'
    }
}