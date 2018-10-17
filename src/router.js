import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // {
        //   path: '/',
        //   name: 'home',
        //   component: Home
        // },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // },

        {
            //设置默认路由，一开始默认进入主页
            path: '*',
            name: '',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './components/pages/Index/index.vue')
        },
        {
            path: '/pages/index',
            name: 'index',
            component: () => import(/* webpackChunkName: "about" */ './components/pages/Index/index.vue'),
            children: [
                {
                    path: '/pages/index/carousel',
                    name: 'carousel',
                    component: () => import(/* webpackChunkName: "about" */ './components/pages/Index/carousel.vue'),
                }, {
                    path: '/pages/index/indexBooks',
                    name: 'indexBooks',
                    component: () => import(/* webpackChunkName: "about" */ './components/pages/Index/indexBooks.vue'),
                }, {
                    path: '/pages/index/indexMovies',
                    name: 'indexMovies',
                    component: () => import(/* webpackChunkName: "about" */ './components/pages/Index/indexMovies.vue'),
                }, {
                    path: '/pages/index/indexTvSeries',
                    name: 'indexTvSeries',
                    component: () => import(/* webpackChunkName: "about" */ './components/pages/Index/indexTvSeries.vue'),
                }, {
                    path: '/pages/index/indexVarietyShows',
                    name: 'indexVarietyShows',
                    component: () => import(/* webpackChunkName: "about" */ './components/pages/Index/indexVarietyShows.vue'),
                },
            ]
        },
        {
            path: '/pages/cinemas',
            name: 'cinemas',

            component: () => import(/* webpackChunkName: "about" */ './components/pages/Cinemas/cinemas.vue')
        },
        {
            path: '/pages/movies',
            name: 'movies',
            component: () => import(/* webpackChunkName: "about" */ './components/pages/Movies/movies.vue'),
            children: [
                {
                    path: '/pages/movies/moviesPreShows',
                    name: 'subPage',
                    component: () => import(/* webpackChunkName: "about" */ './components/pages/Movies/moviesPreShows.vue'),
                }, {
                    path: '/pages/movies/moviesReleased',
                    name: 'subPage',
                    component: () => import(/* webpackChunkName: "about" */ './components/pages/Movies/moviesReleased.vue'),
                },
            ]
        },
        {
            path: '/pages/personal-center',
            name: 'personal-center',

            component: () => import(/* webpackChunkName: "about" */ './components/pages/PersonalCenter/personalCenter.vue')
        },
        {
            path: '/pages/shows',
            name: 'shows',

            component: () => import(/* webpackChunkName: "about" */ './components/pages/Shows/shows.vue')
        },

    ]
})
