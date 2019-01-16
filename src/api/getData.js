import request from '../helpers/request'

const URL = {
    INDEX_CAROUSEL: 'common/carousel',
    INDEX_MOVIES: 'common/index',
    TV: 'common/tv',
    INDEX_SHOWS: 'index/shows',
    INDEX_BOOKS: 'index/books',
    MOVIE_RELEASED: 'common/released/:page',
    MOVIE_RELEASED_ALL: 'common/released',
    MOVIE_PREVIEW: 'common/preview/:page',
    MOVIE_PREVIEW_ALL: 'common/preview',
    MOVIE_DETAILS: 'common/movies/:movieId',
    MOVIE_COMMENTS: 'common/comments/:movieId'
}


export default {
    /*
    * 获取轮播图
    * @methods:get
    *
    * */
    getCarousel() {
        return request(URL.INDEX_CAROUSEL)
    },
    getTvList() {
        return request(URL.TV)
    },
    getIndexShowsList() {
        return request(URL.INDEX_SHOWS)
    },

    getIndexBooksList() {
        return request(URL.INDEX_BOOKS)
    },

    /*
    * 分页获取正在上映的电影
    * @methods:get
    * @page:页码
    *
    * */
    getMovieReleasedList({page}) {
        return request(URL.MOVIE_RELEASED.replace(':page', page))
    },


    /*
    * 分页获取未上映的电影
    * @methods:get
    * @page:页码
    *
    * */
    getMoviePreviewList({page}) {
        return request(URL.MOVIE_PREVIEW.replace(':page', page))
    },

    /*
    * 获取全部未上映的电影
    * @methods:get
    *
    * */
    getMoviePreviewListAll() {
        return request(URL.MOVIE_PREVIEW_ALL)
    },

    /*
    * 获取全部正在上映的电影
    * @methods:get
    *
    * */
    getMovieReleasedListAll() {
        return request(URL.MOVIE_RELEASED_ALL)
    },

    /*
    * 获取电影的评论
    * @methods: get
    * @params: movieId
    *
    * */
    getMoviesComments({movieId}) {
        return request(URL.MOVIE_COMMENTS.replace(':movieId', movieId))
    },

    /*
    * 获取指定单个电影详情
    * 包括正在上映,未上映的电影
    * @params:movieId
    * @method:get
    *
    * */
    getMovieDetails({movieId}) {
        return request(URL.MOVIE_DETAILS.replace(':movieId', movieId))
    }


}