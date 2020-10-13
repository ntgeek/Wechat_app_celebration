<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu  >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>校庆管理平台</span>
          </template>
        </el-submenu>
        <el-menu-item index="/content2" @click="goTo('/content2')">
          <i class="el-icon-menu"></i>
          <span slot="title">数据统计</span>
        </el-menu-item>
        <el-menu-item index="/content3" @click="goTo('/content3')">
          <i class="el-icon-setting"></i>
          <span slot="title">屏蔽词管理</span>
        </el-menu-item>
        <el-menu-item index="/content4" @click="goTo('/content4')">
          <i class="el-icon-attract"></i>
          <span slot="title">表情包管理</span>
        </el-menu-item>
        <el-menu-item index="/content1" @click="goTo('/content1')">
          <i class="el-icon-basketball"></i>
          <span slot="title">留言管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <router-view></router-view>
  </el-row>
</template>

<script>
  export default {
    data() {
      return{
      articles:[]
    }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goTo(path) {
        this.$router.replace(path);
      },
      }
  };
</script>

<style scoped>
  .tac{width: 30vw;}
</style>

