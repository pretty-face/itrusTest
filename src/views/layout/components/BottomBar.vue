/*
 * @Author: LiPengCheng 
 * @Date: 2018-06-05 09:41:57 
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-06-05 19:52:34
 */
<template>
    <div class="bottomBarContent">
        <span class="info">Copyright©2001-2018北京天威诚信电子商务服务有限公司 版权所有 京ICP备06042509号</span>
    </div>
</template>

<script>
export default {
  name: "BottomBar",
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.bottomBarContent {
  width: 100%;
  height: 30px;
  position: fixed;
  background-color: #333333;
  bottom: 0;
}
.info {
  line-height: 30px;
  color: #ffffff;
  text-align: center;
  width: 100%;
  font-weight: 500;
  display: inline-block;
  font-size: 12px;
}
</style>