/*
 * @Author: LiPengCheng 
 * @Date: 2018-05-30 11:30:58 
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-09-04 13:03:04
 */
<template>

<section class="app-main">
    <navbar></navbar>
    <transition name="fade" mode="out-in">
      <el-scrollbar>
        <keep-alive :include="cachedViews">
          <router-view></router-view>
        </keep-alive>
      </el-scrollbar>
    </transition>
</section>
</template>

<script>
import { Navbar } from "../components";
export default {
  name: "AppMain",
  components: {
    Navbar
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    }
  }
};
</script>