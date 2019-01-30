import request from '../helpers/request'

const URL = {
    INDEX_CAROUSEL: 'common/carousel',
    TV: 'common/tv',
    TV_DETAILS: 'common/tv/:tvId',
    VARIETY_SHOWS: 'common/shows',
    VARIETY_SHOWS_DETAILS: 'common/show/:showId',
    BOOKS: 'common/books',
    BOOK_DETAILS: 'common/books/:bookId',
    MOVIE_RELEASED: 'common/released/:page',
    MOVIE_RELEASED_ALL: 'common/released',
    MOVIE_PREVIEW: 'common/preview/:page',
    MOVIE_PREVIEW_ALL: 'common/preview',
    MOVIE_DETAILS: 'common/movies/:movieId',
    MOVIE_COMMENTS: 'common/comments/:movieId',
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

    /*
    * 获取指定单个电视剧详情
    * 包括正在上映,未上映的电视剧
    * @params:tvId
    * @method:get
    *
    * */
    getTvDetails({tvId}) {
        return request(URL.TV_DETAILS.replace(':tvId', tvId))
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
    },


    /*
    * 获取全部书籍信息
    * @methods:get
    *
    * */
    getBookList() {
        return request(URL.BOOKS)
    },

    /*
    * 获取指定单个书籍详情
    * @params:bookId
    * @method:get
    *
    * */
    getBookDetails({bookId}) {
        return request(URL.BOOK_DETAILS.replace(':bookId', bookId))
    },

    /*
    * 获取全部综艺信息
    * @methods:get
    *
    * */
    getShowList() {
        return request(URL.VARIETY_SHOWS)
    },

    /*
    * 获取指定单个综艺详情
    * @params:bookId
    * @method:get
    *
    * */
    getShowDetails({showId}) {
        return request(URL.VARIETY_SHOWS_DETAILS.replace(':showId', showId))
    },


}