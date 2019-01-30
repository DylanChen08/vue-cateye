import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes = [

    {
        //设置默认路由，一开始默认进入主页
        path: '/',
        name: '',
        meta: {showBottomBar: true},
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        redirect: "/pages/index"
    },
    {
        path: '/test',
        name: 'test',
        component: () => import( '../components/common/test.vue') //测试组件
    },
    {
        path: '/pages/index',
        name: 'index',
        meta: {showBottomBar: true},
        component: () => import( '../components/pages/Index/index.vue'), //首页组件
        children: [
            {
                path: '/pages/index/carousel',
                name: 'carousel',
                component: () => import( '../components/pages/Index/carousel.vue'), //轮播图
            }, {
                path: '/pages/index/indexBooks',
                name: 'indexBooks',
                component: () => import( '../components/pages/Index/indexBooks.vue'), //首页-书籍
            }, {
                path: '/pages/index/indexMovies',
                name: 'indexMovies',
                component: () => import( '../components/pages/Index/indexMovies.vue'),//首页-电影
            }, {
                path: '/pages/index/indexTvSeries',
                name: 'indexTvSeries',
                component: () => import( '../components/pages/Index/indexTvSeries.vue'),//首页-电视剧
            }, {
                path: '/pages/index/indexVarietyShows',
                name: 'indexVarietyShows',
                component: () => import( '../components/pages/Index/indexVarietyShows.vue'),//首页-综艺
            },
        ]
    },
    {
        path: '/pages/cinemas',
        name: 'cinemas',
        meta: {showBottomBar: true},
        component: () => import( '../components/pages/Cinemas/cinemas.vue') //电影院组件
    },
    {
        path: '/pages/movies',
        name: 'movies',
        meta: {showBottomBar: true},
        component: () => import( '../components/pages/Movies/movies.vue'),//电影组件
        children: [
            {
                path: '/pages/movies/moviePreShows',
                name: 'moviesPreShows',
                meta: {showBottomBar: true},
                component: () => import( '../components/pages/Movies/moviePreShows.vue'),//电影-未上映
            }, {
                path: '/pages/movies/movieReleased',
                name: 'moviesReleased',
                meta: {showBottomBar: true},
                component: () => import( '../components/pages/Movies/movieReleased.vue'),//电影-正在上映
            },
        ]
    },
    {
        path: '/pages/movies/movieDetails/:movieId',
        name: 'moviesDetails',
        component: () => import( '../components/pages/Movies/movieDetails.vue'), //获取单个电影详情
    },
    {
        path: '/pages/tv/tvSeriesDetails/:tvId',
        name: 'tvSeriesDetails',
        component: () => import( '../components/pages/TvSeries/TvSeriesDetails.vue'), //获取单个电影详情
    },
    {
        path: '/pages/books/bookDetails/:bookId',
        name: 'bookDetails',
        component: () => import( '../components/pages/Books/bookDetails.vue'), //获取单个书籍详情
    },
    {
        path: '/pages/shows/showDetails/:showId',
        name: 'showDetails',
        component: () => import( '../components/pages/VarietyShows/varietyShowDetails.vue'), //获取单个综艺详情
    },

    {
        path: '/pages/personal-center',
        name: 'personal-center',
        meta: {showBottomBar: true},
        component: () => import( '../components/pages/PersonalCenter/personalCenter.vue') //个人中心
    },
    {
        path: '/pages/movies/comments/:movieId',
        name: 'comments',
        component: () => import( '../components/pages/Movies/movieShortComment.vue')//获取单个电影评论组件
    },
    {
        path: '/pages/index/indexSearch',
        name: 'indexSearch',
        component: () => import( '../components/pages/Index/indexSearch.vue'),//首页-搜索
    },

]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})