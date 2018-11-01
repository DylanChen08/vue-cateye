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
    //获取正在上映电影的数据
    async getMoviesReleased() {
        // console.log(3349684)
        let res = await getData.getMoviesReleasedList()
        // console.log(3349685)
        // console.log(22222, res)
        return res
    },
    async getMovieId({commit},{movieId}){
        console.log(11256)
        let res = await getData.getMoviesDetails({movieId})
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
