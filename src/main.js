import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import svg from './helpers/svgfont'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import utils from './helpers/utils'
import lodash from 'lodash'


Vue.config.productionTip = false


Vue.use(ElementUI);
Vue.use(utils);
Vue.use(lodash);


new Vue({
    router,
    store,
    // svg,
    render:
        h => h(App)
}).$mount('#app')
