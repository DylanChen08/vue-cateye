import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes = [

    {
        //设置默认路由，一开始默认进入主页
        path: '*',
        name: '',
        meta: {showBottomBar: true},
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( '../components/pages/Index/index.vue')
    },
    {
        path: '/test',
        name: 'test',

        component: () => import( '../components/common/test.vue')
    },
    {
        path: '/pages/index',
        name: 'index',
        meta: {showBottomBar: true},
        component: () => import( '../components/pages/Index/index.vue'),
        children: [
            {
                path: '/pages/index/carousel',
                name: 'carousel',
                component: () => import( '../components/pages/Index/carousel.vue'),
            }, {
                path: '/pages/index/indexBooks',
                name: 'indexBooks',
                component: () => import( '../components/pages/Index/indexBooks.vue'),
            }, {
                path: '/pages/index/indexMovies',
                name: 'indexMovies',
                component: () => import( '../components/pages/Index/indexMovies.vue'),
            }, {
                path: '/pages/index/indexTvSeries',
                name: 'indexTvSeries',
                component: () => import( '../components/pages/Index/indexTvSeries.vue'),
            }, {
                path: '/pages/index/indexVarietyShows',
                name: 'indexVarietyShows',
                component: () => import( '../components/pages/Index/indexVarietyShows.vue'),
            },
        ]
    },
    {
        path: '/pages/cinemas',
        name: 'cinemas',
        meta: {showBottomBar: true},
        component: () => import( '../components/pages/Cinemas/cinemas.vue')
    },
    {
        path: '/pages/movies',
        name: 'movies',
        meta: {showBottomBar: true},
        component: () => import( '../components/pages/Movies/movies.vue'),
        children: [
            {
                path: '/pages/movies/moviePreShows',
                name: 'moviesPreShows',
                meta: {showBottomBar: true},
                component: () => import( '../components/pages/Movies/moviePreShows.vue'),
            }, {
                path: '/pages/movies/movieReleased',
                name: 'moviesReleased',
                meta: {showBottomBar: true},
                component: () => import( '../components/pages/Movies/movieReleased.vue'),
            },
        ]
    },
    {
        path: '/pages/movies/movieDetails/:movieId',
        name: 'moviesDetails',
        component: () => import( '../components/pages/Movies/movieDetails.vue'),
    },
    {
        path: '/pages/personal-center',
        name: 'personal-center',
        meta: {showBottomBar: true},
        component: () => import( '../components/pages/PersonalCenter/personalCenter.vue')
    },
    {
        path: '/pages/shows',
        name: 'shows',
        meta: {showBottomBar: true},
        component: () => import( '../components/pages/Shows/shows.vue')
    },
    {
        path: '/pages/movies/comments/:movieId',
        name: 'comments',
        component: () => import( '../components/pages/Movies/movieShortComment.vue')
    },

]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})