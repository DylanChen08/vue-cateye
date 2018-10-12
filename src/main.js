import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import svg from './helpers/svgfont'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    svg,
    render
:
h => h(App)
}).
$mount('#app')
