import request from '../helpers/request'

const URL = {
    INDEX_MOVIES: '/index/movies',
    INDEX_TV: 'index/tv',
    INDEX_SHOWS: 'index/shows',
    INDEX_BOOKS: 'index/books',
    MOVIES_RELEASED:'movies/released'

}


export default {
    //首页相关api
    getIndexMoviesList() {
        return request(URL.INDEX_MOVIES)
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
    //电影相关api
    getMoviesReleasedList() {
        return request(URL.MOVIES_RELEASED)
    },
}