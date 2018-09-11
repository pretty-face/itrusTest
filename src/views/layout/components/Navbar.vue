/*
 * @Author: LiPengCheng 
 * @Date: 2018-05-30 11:30:52 
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-07-25 10:17:54
 */
<template>
<el-menu class="navbar" mode="horizontal">
  <div style="margin-top:10px;">
    <img style="float:left;margin-left:15px;margin-top:8px;margin-right:10px;width:10px;height:14px" src="static/dingwei.png">
    <breadcrumb class="breadcrumb-container"></breadcrumb>
  </div>

</el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";

export default {
  components: {
    Breadcrumb
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  width: 100%;
  font-size: 12px !important;
  border-radius: 0px !important;
  background-color: white;
  .hamburger-container {
    height: 20px;
    float: left;
    margin-top: 10px;
    padding: 0 10px;
  }
  .breadcrumb-container {
    float: left;
    height: 20px;
  }
  .right-menu {
    float: right;
    height: 100%;
    margin-top: 5px;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
      &:hover {
        transform: scale(1.2, 1.2);
      }
    }
    .international {
      vertical-align: 15px;
      &:hover {
        transform: scale(1.2, 1.2);
      }
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 30px;
      margin-right: 10px;
      .avatar-wrapper {
        cursor: pointer;
        position: relative;
        .user-avatar {
          width: 32px;
          height: 32px;
        }
        &:hover {
          transform: scale(1.2, 1.2);
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
