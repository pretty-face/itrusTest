/*
 * @Author: LiPengCheng
 * @Date: 2018-05-30 11:31:14
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-09-04 13:09:45
 */
<template>
  <div class="app-wrapper">
    <top-bar></top-bar>
    <!--<left-title></left-title>-->
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <tags-view></tags-view>
      <app-main></app-main>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import {
  Sidebar,
  AppMain,
  TagsView,
  LeftTitle,
  BottomBar,
  TopBar
} from "./components";

export default {
  name: "layout",
  components: {
    Sidebar,
    AppMain,
    TagsView,
    LeftTitle,
    BottomBar,
    TopBar
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
