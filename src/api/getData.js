import request from '../helpers/request'

const URL = {
    INDEX_CAROUSEL: 'common/carousel',
    INDEX_MOVIES: 'common/index',
    INDEX_TV: 'index/tv',
    INDEX_SHOWS: 'index/shows',
    INDEX_BOOKS: 'index/books',
    MOVIES_RELEASED: 'common/released',
    MOVIES_PREVIEW: 'common/preview',
    MOVIES_DETAILS: 'common/movies/:movieId'

}


export default {
    //首页相关api
    getIndexMoviesList() {
        return request(URL.INDEX_MOVIES)
    },
    //获取轮播图
    getCarousel() {
        return request(URL.INDEX_CAROUSEL)
    },
    getIndexTvList() {
        return request(URL.INDEX_TV)
    },
    getIndexShowsList() {
        return request(URL.INDEX_SHOWS)
    },
    getIndexBooksList() {
        return request(URL.INDEX_BOOKS)
    },

    //获取正在上映电影
    getMoviesReleasedList() {
        return request(URL.MOVIES_RELEASED)
    },
    //获取未上映电影
    getMoviesPreviewList() {
        return request(URL.MOVIES_PREVIEW)
    },

    /*
    *
    * @params:movieId
    * 获取指定单个电影详情
    * 包括正在上映,未上映的电影
    *
    * */
    getMoviesDetails({movieId}) {
        return request(URL.MOVIES_DETAILS.replace(':movieId', movieId))
    }
}