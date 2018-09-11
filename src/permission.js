/*
 * @Author: LiPengCheng
 * @Date: 2018-05-30 17:40:45
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-09-04 13:57:58
 */
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next();
})

router.afterEach(() => {
  NProgress.done()
})
