import getData from '../../api/getData'
//666
const state = {
    movieId: null
}
const getters = {
    movieId: state => state.movieId,
}
const mutations = {
    setMovieId(state, payload) {
        state.movieId = payload.movieId
    },

}
const actions = {
    async getCarousel() {
        let res = await getData.getCarousel()
        return res
    },
    //获取正在上映电影的数据
    async getMovieReleased() {
        let res = await getData.getMovieReleasedList()
        return res
    },
    //获取未上映电影的数据
    async getMoviePreview() {
        let res = await getData.getMoviePreviewList()
        return res
    },

    //获取指定id的电影的细节
    async getMovieDetails({commit},{movieId}){
        console.log(11256)
        let res = await getData.getMovieDetails({movieId})
        commit('setMovieId',{movieId})
        return res
    },

    //获取指定id的电影的评论
    async getMovieComments({commit},{movieId}){
        let res = await getData.getMoviesComments({movieId})
        commit('setMovieId',{movieId})
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
