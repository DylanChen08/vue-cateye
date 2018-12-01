import getData from '../../api/getData'

const state = {
    movieId: null,
    previewPage: 1,
    releasedPage: 1,
}
const getters = {
    movieId: state => state.movieId,
}
const mutations = {
    setMovieId(state, payload) {
        state.movieId = payload.movieId
    },
    setPreViewPage(state, payload) {
        state.previewPage = payload.previewPage
    },
    setReleasedPage(state, payload) {
        state.releasedPage = payload.releasedPage
    },

}
const actions = {
    async getCarousel() {
        let res = await getData.getCarousel()
        return res
    },
    /*
    * 获取正在上映的电影的数据
    * @page:页码，用于分页
    *
    * */
    async getMovieReleased({commit}, {page}) {
        let res = await getData.getMovieReleasedList({page})
        commit('setReleasedPage', {page})
        return res
    },
    /*
    * 获取未上映电影的数据
    * @page:页码，用于分页
    *
    * */
    async getMoviePreview({commit}, {page}) {
        let res = await getData.getMoviePreviewList({page})
        commit('setPreViewPage', {page})
        return res
    },

    //获取指定id的电影的细节
    async getMovieDetails({commit}, {movieId}) {
        let res = await getData.getMovieDetails({movieId})
        commit('setMovieId', {movieId})
        return res
    },

    //获取指定id的电影的评论
    async getMovieComments({commit}, {movieId}) {
        let res = await getData.getMoviesComments({movieId})
        commit('setMovieId', {movieId})
        return res
    }
    // getIndexTvList() {
    //     return getData.getIndexTvList().then(() => {
    //     }).catch((err) => {
    //         // console.log('modules/getData.js/getIndexTvList error')
    //         // console.log(err)
    //     })
    // },
    // getIndexShowsList() {
    //     return getData.getIndexShowsList().then(() => {
    //     }).catch((err) => {
    //         // console.log('modules/getData.js/getIndexShowsList error')
    //         // console.log(err)
    //     })
    // },
    // getIndexBookList() {
    //     return getData.getIndexBooksList().then(() => {
    //     }).catch((err) => {
    //         // console.log('modules/getData.js/getIndexBookList error')
    //         // console.log(err)
    //     })
    // }
}

export default {
    state,
    getters,
    mutations,
    actions
}
