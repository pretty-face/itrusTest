/*
 * @Author: LiPengCheng 
 * @Date: 2018-06-05 09:42:01 
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-09-04 13:32:23
 */
<template>
    <div class="leftTitleContent">
        <img class="leftTitleImg" :src="'static/yunying.png'">
        <span class="leftTitle">测试标签</span>
    </div>
</template>

<script>
export default {
  name: "LeftTitle",
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.leftTitleContent {
  position: fixed;
  width: 221px;
  height: 60px;
  line-height: 60px;
  background-color: #e9524b;
}
.leftTitleImg {
  margin-left: 20px;
  width: 20px;
  height: 20px;
}
.leftTitle {
  height: 60px;
  display: inline-block;
  margin-left: 15px;
  font-weight: 900;
  color: white;
  vertical-align: 3px;
  font-size: 18px;
}
</style>