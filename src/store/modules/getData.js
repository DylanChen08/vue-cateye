import getData from '../../api/getData'
//666
const state = {

}
const getters = {
    async getIndex() {
        console.log(3349684)
        let res = await getData.getIndexMoviesList()
        console.log(3349685)
        console.log(22222, res)
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
const mutations = {

}
const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}
