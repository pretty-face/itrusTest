<template>
    <div>
        测试页面1
        <el-progress :text-inside="true" :stroke-width="18" :percentage="percent"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="percent"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="percent" color="rgba(142, 113, 199, 0.7)"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="percent" status="success"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="percent" status="exception"></el-progress>
    </div>
</template>

<script>
export default {
  name: "name",
  data: function() {
    return {
        percent: 0
    };
  },
  mounted () {
      var timmer = setInterval(() => {
          this.percent++
          if (this.percent >= 100) {
              clearInterval(timmer)
          }
      }, 100)
  },
  methods: {}
};
</script>

<style scoped>
</style>
