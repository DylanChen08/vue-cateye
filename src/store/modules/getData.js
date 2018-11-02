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
    //获取首页的数据
    async getIndex() {
        let res = await getData.getIndexMoviesList()
        return res
    },
    async getCarousel() {
        let res = await getData.getCarousel()
        return res
    },
    //获取正在上映电影的数据
    async getMoviesReleased() {
        let res = await getData.getMoviesReleasedList()
        return res
    },
    //获取指定电影的id
    async getMovieId({commit},{movieId}){
        console.log(11256)
        let res = await getData.getMoviesDetails({movieId})
        commit('setMovieId',{movieId})
        return res
    },
    //获取未上映电影的数据
    async getMoviesPreview() {
        let res = await getData.getMoviesPreviewList()
        return res
    },
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
