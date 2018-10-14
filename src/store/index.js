import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
console.log(2)
import carousel from './modules/carousel'
console.log(34)
console.log(carousel)
export default new Vuex.Store({
   modules:{
       carousel:carousel
   }
})