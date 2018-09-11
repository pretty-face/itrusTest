/*
 * @Author: LiPengCheng 
 * @Date: 2018-05-30 17:41:53 
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-06-05 18:43:20
 */
const getters = {
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    permission_routers: state => state.permission.routers,
}
export default getters
