import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes = [


    {
        //设置默认路由，一开始默认进入主页
        path: '*',
        name: '',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/pages/Index/index.vue')
    },
    {
        path: '/test',
        name: 'test',

        component: () => import(/* webpackChunkName: "about" */ '../components/common/test.vue')
    },
    {
        path: '/pages/index',
        name: 'index',
        meta: {showBottomBar: true},
        component: () => import(/* webpackChunkName: "about" */ '../components/pages/Index/index.vue'),
        children: [
            {
                path: '/pages/index/carousel',
                name: 'carousel',
                component: () => import(/* webpackChunkName: "about" */ '../components/pages/Index/carousel.vue'),
            }, {
                path: '/pages/index/indexBooks',
                name: 'indexBooks',
                component: () => import(/* webpackChunkName: "about" */ '../components/pages/Index/indexBooks.vue'),
            }, {
                path: '/pages/index/indexMovies',
                name: 'indexMovies',
                component: () => import(/* webpackChunkName: "about" */ '../components/pages/Index/indexMovies.vue'),
            }, {
                path: '/pages/index/indexTvSeries',
                name: 'indexTvSeries',
                component: () => import(/* webpackChunkName: "about" */ '../components/pages/Index/indexTvSeries.vue'),
            }, {
                path: '/pages/index/indexVarietyShows',
                name: 'indexVarietyShows',
                component: () => import(/* webpackChunkName: "about" */ '../components/pages/Index/indexVarietyShows.vue'),
            },
        ]
    },
    {
        path: '/pages/cinemas',
        name: 'cinemas',
        meta: {showBottomBar: true},
        component: () => import(/* webpackChunkName: "about" */ '../components/pages/Cinemas/cinemas.vue')
    },
    {
        path: '/pages/movies',
        name: 'movies',
        meta: {showBottomBar: true},
        component: () => import(/* webpackChunkName: "about" */ '../components/pages/Movies/movies.vue'),
        children: [
            {
                path: '/pages/movies/moviesPreShows',
                name: 'moviesPreShows',
                component: () => import(/* webpackChunkName: "about" */ '../components/pages/Movies/moviesPreShows.vue'),
            }, {
                path: '/pages/movies/moviesReleased',
                name: 'moviesReleased',
                component: () => import(/* webpackChunkName: "about" */ '../components/pages/Movies/moviesReleased.vue'),
            },
        ]
    },
    {
        path: '/pages/movies/moviesDetails',
        name: 'moviesDetails',
        component: () => import(/* webpackChunkName: "about" */ '../components/pages/Movies/moviesDetails.vue'),
    },
    {
        path: '/pages/personal-center',
        name: 'personal-center',
        meta: {showBottomBar: true},
        component: () => import(/* webpackChunkName: "about" */ '../components/pages/PersonalCenter/personalCenter.vue')
    },
    {
        path: '/pages/shows',
        name: 'shows',
        meta: {showBottomBar: true},
        component: () => import(/* webpackChunkName: "about" */ '../components/pages/Shows/shows.vue')
    },

]


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})