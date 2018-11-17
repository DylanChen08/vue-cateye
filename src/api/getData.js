import request from '../helpers/request'

const URL = {
    INDEX_CAROUSEL: 'common/carousel',
    INDEX_MOVIES: 'common/index',
    INDEX_TV: 'index/tv',
    INDEX_SHOWS: 'index/shows',
    INDEX_BOOKS: 'index/books',
    MOVIES_RELEASED: 'common/released',
    MOVIES_PREVIEW: 'common/preview',
    MOVIES_DETAILS: 'common/movies/:movieId',
    MOVIES_COMMENTS: 'common/comments/:movieId',
}


export default {
    /*
    * 获取轮播图
    * methods:get
    *
    * */
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

    /*
    * 获取正在上映的电影
    * @methods:get
    *
    * */
    getMovieReleasedList() {
        return request(URL.MOVIES_RELEASED)
    },

    /*
    * 获取全部未上映的电影
    * @methods:get
    *
    * */
    getMoviePreviewList() {
        return request(URL.MOVIES_PREVIEW)
    },

    /*
    * 获取电影的评论
    * @methods: get
    * @params: movieId
    *
    * */
    getMoviesComments({movieId}) {
        return request(URL.MOVIES_COMMENTS.replace(':movieId', movieId))
    },

    /*
    * 获取指定单个电影详情
    * 包括正在上映,未上映的电影
    * @params:movieId
    * @method:get
    *
    * */
    getMovieDetails({movieId}) {
        return request(URL.MOVIES_DETAILS.replace(':movieId', movieId))
    }


}