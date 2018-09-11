/*
 * @Author: LiPengCheng
 * @Date: 2018-05-30 11:31:03
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-06-05 15:13:47
 */
<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="300"
      :default-active="$route.path"
      background-color="#222333"
      text-color="rgba(255,255,255,0.6)"
      :unique-opened="true"
      active-text-color="#e9524b"
      style="border: none"
    >
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(["permission_routers", "sidebar"])
  }
};
</script>
