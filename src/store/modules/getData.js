import getData from '../../api/getData'

const state ={}
const getters={
    getIndexMoviesList(){
        return getData.getIndexMoviesList().then(()=>{}).catch((err)=>{
            console.log('modules/getData.js/getIndexMoviesList error')
            console.log(err)
        })
    },
    getIndexTvList(){
        return getData.getIndexTvList().then(()=>{}).catch((err)=>{
            console.log('modules/getData.js/getIndexTvList error')
            console.log(err)
        })
    },
    getIndexShowsList(){
        return getData.getIndexShowsList().then(()=>{}).catch((err)=>{
            console.log('modules/getData.js/getIndexShowsList error')
            console.log(err)
        })
    },
    getIndexBookList(){
        return getData.getIndexBooksList().then(()=>{}).catch((err)=>{
            console.log('modules/getData.js/getIndexBookList error')
            console.log(err)
        })
    }
}
const mutations={}
const action={}

export default {
    state,
    getters,
    mutations,
    action
}
