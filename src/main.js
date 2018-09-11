/*
 * @Author: LiPengCheng 
 * @Date: 2018-05-30 17:40:42 
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-09-04 13:31:28
 */
import Vue from 'vue'
import 'normalize.css/normalize.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang'
import './permission'
import './interceptors'

// axios.defaults.baseURL = "/operation";

Vue.use(Element, {
    size: 'medium',
    i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    template: '<App/>',
    components: {
        App
    },
    render: h => h(App)
})
