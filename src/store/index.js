import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getData from './modules/getData'

export default new Vuex.Store({
   modules:{
       getData,
   }
})