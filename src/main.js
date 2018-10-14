import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import svg from './helpers/svgfont'      //引入阿里巴巴iconfront-svg
import ElementUI from 'element-ui';      //引入elementUI
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false


Vue.use(ElementUI);

new Vue({
    router,
    store,
    svg,
    render:
        h => h(App)
}).$mount('#app')
