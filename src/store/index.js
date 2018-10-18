import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import carousel from './modules/carousel'
import pageIndex from './modules/pageIndex'
import movieReleasedList from './modules/movieReleasedList'

export default new Vuex.Store({
   modules:{
       carousel,
       pageIndex,
       movieReleasedList
   }
})