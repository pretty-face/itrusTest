/*
 * @Author: LiPengCheng 
 * @Date: 2018-05-30 17:41:59 
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-09-04 13:05:30
 */
import {
    constantRouterMap,
} from '@/router'
import {
    Message
} from 'element-ui'
import axios from 'axios'
import router from "@/router"

const permission = {
    state: {
        routers: constantRouterMap,
    },
}
export default permission
