/*
 * @Author: LiPengCheng
 * @Date: 2018-05-30 17:42:04
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-09-04 13:58:45
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [{
        path: '',
        component: Layout,
        redirect: 'dashboard',
        hidden: false,
        alwaysShow: false,
        meta: {
            title: "test1",
            icon: "shezhi"
        },
        children: [{
            path: "dashboard",
            component: () =>
                import ("@/views/dashboard/index"),
            name: "dashboard",
            meta: {
                title: "dashboard",
                icon: "shezhi"
            }
        }]
    },
    {
        path: '/test',
        component: Layout,
        redirect: 'noredirect',
        hidden: false,
        name: "test",
        meta: {
            title: "test1",
            icon: "shezhi"
        },
        children: [{
            path: "test1",
            component: () =>
                import ("@/views/test/test1"),
            name: "test1",
            hidden: false,
            meta: {
                title: "test1",
                icon: "shezhi"
            }
        }, {
            path: "test2",
            component: () =>
                import ("@/views/test/test2"),
            name: "test2",
            hidden: false,
            meta: {
                title: "test2",
                icon: "shezhi"
            }
        }]
    }, {
        path: '/404',
        component: () =>
            import ("@/views/errorPage/404"),
        hidden: true
    }, {
        path: '*',
        redirect: '/404',
        hidden: true
    },
]
export default new Router({
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})
