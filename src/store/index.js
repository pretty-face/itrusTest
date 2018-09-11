/*
 * @Author: LiPengCheng 
 * @Date: 2018-05-30 17:41:49 
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-09-04 13:06:37
 */
import Vue from 'vue'
import Vuex from 'vuex'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import getters from './getters'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        permission,
        tagsView,
    },
    getters
})

export default store
